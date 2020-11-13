import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Link from 'gatsby-link'
import cx from 'classnames'

const ProgramSchedule = () => (
  <StaticQuery
    query={graphql`
      query {
        allCohort(sort: { order: ASC, fields: beginsOn }) {
          nodes {
            id
            name
            isEnrolling
            beginsOn(formatString: "MMMM D, YYYY")
            endsOn(formatString: "MMMM Do, YYYY")
            altBeginsOn: beginsOn(formatString: "MMMM YYYY")
            altEndsOn: endsOn(formatString: "MMMM YYYY")
            daysFromNow: beginsOn(difference: "days")
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
                      cohort.isEnrolling && parseInt(cohort.daysFromNow) > -90,
                  })}
                >
                  <td>Cohort {cohort.name}</td>
                  <td>
                    {cohort.isEnrolling && (
                      <Link to="/academy/apply">Now Enrolling</Link>
                    )}
                  </td>
                  <td>
                    {parseInt(cohort.daysFromNow) < -180
                      ? cohort.altBeginsOn
                      : cohort.beginsOn}
                  </td>
                  <td>
                    {parseInt(cohort.daysFromNow) < -180
                      ? cohort.altEndsOn
                      : cohort.endsOn}
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
