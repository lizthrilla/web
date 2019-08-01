import React from 'react'
import NavTab from './NavTab'

const TeamNavigation = () => (
  <div className="tabs">
    <ul>
      <NavTab to="/team">Staff</NavTab>
      <NavTab to="/team/volunteers">Volunteers</NavTab>
      <NavTab to="/team/advisory">Advisory Committee</NavTab>
    </ul>
  </div>
)

export default TeamNavigation
