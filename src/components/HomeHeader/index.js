import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import logo from '../../images/jinro.svg'

const styles = {
  toolbar: {
    minHeight: 36
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8
  }
}

function Header(props) {
  const { classes } = props
  return (
    <AppBar position="static" color="default">
      <Toolbar className={classes.toolbar}>
        <img src={logo} alt="jinro line" className={classes.logo} />
        <Typography variant="subheading" color="inherit">
          Jinro Line
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
