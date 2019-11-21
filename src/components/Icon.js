import React from 'react'
import cx from 'classnames'

const Icon = ({ s, i }) => (
  <span className={cx('icon', s)}>
    <i className={i} />
  </span>
)

export default Icon
