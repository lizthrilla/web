import React from 'react'
import Layout from '../../components/Layout'
import Container from '../../components/Container'
import Section from '../../components/Section'
import PageTitle from '../../components/PageTitle'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import ProgramNavigation from '../../components/academy/ProgramNavigation'
import ImmersiveProgram from '../../components/academy/ImmersiveProgram'

const AcademySchedule = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle seo="Immersive Program">Web Development Program</PageTitle>
        <ProgramNavigation />
        <ImmersiveProgram />
      </Container>
    </Section>
  </Layout>
)

export default AcademySchedule
