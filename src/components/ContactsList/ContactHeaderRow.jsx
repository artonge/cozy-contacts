import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Paper from 'cozy-ui/transpiled/react/Paper'
import Typography from 'cozy-ui/transpiled/react/Typography'

const customStyles = theme => ({
  paper: {
    position: 'sticky',
    zIndex: 1,
    top: 0,
    backgroundColor: 'var(--defaultBackgroundColor)',
    height: '2rem',
    display: 'flex',
    alignItems: 'center',
    textIndent: '2rem',
    textTransform: 'uppercase',
    [theme.breakpoints.down('sm')]: {
      textIndent: '1rem'
    }
  },
  typography: {
    fontSize: '0.75rem'
  }
})

const ContactHeaderRow = ({ classes, header }) => {
  return (
    <Paper className={classes.paper} square elevation={0}>
      <Typography
        className={classes.typography}
        variant="h6"
        color="textSecondary"
      >
        {header}
      </Typography>
    </Paper>
  )
}

ContactHeaderRow.propTypes = {
  header: PropTypes.string.isRequired
}
export default withStyles(customStyles)(ContactHeaderRow)
