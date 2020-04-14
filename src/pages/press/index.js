import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import Container from '../../components/Container'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { withPrefix } from 'gatsby'

const PressPage = () => (
  <Layout>
    <section className="hero">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Press Releases</h1>
          <h2 className="subtitle">
            Annoucements issued by Suncoast Developers Guild
          </h2>
        </div>
      </div>
    </section>
    <Section>
      <Container>
        <article className="media">
          <div className="media-content">
            <strong>
              <Link to="/press/hero-award">
                SDG Announces &ldquo;Hero Award&rdquo; Scholarship
              </Link>
            </strong>
          </div>
          <div className="media-right">April 14, 2020</div>
        </article>
        <article className="media">
          <div className="media-content">
            <strong>
              <Link to="/press/part-time">
                St. Pete’s Coding School Offers Part-Time Classes
              </Link>
            </strong>
          </div>
          <div className="media-right">March 1, 2019</div>
        </article>
      </Container>
    </Section>
  </Layout>
)

export default PressPage
