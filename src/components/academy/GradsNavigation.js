import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

export default function GradsNavigation() {
  return (
    <StaticQuery
      query={graphql`
        query GradsNavigationQuery {
          allContentfulDemoDay(sort: { fields: date, order: DESC }) {
            nodes {
              title
              slug
            }
          }
        }
      `}
      render={(data) => (
        <>
          <div className="dropdown is-hoverable">
            <div className="dropdown-trigger">
              <button
                className="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu"
              >
                <span>All Cohorts</span>
                <span className="icon is-small">
                  <i className="fas fa-angle-down" aria-hidden="true"></i>
                </span>
              </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
              <div className="dropdown-content">
                {data.allContentfulDemoDay.nodes.map(({ slug, title }) => (
                  <a
                    href={`/grads/${slug}`}
                    className="dropdown-item"
                    key={slug}
                  >
                    {title}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    />
  )
}
