import React from 'react'
import Link from 'gatsby-link'
import Container from '../Container'
import NavItem from '../NavItem'
import announcement from '../../images/announcement.svg'

const AcademyNavigation = () => (
  <>
    <section className="hero is-light is-small sub-navigation">
      <div className="hero-body">
        <Container>
          <nav className="columns is-hidden-mobile">
            <NavItem
              to="/academy"
              icon="fas fa-code fa-lg"
              paths={[
                '/academy',
                '/academy/catalog',
                '/academy/schedule/',
                '/academy/career'
              ]}
            >
              Web Development
            </NavItem>
            <NavItem
              to="/academy/tuition"
              icon="fas fa-clipboard-list-check fa-lg"
              paths={[
                '/academy/tuition',
                '/academy/tuition/financing',
                '/academy/admissions',
                '/academy/admissions/requirements'
              ]}
            >
              Tuition &amp; Admissions
            </NavItem>
            <NavItem to="/academy/part-time" icon="fas fa-sun-haze fa-lg">
              Part-Time
            </NavItem>
            <NavItem
              to="/academy/tuition/scholarships"
              icon="fas fa-seedling fa-lg"
            >
              Scholarships &amp; Diversity
            </NavItem>
            <NavItem to="/academy/success" icon="fas fa-heart fa-lg">
              Success Stories
            </NavItem>
            <NavItem to="/academy/network" icon="fas fa-handshake fa-lg">
              Hiring Network
            </NavItem>
            <NavItem to="/academy/faq" icon="fas fa-puzzle-piece fa-lg">
              FAQ
            </NavItem>
            <NavItem to="/demo-day" icon="fas fa-graduation-cap fa-lg">
              Graduates
            </NavItem>
          </nav>
        </Container>
      </div>
    </section>
    <figure className="announcement">
      <Link to="/academy/apply">
        <img
          src={announcement}
          alt="Now enrolling for our April 29th cohort!"
        />
      </Link>
    </figure>
  </>
)

export default AcademyNavigation
