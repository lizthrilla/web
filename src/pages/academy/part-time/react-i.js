import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Section from '../../../components/Section'
import PageTitle from '../../../components/PageTitle'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'
import image from '../../../images/part-time/rbiw.svg'

const TestDriveCourse = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>React I: Building Interactive Websites</PageTitle>
        <h4 className="subtitle is-4">Up and Running with React</h4>

        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Start Date</p>
              <p className="title is-5">TBD</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">End Date</p>
              <p className="title is-5">TBD</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Days</p>
              <p className="title is-5">Tue &amp; Thu</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Time</p>
              <p className="title is-5">6:30 &ndash; 8:30 p.m.</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Fee</p>
              <p className="title is-5">
                $1,999<sup>*</sup>
              </p>
            </div>
          </div>
          {/* <div className="level-item has-text-centered">
            <Link
              to="/academy/part-time/register?course=rbiw"
              className="button is-primary"
            >
              Register
            </Link>
          </div> */}
        </nav>

        <h4 className="title is-4">Course Description</h4>

        <div className="columns">
          <div className="column">
            <div className="content">
              <p>
                Get up and running with React, one of the most popular
                JavaScript libraries for building powerful interactive web
                applications. Students should have prior experience with HTML,
                CSS, and JavaScript.
              </p>

              <p>
                Classes are for two hours every Monday and Wednesday at 6:30
                p.m. Optional lab time begins at 5:30 p.m. The course is taught{' '}
                <strong>in-person</strong>, on our campus at 2220 Central Ave,
                St. Petersburg, Florida.
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
                __html: data.contentfulPerson.biography.childMarkdownRemark.html
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
                  </th>
                  <td>
                    <ul>
                      <li>React Components</li>
                      <li>State</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Two</h5>
                  </th>
                  <td>
                    <ul>
                      <li>Life Cycle Events</li>
                      <li>Complex State</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Three</h5>
                  </th>
                  <td>
                    <ul>
                      <li>React and APIs</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Four</h5>
                  </th>
                  <td>
                    <ul>
                      <li>Component Best Practices</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Five</h5>
                  </th>
                  <td>
                    <ul>
                      <li>SPAs (Single Page Applications)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Six</h5>
                  </th>
                  <td>
                    <ul>
                      <li>Practice</li>
                      <li>Research Projects</li>
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
                <li>Implement a simple React App</li>
                <li>Explain how to use state and props</li>
                <li>Implement a SPA using react</li>
                <li>
                  Utilize, using React, APIs to build data driven websites
                </li>
                <li>
                  Create a React SPA website and deploy it to the internet
                </li>
                <li>Utilize React to manipulate HTML and CSS</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="has-text-centered">
          <Link
            to="/academy/part-time/register?course=rbiw"
            className="button is-primary"
          >
            Register for this Course
          </Link>
        </div> */}
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
