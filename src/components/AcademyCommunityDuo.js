import React from 'react'
import Link from 'gatsby-link'

const AcademyCommunityDuo = () => (
  <section className="academy-community-duo section">
    <div className="container">
      <div className="columns is-variable is-8">
        <div className="academy column has-text-centered">
          <h2 className="title is-2 is-spaced">
            <Link to="/academy">Academy</Link>
          </h2>
          <p className="subtitle">Learn to code with us.</p>
          <div className="content">
            {/* <figure>
              <Link to="/academy">
                <img src={temp} alt="Placeholder Illustration" width="320" />
              </Link>
            </figure> */}
            <p className="has-text-left">
              The <strong>Academy at Suncoast Developers Guild</strong> is a
              code school that serves people, not profit. We are changing lives
              and teaching people to be the best software developers they can
              be.
            </p>
            <p>
              <Link to="/academy/apply" className="button is-primary">
                Apply Now
              </Link>
            </p>
          </div>
        </div>
        <div className="community column has-text-centered">
          <h2 className="title is-2 is-spaced">
            <Link to="/community">Community</Link>
          </h2>
          <p className="subtitle">
            We are a collective of software engineers, programmers, and
            designers in Tampa Bay.
          </p>
          <div className="content">
            {/* <figure>
              <Link to="/community">
                <img src={temp} alt="Placeholder Illustration" width="320" />
              </Link>
            </figure> */}
            <p className="has-text-left">
              With thousands of members across dozens of local groups, our
              members touch all aspects of technology development in Tampa Bay.
            </p>
            <p>
              <a
                href="https://join.slack.com/t/suncoast-devs/shared_invite/enQtNzY1NDAxMjk4NTYzLWUwZGQ4NjhjMmJiMmI5YTc4OGEzYjViMTgzNWQ1MGViZWI5MzI4NWRlNTAyMzljYjU1ZTNiYjkzZWY2YmI3NTE"
                className="button is-primary"
              >
                Join us on Slack
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AcademyCommunityDuo
