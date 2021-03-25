import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import AcademyNavigation from '../components/academy/AcademyNavigation'
import Cohort from '../components/academy/Cohort'

const DemoDayPage = ({ data }) => {
  const cohort = data.allContentfulDemoDay.edges[0].node
  return (
    <Layout>
      <AcademyNavigation />
      <Cohort {...cohort} />
    </Layout>
  )
}

export default DemoDayPage

export const pageQuery = graphql`
  query {
    allContentfulDemoDay(limit: 1, sort: { fields: date, order: DESC }) {
      edges {
        node {
          ...DemoDayCohort
        }
      }
    }
  }
`
