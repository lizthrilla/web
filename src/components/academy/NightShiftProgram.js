import React from 'react'
import Link from 'gatsby-link'

const NightShiftProgram = () => (
  <>
    <div className="content">
      <h3 className="title is-3">Overview</h3>
      <p>
        Night Shift is a 36-week flexible part-time evening program that trains
        students in programming and web development. This alternative schedule
        increases accessibility for students who cannot commit 12 weeks to the
        full-time Immersive program. By extending the program with part-time
        after-hours classes, students can begin their journey in coding without
        having to leave their current job first.
      </p>
      <h3 className="title is-3">Weekly Schedule</h3>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <td />
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>01:00&nbsp;PM</th>
            <td rowSpan="2">Lab</td>
            <td>Lab</td>
            <td rowSpan="2">Lab</td>
            <td>Lab</td>
          </tr>
          <tr>
            <th>06:30&nbsp;PM</th>
            <td>
              <strong>Lecture</strong>
            </td>
            <td>
              <strong>Lecture</strong>
            </td>
          </tr>
          <tr>
            <th>09:00&nbsp;PM</th>
            <td colSpan="5">End of Night</td>
          </tr>
        </tbody>
      </table>
      <p>
        Classes are held twice per week, from 6:30 p.m. until 9 p.m.. Students
        also have access to flexible lab hours (including weekends) to work on
        assignments with support from faculty and staff. Students are not
        required to attend all lab hours, and not all available hours are shown
        on the above schedule.
      </p>

      <p class="has-text-centered">
        <Link to="/academy/apply" className="button is-primary">
          <span>Apply Now</span>
        </Link>
      </p>
    </div>
  </>
)

export default NightShiftProgram
