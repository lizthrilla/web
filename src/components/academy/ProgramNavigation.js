import React from 'react'
import NavTab from '../NavTab'

const ProgramNavigation = () => (
  <div className="tabs">
    <ul>
      <NavTab to="/academy">Program Schedule</NavTab>
      <NavTab to="/academy/immersive">Immersive</NavTab>
      <NavTab to="/academy/night-shift">Night Shift</NavTab>
      <NavTab to="/academy/curriculum">Our Curriculum</NavTab>
      <NavTab to="/academy/catalog">Catalog</NavTab>
      <NavTab to="/academy/career">Career Services</NavTab>
    </ul>
  </div>
)

export default ProgramNavigation
