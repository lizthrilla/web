import React from 'react'
import Layout from './Layout'
import Link from 'gatsby-link'
import Container from './Container'
import Section from './Section'
import PageTitle from './PageTitle'

const PressLayout = ({ children, title }) => (
  <Layout>
    <Section>
      <Container>
        <PageTitle hidden>{title}</PageTitle>
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/press">Press Releases</Link>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                {title}
              </a>
            </li>
          </ul>
        </nav>
        <div className="content">{children}</div>
        <footer className="press content">
          <p>
            <strong>Suncoast Developers Guild, Inc.</strong> is a Florida
            not-for-profit corporation and registered 501 (c)(3) located in St.
            Petersburg, Florida. As Florida’s leading not-for-profit immersive
            code school, SDG offers full-time and part-time classes for those
            looking to receive education in software development. It is both an
            academy and a community collective of software engineers,
            programmers, and designers supporting Tampa’s various tech
            organizations. For more information, visit{' '}
            <a href="https://suncoast.io">https://suncoast.io</a>
          </p>
          <p className="has-text-weight-bold has-text-centered">
            To arrange media coverage contact us at hello@suncoast.io.
          </p>
        </footer>
      </Container>
    </Section>
  </Layout>
)

export default PressLayout
