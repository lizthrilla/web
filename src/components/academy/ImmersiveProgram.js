import React from 'react'

const ImmersiveProgram = () => (
  <>
    <div className="content">
      <h3 className="title is-3">Daily Schedule</h3>
      <table className="table is-bordered is-fullwidth">
        <thead>
          <tr>
            <td />
            <th>Monday–Thursday</th>
            <th>Friday</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>09:00&nbsp;AM</th>
            <td>Stand-ups / Warmup Lab</td>
            <td>Career Support Lab</td>
          </tr>
          <tr>
            <th>10:00&nbsp;AM</th>
            <td rowSpan="2">Classroom</td>
            <td>Career Support Lecture</td>
          </tr>
          <tr>
            <th>11:00&nbsp;AM</th>
            <td>Weekly Review (or extended Career Support)</td>
          </tr>
          <tr>
            <th>12:00&nbsp;PM</th>
            <td colSpan="2">Lunch</td>
          </tr>
          <tr>
            <th>01:00&nbsp;PM</th>
            <td rowSpan="2">Lab</td>
            <td>Lab</td>
          </tr>
          <tr>
            <th>02:00&nbsp;PM</th>
            <td>Huddles</td>
          </tr>
          <tr>
            <th>03:00&nbsp;PM</th>
            <td>Classroom: &ldquo;With me at Three&rdquo;</td>
            <td rowSpan="3">End of Day / Optional Social Time</td>
          </tr>
          <tr>
            <th>04:00&nbsp;PM</th>
            <td>Lab</td>
          </tr>
          <tr>
            <th>05:00&nbsp;PM</th>
            <td>End of Day</td>
          </tr>
        </tbody>
      </table>
      <p>
        The day begins at 9 a.m. This time is used by instructors for reviewing
        the previous night’s assignments and planning the day’s lecture and
        activities accordingly. Students use this first hour to do warmup
        exercises and review daily content. At least one Instructor will be
        available for answering questions and guiding students through the
        optional warmups.
      </p>

      <p>
        The day for students really gets going at 10 a.m. with two hours of
        class time (lecture, activities, etc.). After lunch is an hour of lab
        time where students will begin work on the day’s assignment. At 3 p.m.
        class will reconvene for an hour to reinforce the days concepts and
        answer questions that may arise while working on the assignment.
        Following the review, lab hours continue for the rest of the afternoon.
      </p>

      <p>
        Friday's class hour content will be different the rest of the week (e.g.
        Career Support, guest speakers). Fridays end early with optional
        off-campus social time.
      </p>
    </div>
  </>
)

export default ImmersiveProgram
