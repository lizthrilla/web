import React from 'react'
import Link from 'gatsby-link'

const ProgramSchedule = () => (
  <>
    <h3 className="title is-3">Program Schedule</h3>
    <div className="table-container">
      <table className="table is-fullwidth program-schedule">
        <thead>
          <tr>
            <th>Cohort</th>
            <th>Status</th>
            <th>Classes Start</th>
            <th>Graduation / Demo Day</th>
            <th>Back-end Focus</th>
          </tr>
        </thead>
        <tbody>
          <tr className="upcoming">
            <td>Cohort 19</td>
            <td>
              <Link to="/academy/apply">Now Enrolling</Link>
            </td>
            <td>August 10, 2020</td>
            <td>November 13, 2020</td>
            <td>.NET</td>
          </tr>
          <tr>
            <td>Cohort 20</td>
            <td>"</td>
            <td>January 2021</td>
            <td>April 2021</td>
            <td>"</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
)

export default ProgramSchedule
