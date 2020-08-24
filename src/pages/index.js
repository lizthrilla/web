import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import SplashHero from '../components/SplashHero'
import Link from '../components/UniversalLink'
import AcademyCommunityDuo from '../components/AcademyCommunityDuo'
import MissionStatement from '../components/MissionStatement'
import junior from '../images/junior.svg'
import swag from '../images/swag.svg'

const IndexPage = () => (
  <Layout>
    <SplashHero />
    <AcademyCommunityDuo />
    <MissionStatement />
    <section className="section getting-involved">
      <div className="container">
        <div className="columns">
          <div className="column content engage">
            <h5 className="title is-4 has-text-centered">Engage</h5>
            <p>Checkout an event, or chat with us on our public Slack.</p>
            <p className=" has-text-centered">
              <Link to="/community" className="button is-info">
                Join Us
              </Link>
            </p>
          </div>
          <div className="column content volunteer">
            <h4 className="title is-4 has-text-centered">Volunteer</h4>
            <p>
              Help us by mentoring the next generation of software engineers.
            </p>
            <p className="has-text-centered">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSd842YjtBlChtuKo1Kp032ZshQxL368jZxJIxJ6Ireqo2bu_A/viewform"
                className="button is-info"
              >
                Sign Up
              </Link>
            </p>
          </div>
          <div className="column content hire">
            <h4 className="title is-4 has-text-centered">Hire</h4>
            <p>
              See which of our highly sought-after graduates might be a fit for
              your company.
            </p>
            <p className=" has-text-centered">
              <Link to="/demo-day" className="button is-info">
                Meet Alumni
              </Link>
            </p>
          </div>
          <div className="column content donate">
            <h4 className="title is-4 has-text-centered">Donate</h4>
            <p>Every dollar helps us fulfill our mission.</p>
            <p className=" has-text-centered">
              <Link to="http://store.suncoast.io" className="button is-info">
                Give Today
              </Link>
            </p>
          </div>
          <div className="column content learn">
            <h4 className="title is-4 has-text-centered">Learn</h4>
            <p>
              Join our next cohort of students and learn to be a web developer.
            </p>
            <p className=" has-text-centered">
              <Link to="/academy" className="button is-info">
                Apply Now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className="section kids-swag">
      <div className="container">
        <hr />
        <div className="columns">
          <div className="column">
            <div className="columns is-vcentered is-mobile">
              <div className="column is-narrow">
                <figure className="image is-96x96">
                  <img src={junior} alt="SDG Jr." />
                </figure>
              </div>
              <div className="column content">
                <p>Do you want to know about our free kids classes?</p>
                <p>
                  <Link to="/jr" className="button is-primary">
                    Yes, I do!
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </section>
  </Layout>
)

export default IndexPage
