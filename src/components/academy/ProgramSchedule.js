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
            <th>Back-end</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cohort 16</td>
            <td>
              <em>In Progress</em>
            </td>
            <td>October 28, 2019</td>
            <td>January 31, 2020</td>
            <td>.NET</td>
          </tr>
          <tr className="upcoming">
            <td>Cohort 17</td>
            <td>
              <Link to="/academy/apply">Now Enrolling</Link>
            </td>
            <td>February 10, 2020</td>
            <td>April 30, 2020</td>
            <td>.NET</td>
          </tr>
          <tr>
            <td>Cohort 18</td>
            <td>"</td>
            <td>May 10, 2020</td>
            <td>July 31, 2020</td>
            <td>.NET</td>
          </tr>
          <tr>
            <td>Cohort 19</td>
            <td>"</td>
            <td>August 10, 2020</td>
            <td>November 2020</td>
            <td>TBD</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
)

export default ProgramSchedule
