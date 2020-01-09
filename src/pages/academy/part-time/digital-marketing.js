import React from 'react'
import Link from 'gatsby-link'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../../../components/Layout'
import Container from '../../../components/Container'
import Section from '../../../components/Section'
import PageTitle from '../../../components/PageTitle'
import AcademyNavigation from '../../../components/academy/AcademyNavigation'
import image from '../../../images/part-time/dmds.svg'

const TestDriveCourse = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Digital Marketing</PageTitle>
        <h4 className="subtitle is-4">
          Elevate your Business with Digital Strategy
        </h4>

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
              <p className="title is-5">Saturday</p>
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
          {/* <div className="level-item has-text-centered">
            <Link
              to="/academy/part-time/register?course=dmds"
              className="button is-primary"
              disabled
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
                From content strategy and social media to paid campaigns and
                analytics, learn digital-marketing tactics to increase
                engagement, drive growth, and acquire users.{' '}
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
                    <td>Instruction</td>
                  </tr>
                  <tr>
                    <th>3 p.m. - 5 p.m.</th>
                    <td>Lab Time</td>
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
                    <h6 className="subtitle is-6">
                      Digital Marketing Frameworks and Creating Funnels
                    </h6>
                  </th>
                  <td>
                    <p>
                      Learn how to set objectives and plan a digital marketing
                      campaign. Understand how the concept of a funnel and how
                      to drive acquisition through marketing.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Two</h5>
                    <h6 className="subtitle is-6">
                      Digital Strategy: SEO + Customer Acquisition + Conversion
                      Marketing
                    </h6>
                  </th>
                  <td>
                    <p>
                      Learn how to use various channels (paid, search, content,
                      social and more) to acquire customers.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Three</h5>
                    <h6 className="subtitle is-6">
                      Content Marketing and Social Media
                    </h6>
                  </th>
                  <td>
                    <p>
                      Learn the role of content marketing through web,
                      multimedia, and social media platforms. Discover how paid
                      campaigns play into converting content into customers or
                      users.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Four</h5>
                    <h6 className="subtitle is-6">
                      Marketing Acquisition and Conversion Rate Optimization
                    </h6>
                  </th>
                  <td>
                    <p>
                      Learn how to generate leads, optimize landing pages and
                      run email campaigns to convert and retain your customers.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Five</h5>
                    <h6 className="subtitle is-6">Measurement and Metrics</h6>
                  </th>
                  <td>
                    <p>
                      Learn how setting KPIs, tracking metrics and analyzing
                      data can help you understand and improve your campaigns.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th>
                    <h5 className="title is-5">Week Six</h5>
                    <h6 className="subtitle is-6">
                      Storytelling and Marketing Budgets
                    </h6>
                  </th>
                  <td>
                    <p>
                      Discover how storytelling can turn potential customers and
                      users into loyal fans. Drive sales and acquisition through
                      persuasive marketing and learn to craft budgets that
                      reflect the specialized interests of your audience.{' '}
                    </p>
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
                  <strong>Acquire:</strong> Learn how paid, organic,
                  search-engine, and content marketing helps you reach a target
                  audience.
                </li>
                <li>
                  <strong>Convert:</strong> Discover the art of using landing
                  pages to transform interested prospects into customers.
                </li>
                <li>
                  <strong>Retain:</strong> Apply email-marketing and social
                  media techniques to engage users and get repeated interaction.{' '}
                </li>
                <li>
                  <strong>Measure:</strong> Optimize campaign performance with
                  analytics and KPIs, and learn to utilize metrics to draft
                  budgets and drive improvements to your marketing.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="has-text-centered">
          <Link
            to="/academy/part-time/register?course=dmds"
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
    contentfulPerson(name: { eq: "Kiki Roeder" }) {
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
