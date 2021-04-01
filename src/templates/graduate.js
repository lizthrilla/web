import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'
import Image from 'gatsby-image'
import moment from 'moment'
import Layout from '../components/Layout'
import AcademyNavigation from '../components/academy/AcademyNavigation'
import GraduateSocialLinks from '../components/academy/GraduateSocialLinks'
import Container from '../components/Container'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'
import Icon from '../components/Icon'
import YouTubeVideo from '../components/YouTubeVideo'

const Graduate = ({ data }) => {
  const demoDay = data.contentfulDemoDay
  const grad = data.contentfulDemoDayGraduate
  const student = grad.student
  return (
    <Layout>
      <AcademyNavigation />
      <Section>
        <Container>
          <header className="cohort-header">
            <PageTitle>{`${demoDay.title} Graduates`}</PageTitle>
            <h4 className="subtitle is-4">
              {moment(demoDay.date).format('MMMM, Do Y')}
            </h4>
            <figure className="image">
              <img src={demoDay.cohortLogo.file.url} width="128" />
            </figure>
          </header>
          <p>
            <Link to={`grads/${demoDay.slug}`}>
              <Icon i="fas fa-arrow-circle-left" />
              All Graduates
            </Link>
          </p>
          <h3 className="title is-3">{data.contentfulDemoDayGraduate.name}</h3>
          <div className="columns">
            <div className="column is-one-third">
              {student.image && (
                <Image
                  className="image"
                  Tag="p"
                  fluid={student.image.fluid}
                  alt={student.image.description}
                />
              )}
            </div>
            <div className="column">
              <h4
                className="subtitle is-4"
                dangerouslySetInnerHTML={{
                  __html: grad.tagLine,
                }}
              />
              <div
                className="content"
                dangerouslySetInnerHTML={{
                  __html: grad.description
                    ? grad.description.childMarkdownRemark.html
                    : '',
                }}
              />
            </div>
          </div>
          <div className="columns">
            {grad.capstoneVideoId && (
              <div className="column">
                <YouTubeVideo id={grad.capstoneVideoId} />
                <h5 className="is-5 heading">Capstone Project</h5>
              </div>
            )}
            {grad.biographyVideoId && (
              <div className="column">
                <YouTubeVideo id={grad.biographyVideoId} />
                <h5 className="is-5 heading">Biography</h5>
              </div>
            )}
          </div>
          <GraduateSocialLinks hireable={grad.hireable} student={student} />
        </Container>
      </Section>
    </Layout>
  )
}

export default Graduate

export const pageQuery = graphql`
  query($graduateId: String!, $demoDayId: String!) {
    contentfulDemoDay(contentful_id: { eq: $demoDayId }) {
      slug
      title
      date
      cohortLogo {
        file {
          url
        }
      }
    }
    contentfulDemoDayGraduate(contentful_id: { eq: $graduateId }) {
      name
      tagLine
      hireable
      capstoneVideoId
      biographyVideoId
      description {
        childMarkdownRemark {
          html
        }
      }
      student {
        name
        twitter
        github
        linkedIn
        blogUrl
        portfolioUrl
        email
        image {
          fluid(maxWidth: 720, maxHeight: 720) {
            ...GatsbyContentfulFluid_withWebp
          }
          description
        }
      }
    }
  }
`
