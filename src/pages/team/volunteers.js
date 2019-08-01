import React from 'react'
import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'
import TeamNavigation from '../../components/TeamNavigation'
import TeamMember from '../../components/TeamMember'
import PersonModal from '../../components/PersonModal'

const TeamVolunteers = ({ data }) => (
  <Layout>
    <Section>
      <Container>
        <PageTitle seo="Volunteers">Our Team</PageTitle>
        <TeamNavigation />
        <h3 className="title is-three">Our Volunteers</h3>
        <Router>
          <Members
            path="team/volunteers"
            members={data.allContentfulTeamMember.edges}
          >
            <Member path=":slug" members={data.allContentfulTeamMember.edges} />
          </Members>
        </Router>
      </Container>
    </Section>
  </Layout>
)

export default TeamVolunteers

const Members = ({ children, members }) => (
  <div className="columns is-multiline">
    {members.map(({ node: member }) => (
      <TeamMember
        key={member.slug}
        link={`/team/volunteers/${member.slug}`}
        {...member.person}
        title={member.altTitle}
      />
    ))}
    {children}
  </div>
)

const Member = ({ slug, members }) => {
  const member = members.find(s => s.node.slug === slug).node
  return (
    <PersonModal
      person={member.person}
      content={member.person.biography}
      returnTo="/team/volunteers"
    />
  )
}

export const pageQuery = graphql`
  query {
    allContentfulTeamMember(
      sort: { fields: position }
      filter: { role: { eq: "Volunteer" } }
    ) {
      edges {
        node {
          slug
          altTitle
          person {
            name
            title
            company
            biography {
              childMarkdownRemark {
                html
              }
            }
            image {
              fluid(maxHeight: 600, resizingBehavior: FILL) {
                ...GatsbyContentfulFluid_withWebp
              }
              modal: fluid(maxWidth: 800, maxHeight: 600) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            github
            twitter
            linkedIn
            blogUrl
          }
        }
      }
    }
  }
`
