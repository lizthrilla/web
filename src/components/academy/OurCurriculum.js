import React from 'react'
import curriculum from '../../images/curriculum.svg'

const OurCurriculum = () => (
  <>
    <h3 className="title is-3">Our Curriculum</h3>

    <div className="content">
      <p>
        Our program runs multiple cohorts per year, starting roughly every
        quarter. We prepare individuals for entry-level jobs as junior front-end
        or back-end web developers. Graduates will be able to find employment
        with companies who build and maintain their own websites and web
        applications (i.e. product work), or with agencies that produce websites
        and web applications for other companies (i.e. client work).
      </p>
      <p>
        Students will learn client-side (front-end) technology: HTML, CSS, and
        JavaScript as well as server-side (back-end) technology such as .NET,
        Node.js, or Ruby on Rails. At the end of the course, students will be
        able to create beautiful, fully functional websites backed by databases
        and server-side applications.
      </p>

      <figure>
        <img src={curriculum} alt="Curriculum Infographic" />
      </figure>
    </div>
  </>
)

export default OurCurriculum
