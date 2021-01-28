import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

import Typography from 'cozy-ui/transpiled/react/Typography'

const customStyles = () => ({
  root: {
    fontWeight: 'normal'
  }
})

const ContactName = ({ classes, displayName, familyName }) => {
  const namesToDisplay = (displayName && displayName.split(' ')) || []
  return (
    <Typography
      variant="h6"
      noWrap
      gutterBottom
      inline
      className={`${classes.root} u-ml-1`}
    >
      {namesToDisplay.map((name, key) => (
        <span
          key={`display-${key}`}
          className={cx({ 'u-fw-bold': name === familyName })}
        >
          {name}
          &nbsp;
        </span>
      ))}
    </Typography>
  )
}

ContactName.propTypes = {
  displayName: PropTypes.string,
  familyName: PropTypes.string
}
ContactName.defaultProps = {
  displayName: ''
}

export default withStyles(customStyles)(ContactName)
