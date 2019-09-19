import React from 'react'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import Layout from '../components/Layout'
import Container from '../components/Container'
import Section from '../components/Section'
import PageTitle from '../components/PageTitle'

const ContactPage = () => (
  <Layout>
    <Section>
      <Container>
        <PageTitle>Contact Us</PageTitle>
        <h3 className="subtitle">
          Question? Comments? Just want to chat and say "Hello"?
        </h3>
        <div className="columns">
          <div className="column is-narrow">
            <div className="content box">
              <p>Are you interested in:</p>
              <ul>
                <li>Learning web development?</li>
                <li>Demo Day &amp; hiring events?</li>
                <li>Community events?</li>
                <li>Donating or becoming a sponsor?</li>
                <li>Volunteering?</li>
                <li>Hiring a developer?</li>
              </ul>
              <p>
                <em>Let us know!</em>
              </p>
            </div>
          </div>
          <div className="column">
            <div className="content">
              <p>
                If we're online, you can{' '}
                <a
                  onClick={() =>
                    window.hasOwnProperty('olark') &&
                    window.olark('api.box.expand')
                  }
                >
                  chat with us
                </a>{' '}
                right now.
              </p>
              <h4>Email Us:</h4>
              <p>
                <a href="mai&#108;to&#58;&#104;e%6C%&#54;&#67;o&#64;su&#110;c%6Fas&#37;&#55;&#52;&#46;&#37;6&#57;&#111;">
                  hello&#64;sun&#99;oa&#115;t&#46;&#105;o
                </a>
              </p>
              <h4>Visit Us:</h4>
              <p className="h-adr">
                <OutboundLink href="https://goo.gl/maps/2zxLR9jEs5w">
                  <span className="p-street-address">2220 Central Ave</span>
                  <span className="p-locality">St. Petersburg</span>,{' '}
                  <span className="p-region">FL</span>,{' '}
                  <span className="p-postal-code">33712</span>
                </OutboundLink>
              </p>
              <h4>Call Us:</h4>
              <p className="tel">
                <OutboundLink href="tel:1-727-201-2012">
                  +1 (727) 201-2012
                </OutboundLink>
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </Layout>
)

export default ContactPage
