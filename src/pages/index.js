import React from 'react'
import Layout from '../components/Layout'
import SplashHero from '../components/SplashHero'
import AcademyCommunityDuo from '../components/AcademyCommunityDuo'
import MissionStatement from '../components/MissionStatement'

const IndexPage = () => (
  <Layout>
    <SplashHero />
    <AcademyCommunityDuo />
    <MissionStatement />
  </Layout>
)

export default IndexPage
