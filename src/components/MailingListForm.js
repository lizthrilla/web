import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import cx from 'classnames'
import Carousel from 're-carousel'
// import temp from '../images/temp.svg'

const GATEWAY_API_URL = process.env.GATSBY_GATEWAY_API_URL

const INITIAL_STATE = {
  givenName: '',
  familyName: '',
  email: '',
  thanks: false
}

class MailingListForm extends React.Component {
  state = INITIAL_STATE

  constructor() {
    super()
    this.formRef = React.createRef()
  }

  _change = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  _submit = event => {
    event.preventDefault()
    const { elements } = this.formRef.current
    const { givenName, familyName, email } = this.state
    if (
      !elements.contactMeOnlyByCarrierPigeon.checked &&
      givenName &&
      familyName &&
      email
    ) {
      fetch(`${GATEWAY_API_URL}/lead`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8'
        },
        body: JSON.stringify({
          source: 'mailing-list',
          givenName,
          familyName,
          email
        })
      }).then(() => {
        this.setState({ ...INITIAL_STATE, thanks: true })
      })
    }
  }

  _dismissModal = () => {
    this.setState({ thanks: false })
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query TourGalleryQuery {
            allContentfulTourGallery {
              edges {
                node {
                  id
                  caption
                  image {
                    fluid(maxWidth: 720, maxHeight: 360) {
                      ...GatsbyContentfulFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allContentfulTourGallery: gallery }) => {
          return (
            <>
              <section className="section mailing-list-form">
                <div className="container">
                  <div className="columns">
                    <div className="column is-three-fifths">
                      <h2 className="title">Join our Mailing List</h2>
                      <p className="subtitle">
                        Stay up to date with our latest news and upcoming
                        events.
                      </p>
                      <form onSubmit={this._submit} ref={this.formRef}>
                        <div className="field is-grouped">
                          <div className="control is-expanded">
                            <label className="label is-small">First Name</label>
                            <input
                              type="text"
                              className="input"
                              placeholder="Something"
                              name="givenName"
                              onChange={this._change}
                              value={this.state.givenName}
                            />
                          </div>
                          <div className="control is-expanded">
                            <label className="label is-small">Last Name</label>
                            <input
                              type="text"
                              className="input"
                              placeholder="Clever"
                              name="familyName"
                              onChange={this._change}
                              value={this.state.familyName}
                            />
                          </div>
                        </div>
                        <div className="field">
                          <label className="label is-small">
                            Email Address
                          </label>
                          <p className="control has-icons-left has-icons-right">
                            <input
                              className="input"
                              type="email"
                              placeholder="something@clever.todo"
                              name="email"
                              onChange={this._change}
                              value={this.state.email}
                            />
                            <span className="icon is-small is-left">
                              <i className="fas fa-envelope" />
                            </span>
                          </p>
                          <input
                            type="checkbox"
                            name="contactMeOnlyByCarrierPigeon"
                            value="1"
                            tabIndex="-1"
                            autoComplete="off"
                          />
                          <p className="help">
                            By sharing your email, you agree to our{' '}
                            <Link to="/privacy">Privacy Policy</Link> and{' '}
                            <Link to="/terms">Terms of Service</Link>.
                          </p>
                        </div>
                        <div className="buttons">
                          <button
                            className="button is-primary"
                            onClick={this._submit}
                          >
                            Sign Up Now
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="column">
                      <h2 className="title">Take a Tour</h2>
                      <p className="subtitle">Fridays at 12:00 p.m.</p>
                      <div className="tour-carousel">
                        <div className="tour-carousel-body">
                          <Carousel auto loop>
                            {gallery.edges.map(({ node }) => (
                              <Image
                                key={node.id}
                                Tag="figure"
                                className="image is-2x1"
                                fluid={node.image.fluid}
                                alt={node.caption}
                              />
                            ))}
                          </Carousel>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          Come visit our campus in St. Petersburg, FL and see
                          what we&rsquo;re all about.
                        </p>
                      </div>
                      <div className="buttons">
                        <a
                          href="https://www.eventbrite.com/e/campus-tour-tickets-53318845101"
                          className="button is-primary"
                        >
                          RSVP
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className={cx('modal', { 'is-active': this.state.thanks })}>
                <div
                  className="modal-background"
                  onClick={this._dismissModal}
                />
                <div className="modal-content">
                  <div className="box content has-text-centered">
                    <h3 className="title is-3">Thanks for signing up!</h3>
                    <h4 className="subtitle">
                      Check your email to confirm your subscription.
                    </h4>
                    {/* <figure>
                      <img
                        src={temp}
                        alt="Placeholder Illustration"
                        width="200"
                      />
                    </figure> */}
                  </div>
                </div>
                <button
                  className="modal-close is-large"
                  aria-label="close"
                  onClick={this._dismissModal}
                />
              </div>
            </>
          )
        }}
      />
    )
  }
}

export default MailingListForm
