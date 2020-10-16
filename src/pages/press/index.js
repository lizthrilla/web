import React from 'react'
import Layout from '../../components/Layout'
import Section from '../../components/Section'
import Container from '../../components/Container'
import Link from 'gatsby-link'

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
          <article className="media">
            <div className="media-content">
              <strong>
                <Link to="/press/night-shift">
                  St. Pete’s Coding Academy to Offer Night Classes
                </Link>
              </strong>
            </div>
            <div className="media-right">October 16, 2020</div>
          </article>
          <div className="media-content">
            <strong>
              <Link to="/press/2020-summer-conference">
                Suncoast Developers Conference - Summer 2020
              </Link>
            </strong>
          </div>
          <div className="media-right">July 20, 2020</div>
        </article>
        <article className="media">
          <div className="media-content">
            <strong>
              <Link to="/press/2020-summer-hackathon">
                SDG Summer Solstice Hackathon: Celebrating the Resilient Spirit
                of Developers and Tampa Bay
              </Link>
            </strong>
          </div>
          <div className="media-right">June 4, 2020</div>
        </article>
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
