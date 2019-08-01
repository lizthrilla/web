import React, { useState } from 'react'
import { navigate } from 'gatsby'
import Link from 'gatsby-link'
import { globalHistory } from '@reach/router'
import queryString from 'query-string'
import moment from 'moment'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import PageTitle from '../../../components/PageTitle'
import Section from '../../../components/Section'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'
import { hashCode } from '../../../util'

const CODE_HASH = -523902460

const COURSES = {
  // dmds: {
  //   session: 'Spring Session',
  //   name: 'Digital Marketing',
  //   days: 'Saturdays',
  //   time: '10:00 a.m. - 3:00 p.m.',
  //   start: '2019-04-13',
  //   end: '2019-04-20',
  // },
  wdtd: {
    session: 'Fall Session',
    name: 'Web Development Test Drive',
    days: 'Saturdays',
    time: '10:00 a.m. - 3:00 p.m.',
    start: '2019-09-21',
    end: '2019-10-26',
  },
  // rbiw: {
  //   session: 'Summer Session',
  //   name: 'React I: Building Interactive Websites',
  //   days: 'Tuesdays and Thursdays',
  //   time: '6:30 - 8:30 p.m.',
  //   start: '2019-07-30',
  //   end: '2019-09-05',
  // },
}

const GATEWAY_API_URL = process.env.GATSBY_GATEWAY_API_URL

const PartTimeRegistration = () => {
  const params = queryString.parse(globalHistory.location.search)

  const [values, setValues] = useState({
    course: params.course || Object.keys(COURSES)[0],
    name: '',
    email: '',
    phone: '',
    code: '',
    acceptPolicy: false,
  })

  const onChange = event => {
    const target = event.target
    const name = target.name
    let value = target.type === 'checkbox' ? target.checked : target.value
    if (name === 'code') {
      value = value.trim().toUpperCase()
    }
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    fetch(`${GATEWAY_API_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        full_name: values.name,
        email_address: values.email,
        phone_number: values.phone,
        code: values.code,
        course: values.course,
      }),
    }).then(() => {
      if (window.ga) {
        ga('send', 'event', {
          eventCategory: 'Course Registration',
          eventAction: 'Submit',
          eventLabel: COURSES[values.course].name,
        })
      }
      navigate('/thanks')
    })
  }

  const validateValues = () => {
    if (values.name.length < 1) return false
    if (values.phone.length < 1) return false
    if (!/^\S+@\S+$/.test(values.email)) return false
    if (!values.acceptPolicy) return false
    if (!Object.keys(COURSES).includes(values.course)) return false
    return true
  }

  const course = COURSES[values.course]

  return (
    <Layout>
      <AcademyNavigation />
      <Section>
        <Container>
          <PageTitle>Part-Time Course Registration</PageTitle>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Course</label>
              <div className="control">
                <div className="select">
                  <select
                    name="course"
                    value={values.course}
                    onChange={onChange}
                  >
                    {Object.keys(COURSES).map(key => (
                      <option value={key} key={key}>
                        {COURSES[key].name} ({COURSES[key].session})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Full Name</label>
              <div className="control">
                <input
                  type="text"
                  name="name"
                  className="input"
                  value={values.name}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Email Address</label>
              <div className="control">
                <input
                  type="email"
                  name="email"
                  className="input"
                  value={values.email}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Phone Number</label>
              <div className="control">
                <input
                  type="tel"
                  name="phone"
                  className="input"
                  value={values.phone}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="content box">
              <h4>Refund Policy</h4>
              <p>
                Enrollment is limited in order to keep our class sizes small and
                to ensure a high-quality experience for students and
                instructors. These policies help ensure we are able to continue
                to providing the best service to our students.
              </p>
              <ul>
                <li>
                  Suncoast Developers Guild will refund 100% of the fee if a
                  student withdraws before the first class.
                </li>
                <li>
                  Students will be refunded 50% of the fee if the student
                  withdraws after the first week of class but before the fourth
                  week.
                </li>
                <li>
                  Suncoast Developers Guild is <em>not</em> responsible for
                  missed classes. We will accommodate students as much possible,
                  but refunds will not be given for missed classes.
                </li>
                <li>
                  Medical and family emergencies can and will be taken into
                  consideration in regards to exceptions to these policies.
                  Exceptions will be made at the sole discretion of Suncoast
                  Developers Guild.
                </li>
              </ul>
            </div>
            <div className="field">
              <div className="control">
                <label className="radio">
                  <input
                    type="checkbox"
                    name="acceptPolicy"
                    checked={values.acceptPolicy}
                    onChange={onChange}
                  />
                  <span>
                    I have read and understand the above refund policy.
                  </span>
                </label>
              </div>
            </div>
            <table className="table">
              <tbody>
                <tr>
                  <th>Course</th>
                  <td>{course.name}</td>
                  <td />
                </tr>
                <tr>
                  <th>Start Date</th>
                  <td>{moment(course.start).format('MMMM, Do Y')}</td>
                  <td />
                </tr>
                <tr>
                  <th>End Date</th>
                  <td>{moment(course.end).format('MMMM, Do Y')}</td>
                  <td />
                </tr>
                <tr>
                  <th>Days</th>
                  <td>{course.days}</td>
                  <td />
                </tr>
                <tr>
                  <th>Time</th>
                  <td>{course.time}</td>
                  <td />
                </tr>
                <tr>
                  <th>Fee</th>
                  <td>
                    <Price code={values.code} />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="code"
                      className="input is-small"
                      placeholder="CODE"
                      value={values.code}
                      onChange={onChange}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="content">
              <p>
                After completing this registration form, a confirmation and an
                invoice for the above fee will be emailed to you. Unpaid seats
                will not be held.{' '}
                <strong>The fee is due 1 week before class begins.</strong>
              </p>
            </div>
            <div className="field">
              <div className="control">
                <button
                  className="button is-primary"
                  type="submit"
                  disabled={!validateValues()}
                >
                  Submit
                </button>
              </div>
            </div>
            <div className="message">
              <p className="message-body">
                <strong>Notice:</strong> By submitting this registration, you
                are agreeing to our <Link to="/privacy">Privacy Policy</Link>{' '}
                and <Link to="/terms">Terms of Service</Link>.
              </p>
            </div>
          </form>
        </Container>
      </Section>
    </Layout>
  )
}

const Price = ({ code }) => {
  if (CODE_HASH === hashCode(code)) {
    return (
      <span className="discount">
        <span className="full-price">$1,999</span>
        <span className="discounted has-text-success">$1,199</span>
      </span>
    )
  } else {
    return <span>$1,999</span>
  }
}

export default PartTimeRegistration
