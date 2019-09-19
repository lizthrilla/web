import React from 'react'
import Layout from '../components/Layout'
import Container from '../components/Container'
import PageTitle from '../components/PageTitle'
import Section from '../components/Section'
// import temp from '../images/temp.svg'

const ThanksPage = () => (
  <Layout>
    <Section>
      <Container>
        <div className="has-text-centered">
          <PageTitle>Thank You!</PageTitle>
          {/* <figure>
            <img src={temp} alt="Placeholder Illustration" width="200" />
          </figure> */}

          <h3 className="subtitle">We will be in touch soon&hellip;</h3>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default ThanksPage
