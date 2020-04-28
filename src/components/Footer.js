import React from 'react'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import bouy from '../images/bouy.svg'
import Icon from './Icon'
import NavLink from './NavLink'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="columns">
        <div className="column is-three-fifths">
          <figure className="image is-128x128">
            <img src={bouy} alt="SDG Bouy Logo" />
          </figure>
          <div className="content">
            <p>
              <strong>Suncoast Developers Guild, Inc.</strong> is a Florida
              not-for-profit corporation and registered 501(c)(3) organization.
            </p>
            <p>
              Questions? <Link to="/contact">Contact us.</Link>
            </p>
          </div>
          <nav className="level is-mobile">
            <div className="level-left">
              <p className="level-item">
                <OutboundLink href="https://www.facebook.com/SuncoastDevelopersGuild/">
                  <Icon i="fab fa-facebook fa-lg" />
                </OutboundLink>
              </p>
              <p className="level-item">
                <OutboundLink href="https://twitter.com/suncoastio">
                  <Icon i="fab fa-twitter fa-lg" />
                </OutboundLink>
              </p>
              <p className="level-item">
                <OutboundLink href="https://www.meetup.com/suncoast-developers-guild/">
                  <Icon i="fab fa-meetup fa-lg" />
                </OutboundLink>
              </p>
              <p className="level-item">
                <OutboundLink href="https://www.instagram.com/suncoastdevelopersguild">
                  <Icon i="fab fa-instagram fa-lg" />
                </OutboundLink>
              </p>
              <p className="level-item">
                <OutboundLink href="https://www.linkedin.com/school/suncoast-developers-guild/">
                  <Icon i="fab fa-linkedin fa-lg" />
                </OutboundLink>
              </p>
              <p className="level-item">
                <OutboundLink href="https://suncoast-devs.slack.com">
                  <Icon i="fab fa-slack fa-lg" />
                </OutboundLink>
              </p>
            </div>
          </nav>
        </div>
        <div className="column">
          <aside className="menu">
            <p className="menu-label">Location</p>
            <p className="h-adr">
              <OutboundLink href="https://goo.gl/maps/2zxLR9jEs5w">
                <span className="p-street-address">2220 Central Ave</span>
                <span className="p-locality">St. Petersburg</span>,{' '}
                <span className="p-region">FL</span>,{' '}
                <span className="p-postal-code">33712</span>
              </OutboundLink>
            </p>
            <p className="tel">
              <OutboundLink href="tel:1-727-201-2012">
                +1 (727) 201-2012
              </OutboundLink>
            </p>
            <p className="menu-label">General</p>
            <ul className="menu-list">
              <li>
                <NavLink to="/academy">Academy</NavLink>
              </li>
              <li>
                <NavLink to="/community">Community</NavLink>
              </li>
              <li>
                <NavLink to="/team">Our Team</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/jr">SDG Jr.</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </aside>
        </div>
        <div className="column">
          <aside className="menu">
            <p className="menu-label">More</p>
            <ul className="menu-list">
              <li>
                <NavLink to="/conduct">Code of Conduct</NavLink>
              </li>
              <li>
                <NavLink to="/privacy">Privacy Policy</NavLink>
              </li>
              <li>
                <NavLink to="/terms">Terms of Service</NavLink>
              </li>
              <li>
                <NavLink to="/brand">Brand</NavLink>
              </li>
              <li>
                <NavLink to="/press">Press</NavLink>
              </li>
              <li>
                <NavLink to="/handbook">Handbook</NavLink>
              </li>
            </ul>
            <div className="content">
              <p>
                This site is powered by{' '}
                <OutboundLink href="https://www.netlify.com">
                  Netlify
                </OutboundLink>
              </p>
            </div>
          </aside>
        </div>
      </div>
      <div className="content has-text-centered">
        <p className="is-uppercase has-text-weight-bold">
          &copy; 2019 Suncoast Developers Guild, Inc.
        </p>
        <p>
          Made with
          <Icon s="has-text-danger" i="fas fa-heart" />
          in St. Petersburg, Florida.
        </p>
      </div>
    </div>
  </footer>
)

export default Footer
