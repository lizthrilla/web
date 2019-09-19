import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import Container from '../../components/Container'
import PageTitle from '../../components/PageTitle'
import AcademyNavigation from '../../components/academy/AcademyNavigation'
import ProgramNavigation from '../../components/academy/ProgramNavigation'
import ProgramCatalog from '../../components/academy/ProgramCatalog'

const AcademyCatalog = () => (
  <Layout>
    <AcademyNavigation />
    <Section>
      <Container>
        <PageTitle seo="Program Catalog">Web Development Program</PageTitle>
        <ProgramNavigation />
        <ProgramCatalog />
      </Container>
    </Section>
  </Layout>
)

export default AcademyCatalog
