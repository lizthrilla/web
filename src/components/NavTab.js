import React from 'react'
import Link from 'gatsby-link'
import cx from 'classnames'
import { Location } from '@reach/router'
import { resolve } from '@reach/router/lib/utils'

const NavTab = ({ to, children }) => (
  <Location>
    {({ location }) => (
      <li
        className={cx({
          'is-active': location.pathname === resolve(to)
        })}
      >
        <Link to={to}>{children}</Link>
      </li>
    )}
  </Location>
)

export default NavTab
