import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import ProgramNavigation from '../../components/academy/ProgramNavigation'
import NightShiftProgram from '../../components/academy/NightShiftProgram'

const AcademyNightShift = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle seo="Night Shift Program">Web Development Program</PageTitle>
        <ProgramNavigation />
        <NightShiftProgram />
      </Container>
    </Section>
  </Layout>
)

export default AcademyNightShift
