import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import logo from '../../images/jinro.svg'

const styles = {
  logo: {
    width: 32,
    height: 32,
    marginRight: 16
  }
}

function Header(props) {
  const { classes } = props
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img src={logo} alt="jinro line" className={classes.logo} />
        <Typography variant="title" color="inherit">
          Jinro Line
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
