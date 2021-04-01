import React from 'react'

import Link from 'gatsby-link'
import cx from 'classnames'
import { Location } from '@reach/router'
import { resolve } from '@reach/router/lib/utils'
import Icon from './Icon'

const NavItem = ({ to, icon, children, paths }) => (
  <Location>
    {({ location }) => {
      const active = paths
        ? paths.includes(location.pathname)
        : location.pathname.startsWith(resolve(to))
      return (
        <div
          className={cx('column has-text-centered', {
            'is-active': active,
          })}
        >
          <div>
            <Link className={cx({ 'is-active': active })} to={to}>
              <Icon i={icon} />
              <span className="heading">{children}</span>
            </Link>
          </div>
        </div>
      )
    }}
  </Location>
)

export default NavItem
