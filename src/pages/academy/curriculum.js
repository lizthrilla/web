import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import ProgramNavigation from '../../components/academy/ProgramNavigation'
import OurCurriculum from '../../components/academy/OurCurriculum'

const AcademyIndex = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle seo="Our Curriculum">Web Development Program</PageTitle>
        <ProgramNavigation />
        <OurCurriculum />
      </Container>
    </Section>
  </Layout>
)

export default AcademyIndex
