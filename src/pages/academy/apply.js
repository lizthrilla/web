import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import Section from '../../components/Section'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import ProgramApplication from '../../components/ProgramApplication'

const AcademyIndex = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle>Web Development Program Inquiry</PageTitle>
        <ProgramApplication />
      </Container>
    </Section>
  </Layout>
)

export default AcademyIndex
