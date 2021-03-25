import React, { Component } from 'react'
import { globalHistory as history } from '@reach/router/lib/history'
import Link from './NavLink'
import cx from 'classnames'
import button from '../images/button.svg'

class MainNavigation extends Component {
  state = { active: false }

  componentDidMount() {
    this.unlisten = history.listen(() => {
      this.setState({ active: false })
    })
  }

  componentWillUnmount() {
    this.unlisten()
  }

  _toggle = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { active } = this.state
    return (
      <nav
        className={cx(
          'main-navigation',
          'navbar',
          'is-fixed-top',
          'has-shadow'
        )}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              <img src={button} alt="SDG Button Icon" height="28" width="28" />
            </Link>
            <h1 className="navbar-item">
              <Link to="/" className="has-text-weight-bold is-uppercase">
                Suncoast Developers Guild
              </Link>
            </h1>
            <span
              className={cx('navbar-burger burger', {
                'is-active': active,
              })}
              onClick={this._toggle}
            >
              <span />
              <span />
              <span />
            </span>
          </div>
          <div className={cx('navbar-menu', { 'is-active': active })}>
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/academy" className="navbar-link">
                  Academy
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/academy" className="navbar-item">
                    Web Development Program
                  </Link>
                  <Link to="/academy/admissions" className="navbar-item">
                    Admissions
                  </Link>
                  <Link to="/academy/tuition" className="navbar-item">
                    Tuition &amp; Financing
                  </Link>
                  <Link to="/academy/part-time" className="navbar-item">
                    Weekend Courses
                  </Link>
                  <Link
                    to="/academy/tuition/scholarships"
                    className="navbar-item"
                  >
                    Diversity &amp; Scholarships
                  </Link>
                  <Link to="/academy/success" className="navbar-item">
                    Success Stories
                  </Link>
                  <Link to="/academy/network" className="navbar-item">
                    Hiring Network
                  </Link>
                  <Link to="/academy/faq" className="navbar-item">
                    FAQ
                  </Link>
                  <Link to="/grads" className="navbar-item">
                    Graduates
                  </Link>
                  <hr className="navbar-divider" />
                  <Link to="/academy/apply" className="navbar-item">
                    Apply Now
                  </Link>
                </div>
              </div>
              <div className="navbar-item has-dropdown is-hoverable">
                <Link to="/community" className="navbar-link">
                  Community
                </Link>
                <div className="navbar-dropdown">
                  <Link to="/conference" className="navbar-item">
                    Conference
                  </Link>
                  <Link to="/community" className="navbar-item">
                    Member Organizations
                  </Link>
                  <Link to="/community/joint-training" className="navbar-item">
                    Corporate Training
                  </Link>
                  <Link to="/jr" className="navbar-item">
                    Kid's Classes
                  </Link>
                  <Link to="/community/supporters" className="navbar-item">
                    Supporters
                  </Link>
                  <Link to="/community/sponsor" className="navbar-item">
                    Sponsorship
                  </Link>
                </div>
              </div>

              <Link to="/team" className="navbar-item">
                Our Team
              </Link>
              <Link to="/blog" className="navbar-item">
                Blog
              </Link>
              <Link to="/contact" className="navbar-item">
                Contact
              </Link>
            </div>
            <div className="navbar-end">
              <span className="navbar-item">
                <Link to="/academy/apply" className="button is-primary">
                  <span>Apply Now</span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default MainNavigation
