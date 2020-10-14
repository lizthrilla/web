import React, { Component } from 'react'
import _ from 'lodash'
import update from 'immutability-helper'
import queryString from 'query-string'
import Link from 'gatsby-link'
import QUESTIONS from './questions'
import Steps from './Steps'
import Question from './Question'
import Icon from '../Icon'

const LAST_STEP = 1

const GATEWAY_API_URL = process.env.GATSBY_GATEWAY_API_URL

class ProgramApplication extends Component {
  constructor() {
    super()
    const questions = _.flatten(QUESTIONS).map((q) => q.question)
    this.scrollRef = React.createRef()
    this.state = {
      loading: false,
      token: null,
      contact: {
        given_name: '',
        family_name: '',
        email_address: '',
        phone_number: '',
      },
      step: 0,
      expiry: new Date().getTime() + 604800000,
      responses: _.zipObject(questions, Array(questions.length).fill('')),
    }
  }

  componentDidMount() {
    const params = queryString.parse(location.search)

    if (params.continue) {
      this.setState({ step: 1 })
      fetch(`${GATEWAY_API_URL}/apply/${params.continue}`, {
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
      })
        .then((r) => r.json())
        .then((applicationState) => this.setState(applicationState))
    } else {
      const frozenState = window.localStorage.getItem('application-state')
      if (frozenState && frozenState.length > 0) {
        const thawedState = JSON.parse(frozenState)
        if (new Date().getTime() > thawedState.expiry) {
          this.setState(thawedState)
        } else {
          window.localStorage.removeItem('application-state')
        }
      }
    }

    this.updateApplicationInterval = setInterval(() => {
      this.updateApplication()
    }, 10000)
  }

  componentWillUnmount() {
    clearInterval(this.updateApplicationInterval)
  }

  continueApplication = async (event) => {
    event.preventDefault()

    if (this.state.token) {
      if (this.state.step === LAST_STEP) {
        await fetch(`${GATEWAY_API_URL}/apply/${this.state.token}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            question_responses: this.state.responses,
            application_status: 'complete',
          }),
        })
        window.localStorage.removeItem('application-state')
      } else {
        fetch(`${GATEWAY_API_URL}/apply/${this.state.token}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            ...this.state.contact,
            question_responses: this.state.responses,
          }),
        })
        window.localStorage.setItem(
          'application-state',
          JSON.stringify(this.state)
        )
      }
    } else {
      const { id: token } = await fetch(`${GATEWAY_API_URL}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          program: 'web-development',
          ...this.state.contact,
        }),
      }).then((response) => response.json())
      await this.setState({ token })
    }

    const step = this.state.token ? this.state.step + 1 : 0

    this.setState({ step })
    this.scrollToTop()
  }

  updateApplication() {
    if (this.state.token) {
      fetch(`${GATEWAY_API_URL}/apply/${this.state.token}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({ question_responses: this.state.responses }),
      })
      if (this.state.step !== LAST_STEP) {
        window.localStorage.setItem(
          'application-state',
          JSON.stringify(this.state)
        )
      }
    }
  }

  backtrackApplication = (event) => {
    event.preventDefault()
    this.setState({ step: Math.max(0, this.state.step - 1) })
    this.scrollToTop()
  }

  setResponse = (question, answer) => {
    this.setState({
      responses: update(this.state.responses, { [question]: { $set: answer } }),
    })
  }

  updateContact = (event) => {
    const { name, value } = event.target
    this.setState({
      contact: update(this.state.contact, { [name]: { $set: value } }),
    })
  }

  scrollToTop() {
    window.scrollTo(0, this.scrollRef.current.parentNode.offsetTop)
  }

  // NOTE: Very naive, maybe improve later?
  isValid() {
    switch (this.state.step) {
      case 0:
        const {
          given_name,
          family_name,
          email_address,
          phone_number,
        } = this.state.contact
        return (
          given_name.length > 0 &&
          family_name.length > 0 &&
          email_address.length > 0 &&
          phone_number.length > 0
        )
      default:
        return QUESTIONS[this.state.step]
          .map((q) => this.state.responses[q.question])
          .every((answer) => answer && answer.length > 0)
    }
  }

  render() {
    const { step } = this.state
    return (
      <div className="ProgramApplication" ref={this.scrollRef}>
        {step > 0 && <Steps step={step} />}
        {step > 0 && (
          <nav className="level">
            <div className="level-item">
              <Icon i="fas fa-user fa-sm" />
              <span>
                {this.state.contact.given_name} {this.state.contact.family_name}
              </span>
            </div>
            <div className="level-item">
              <Icon i="fas fa-envelope fa-sm" />
              <span>{this.state.contact.email_address}</span>
            </div>
            <div className="level-item">
              <Icon i="fas fa-mobile fa-sm" />
              <span>{this.state.contact.phone_number}</span>
            </div>
          </nav>
        )}
        <form onSubmit={(e) => e.preventDefault()}>
          {step === 0 && (
            <>
              <div className="field">
                <label className="label">First Name</label>
                <p className="control">
                  <input
                    type="text"
                    className="input"
                    name="given_name"
                    value={this.state.contact.given_name}
                    onChange={this.updateContact}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Last Name</label>
                <p className="control">
                  <input
                    type="text"
                    className="input"
                    name="family_name"
                    value={this.state.contact.family_name}
                    onChange={this.updateContact}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Email Address</label>
                <p className="control">
                  <input
                    type="email"
                    className="input"
                    name="email_address"
                    value={this.state.contact.email_address}
                    onChange={this.updateContact}
                  />
                </p>
              </div>
              <div className="field">
                <label className="label">Telephone Number</label>
                <p className="control">
                  <input
                    type="tel"
                    className="input"
                    name="phone_number"
                    value={this.state.contact.phone_number}
                    onChange={this.updateContact}
                  />
                </p>
              </div>
              <div className="content">
                <p>
                  Congratulations on making the first step to launch your career
                  in software development. Remember, there is no cost to apply
                  nor any obligation to join the program.
                </p>
                <p>
                  Filling out this inquiry will get you fast-tracked to meeting
                  with someone on our team to see if the Web Development Program
                  is a good fit for you.
                  <strong>
                    The next step will be an interview with our team.
                  </strong>{' '}
                </p>
                <p>
                  <strong>Notice:</strong> By continuing with this submission,
                  you agree to the terms of our{' '}
                  <Link to="/privacy">Privacy Policy</Link> and{' '}
                  <Link to="/terms">Terms of Service</Link>. We'll follow-up
                  with you by email, phone, and SMS.
                </p>
                <div className="message is-primary">
                  <p className="message-body">
                    This is an inquiry for our{' '}
                    <strong>full-time immersive</strong> web development program
                    . If you're interested in after hours learning, you can
                    register for our{' '}
                    <Link to="/academy/part-time">part-time courses</Link>.
                  </p>
                </div>
              </div>
            </>
          )}
          {step > 0 && step < 2 && (
            <>
              {QUESTIONS[step].map((question, index) => (
                <Question
                  {...question}
                  {...{ step, index }}
                  update={this.setResponse}
                  response={this.state.responses[question.question]}
                  key={index}
                />
              ))}
            </>
          )}
          {step === 2 && (
            <>
              <div className="content">
                <h3>Hey, you're all done!</h3>
                <p>
                  Thanks for submitting an inquiry about our program;{' '}
                  <em>that was easy right?</em>
                </p>
                <p>
                  Your <strong>next step is a casual interview</strong> where
                  you to get to learn more about the program and we can answer
                  any questions you may have.{' '}
                  <em>
                    Our enrollment specialist will reach out to you to schedule
                    your interview.
                  </em>
                </p>
                <p>
                  If you have not already, see if you're eligible for any of{' '}
                  <Link to="/academy/tuition/scholarships">
                    our scholarships
                  </Link>
                  .
                </p>
              </div>
            </>
          )}
          <hr />
          <div className="field is-grouped">
            {step < LAST_STEP + 1 && (
              <p className="control">
                <button
                  className="button is-primary"
                  type="submit"
                  onClick={this.continueApplication}
                  disabled={!this.isValid()}
                >
                  Continue
                </button>
              </p>
            )}
            {step > 0 && step < LAST_STEP + 1 && (
              <p className="control">
                <button
                  className="button is-text"
                  type="submit"
                  onClick={this.backtrackApplication}
                >
                  Back
                </button>
              </p>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default ProgramApplication
