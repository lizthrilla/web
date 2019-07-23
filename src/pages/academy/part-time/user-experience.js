import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Section from '../../../components/Section'
import PageTitle from '../../../components/PageTitle'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'
import image from '../../../images/part-time/uxnd.svg'

const TestDriveCourse = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>User Experience (UX) for Non-Designers</PageTitle>
        <h4 className="subtitle is-4">Part-time Course</h4>

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
              <p className="title is-5">Saturdays</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Time</p>
              <p className="title is-5">10 a.m. &ndash; 3 p.m.</p>
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
          <div className="level-item has-text-centered">
            <Link
              to="/academy/part-time/register?course=uxnd"
              className="button is-primary"
              disabled
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
                Over the course of six weeks, students learn the theory and
                practice behind User Experience (UX) design through a series of
                lectures, sharing of professional examples, interactive team
                activities, and individual assignments. With a focus on solving
                problems creatively and systematically by putting your users and
                their needs first, students will utilize User Experience (UX)
                and User-Interface (UI) techniques and methodologies to develop
                a product or service of their choosing.
              </p>

              <p>
                This is a Saturday class with optional lab time from 3 - 5 p.m.
                Instructor hours will be available during the week at designated
                times.
              </p>

              <table className="table">
                <tbody>
                  <tr>
                    <th>10 a.m. - 12 p.m.</th>
                    <td>Instruction</td>
                  </tr>
                  <tr>
                    <th>12 p.m. - 1 p.m.</th>
                    <td>Lunch Break</td>
                  </tr>
                  <tr>
                    <th>1 p.m. - 3 p.m.</th>
                    <td>Instruction / mob/individual activity</td>
                  </tr>
                  <tr>
                    <th>3 p.m. - 5 p.m.</th>
                    <td>Lab Time - Instructor available for 1:1 assistance</td>
                  </tr>
                </tbody>
              </table>

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
                    <h6 className="subtitle is-6">UX/UI Overview</h6>
                  </th>
                  <td>
                    <ul>
                      <li>
                        How do UX/UI differ and in what ways are they similar?
                      </li>
                      <li>
                        Differences between feature development and feature
                        improvement.
                      </li>
                      <li>Tooling overview (Sketch/Figma/Abstract/Adobe)</li>
                      <li>Design Thinking overview</li>
                      <li>Impact Canvas</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Two</h5>
                    <h6 className="subtitle is-6">Understanding your users</h6>
                  </th>
                  <td>
                    <ul>
                      <li>The importance of empathy</li>
                      <li>Ideation and Prototyping</li>
                      <li>
                        UX research methods: Card sorts, Surveys, Usability
                        testing, User Interviews, User Journeys, and Persona
                        development.
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Three</h5>
                    <h6 className="subtitle is-6">
                      UX Basics - Methods: when, why, and how
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>User Flows</li>
                      <li>Wireframes &amp; Mockups</li>
                      <li>Testing selection</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Four</h5>
                    <h6 className="subtitle is-6">Visual Design</h6>
                  </th>
                  <td>
                    <ul>
                      <li>
                        Foundational knowledge
                        <ul>
                          <li>Grid/spacing</li>
                          <li>Typography</li>
                          <li>Layout</li>
                          <li>Color Theory</li>
                        </ul>
                      </li>
                      <li>Hi-fidelity design</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Five</h5>
                    <h6 className="subtitle is-6">
                      UI Development - Overview as it pertains to UX
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>Git / intro to git/GitLab or Github</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SASS</li>
                      <li>JS</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Six</h5>
                    <h6 className="subtitle is-6">
                      Research Project: Bringing it all together
                    </h6>
                  </th>
                  <td>
                    <ul>
                      <li>Review and wrap-up</li>
                      <li>Class presentations</li>
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
                <li>
                  Understand and articulate the differences, similarities, and
                  overlap between User Interface (UI) and User Experience (UX)
                  design.
                </li>
                <li>
                  Utilize the design thinking process and UX/UI toolsets to
                  solve problems.
                </li>
                <li>Work with cross-functional teams to create solutions.</li>
                <li>
                  Communicate ideas, and give/receive direct feedback to
                  facilitate ideation.
                </li>
                <li>
                  Prototype and test using a variety of UX research
                  methodologies.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="has-text-centered">
          <Link
            to="/academy/part-time/register?course=uxnd"
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
    contentfulPerson(name: { eq: "Sarrah Vesselov" }) {
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
