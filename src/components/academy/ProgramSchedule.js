import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import cx from 'classnames'

const ProgramSchedule = () => (
  <StaticQuery
    query={graphql`
      query {
        allCohort(sort: { order: ASC, fields: begins_on }) {
          nodes {
            id
            name
            is_enrolling
            begins_on(formatString: "MMMM D, YYYY")
            ends_on(formatString: "MMMM Do, YYYY")
            alt_begins_on: begins_on(formatString: "MMMM YYYY")
            alt_ends_on: ends_on(formatString: "MMMM YYYY")
            days_from_now: begins_on(difference: "days")
            format
            delivery
            note
          }
        }
      }
    `}
    render={(data) => (
      <>
        <h3 className="title is-3">Program Schedule</h3>
        <div className="table-container">
          <table className="table is-fullwidth program-schedule">
            <thead>
              <tr>
                <th>Cohort</th>
                <th>Status</th>
                <th>Classes Start</th>
                <th>Expected Graduation</th>
                <th>Format</th>
                <th>Daily Schedule</th>
              </tr>
            </thead>
            <tbody>
              {data.allCohort.nodes.map((cohort) => (
                <tr
                  key={cohort.id}
                  className={cx({
                    upcoming:
                      cohort.is_enrolling &&
                      parseInt(cohort.days_from_now) > -90,
                  })}
                >
                  <td>Cohort {cohort.name}</td>
                  <td>
                    {cohort.is_enrolling && (
                      <Link to="/academy/apply">Now Enrolling</Link>
                    )}
                  </td>
                  <td>
                    {parseInt(cohort.days_from_now) < -180
                      ? cohort.alt_begins_on
                      : cohort.begins_on}
                  </td>
                  <td>
                    {parseInt(cohort.days_from_now) < -180
                      ? cohort.alt_ends_on
                      : cohort.ends_on}
                  </td>
                  <td>
                    {cohort.format} / {cohort.delivery}
                  </td>
                  <td>
                    {cohort.format === 'Night Shift' ? (
                      <>Tue, Thu &mdash; 6:30&ndash;9 p.m.</>
                    ) : (
                      <>
                        Mon&ndash;Thu &mdash; 9 a.m.&ndash;5 p.m., Fri &mdash; 9
                        a.m.&ndash;3 p.m.
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
    )}
  />
)

export default ProgramSchedule
