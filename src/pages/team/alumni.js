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

const TeamAlumni = ({ data }) => (
  <Layout>
    <Section>
      <Container>
        <PageTitle seo="Alumni Committee">Our Team</PageTitle>
        <TeamNavigation />
        <h3 className="title is-three">Our Alumni Committee</h3>
        <Router>
          <Members
            path="team/alumni"
            members={data.allContentfulTeamMember.edges}
          >
            <Member path=":slug" members={data.allContentfulTeamMember.edges} />
          </Members>
        </Router>
      </Container>
    </Section>
  </Layout>
)

export default TeamAlumni

const Members = ({ children, members }) => (
  <div className="columns is-multiline">
    {members.map(({ node: member }) => (
      <TeamMember
        key={member.slug}
        link={`/team/alumni/${member.slug}`}
        {...member.person}
        title={`${member.person.title} @ ${member.person.company}`}
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
      returnTo="/team/alumni"
    />
  )
}

export const pageQuery = graphql`
  query {
    allContentfulTeamMember(
      sort: { fields: position }
      filter: { role: { eq: "Alumni Committee" } }
    ) {
      edges {
        node {
          slug
          person {
            name
            title
            company
            companyUrl
            biography {
              childMarkdownRemark {
                html
              }
            }
            image {
              fluid(maxHeight: 800, maxWidth: 800, resizingBehavior: FILL) {
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
