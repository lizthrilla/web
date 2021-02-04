import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Section from '../../../components/Section'
import PageTitle from '../../../components/PageTitle'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'
import image from '../../../images/part-time/wdtd.svg'

const TestDriveCourse = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Web Development Test Drive</PageTitle>
        <h4 className="subtitle is-4">
          An Introduction to Programing and the Web
        </h4>

        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Start Date</p>
              <p className="title is-5">February 20, 2021</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">End Date</p>
              <p className="title is-5">March 27, 2021</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Days</p>
              <p className="title is-5">Sat</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Time</p>
              <p className="title is-5">10:00 a.m. &ndash; 3:00 p.m.</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Fee</p>
              <p className="title is-5">
                $1,200<sup>*</sup>
              </p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <Link
              to="/academy/part-time/register?course=wdtd"
              className="button is-primary"
            >
              Register
            </Link>
          </div>
        </nav>

        <h4 className="title is-4">Course Description</h4>

        <div className="columns">
          <div className="column">
            <div className="content">
              <p>
                Throughout this six-week course, students learn the basics of
                front-end web development. Students will learn the basic
                practices, fundamentals, and ideas behind creating dynamic
                websites with HTML, CSS, and JavaScript. With a focus on applied
                knowledge, students will get hands-on training using HTML to
                create semantic page structures, CSS to implement modern
                designs, and JavaScript to make the pages dynamic and
                interactive.
              </p>

              <p>
                This course can also be utilized as a preview to the immersive
                12-week program, giving students new to development exposure to
                what the full-time course would feel like and a great
                introduction to being a developer.{' '}
                <em>
                  The fee for this introductory course can be applied directly
                  to the tuition of our immersive Web Development Program.
                </em>
              </p>

              <p>
                Classes are once week (as scheduled) at 10:00 a.m to 3 P.M. The course is taught{' '}
                <strong>online</strong>.
              </p>

              <p>
                <sup>*</sup>Group rates are available,{' '}
                <Link to="/contact">contact us</Link> for more information.
              </p>
            </div>
          </div>
          <div className="column is-narrow">
            <figure className="image is-128x128" style={{ margin: 'auto' }}>
              <img src={image} alt="Course Logo" width="128" height="128" />
            </figure>
          </div>
        </div>

        <h4 className="title is-4">
          About the Instructor: {data.contentfulPerson.name}
        </h4>

        <div className="columns">
          <div className="column is-narrow">
            <Image
              Tag="figure"
              className="image"
              fixed={data.contentfulPerson.image.fixed}
              alt={data.contentfulPerson.image.description}
            />
          </div>
          <div className="column">
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html:
                  data.contentfulPerson.biography.childMarkdownRemark.html,
              }}
            />
          </div>
        </div>
        <hr />
        <div className="columns">
          <div className="column is-three-fifths">
            <h4 className="title is-4">Course Outline</h4>

            <table className="table">
              <tbody>
                <tr>
                  <th>
                    <h5 className="title is-5">Week One</h5>
                    <h6 className="subtitle is-6">Intro to HTML</h6>
                  </th>
                  <td>
                    <ul>
                      <li>Basics of HTML</li>
                      <li>Using semantic HTML</li>
                      <li>Our online development environment</li>
                      <li>Web Accessibility</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Two</h5>
                    <h6 className="subtitle is-6">Intro to CSS</h6>
                  </th>
                  <td>
                    <ul>
                      <li>Basics of CSS</li>
                      <li>How does CSS improves the development experience?</li>
                      <li>Common CSS properties</li>
                      <li>Classes and IDs</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Three</h5>
                    <h6 className="subtitle is-6">
                      CSS Layouts
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>Using CSS to layout a webpage</li>
                      <li>The box model</li>
                      <li>Flexbox</li>
                      <li>CSS Grid</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Four</h5>
                    <h6 className="subtitle is-6">
                      Responsive Web
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>Improving the experience on different sized screens</li>
                      <li>Media Queries</li>
                      <li>Responsive Design</li>
                      <li>Mobile First Design</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Five</h5>
                    <h6 className="subtitle is-6">
                      Intro to JavaScript
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>What is JavaScript?</li>
                      <li>Variables and Types</li>
                      <li>The Dom</li>
                      <li>Functions</li>
                      <li>Events</li>
                      <li>Using CSS and JavaScript Together</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Six</h5>
                    <h6 className="subtitle is-6">
                    Putting it altogether
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>Arrays and Loops</li>
                      <li>Inputs and Javascript</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column">
            <h4 className="title is-4">Expected Outcomes</h4>

            <div className="content">
              <p>By the end of the course, students should be able to:</p>

              <ul>
                <li>Explain the basic developer workflow</li>
                <li>
                  Implement semantic HTML to structure a webpage's content
                </li>
                <li>
                  Implement CSS to style and layout a webpage's presentation
                </li>
                <li>
                  Implement JavaScript to manipulate and HTML webpage's behavior
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="has-text-centered">
          <Link
            to="/academy/part-time/register?course=wdtd"
            className="button is-primary"
          >
            Register for this Course
          </Link>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default TestDriveCourse

export const pageQuery = graphql`
  query {
    contentfulPerson(name: { eq: "Liz Tiller" }) {
      name
      biography {
        childMarkdownRemark {
          html
        }
      }
      image {
        fixed(width: 128, height: 128, resizingBehavior: FILL) {
          ...GatsbyContentfulFixed_withWebp
        }
        description
      }
    }
  }
`
