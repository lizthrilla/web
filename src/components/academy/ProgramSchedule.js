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
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cohort XV</td>
            <td>
              <em>In Progress</em>
            </td>
            <td>July 29, 2019</td>
            <td>October 18, 2019</td>
          </tr>
          <tr className="upcoming">
            <td>Cohort 16</td>
            <td>
              <Link to="/academy/apply">Now Enrolling</Link>
            </td>
            <td>October 28, 2019</td>
            <td>January 31, 2020</td>
          </tr>
          <tr>
            <td>Cohort 17</td>
            <td>"</td>
            <td>February 2020</td>
            <td>Spring 2020</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
)

export default ProgramSchedule
