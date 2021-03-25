import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'
import AcademyNavigation from '../../components/academy/AcademyNavigation'

const AcademyNetwork = ({ data }) => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Hiring Network</PageTitle>
        <h3 className="subtitle">
          Some of the great companies where our alumni work:
        </h3>
        <div className="columns is-multiline is-variable is-6">
          {data.allContentfulHiringPartner.edges.map(({ node: partner }) => (
            <div className="column is-one-quarter" key={partner.id}>
              <OutboundLink href={partner.url}>
                <Image
                  className="image"
                  fluid={partner.logo.fluid}
                  alt={partner.logo.description}
                />
              </OutboundLink>
            </div>
          ))}
        </div>
        <div className="content">
          <p>Why become part of our Hiring Network?</p>
          <ul>
            <li>
              Speak to students during the cohort, host field trips and lighting
              talks at your offices!
            </li>
            <li>Meet our upcoming graduates <em>before</em> graduation.</li>
            <li>Access our reverse job board.</li>
          </ul>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default AcademyNetwork

export const pageQuery = graphql`
  query {
    allContentfulHiringPartner(sort: { fields: alumniHired, order: DESC }) {
      edges {
        node {
          id
          name
          url
          logo {
            fluid(maxWidth: 480, maxHeight: 320, resizingBehavior: PAD) {
              ...GatsbyContentfulFluid_withWebp
            }
            description
          }
        }
      }
    }
  }
`
