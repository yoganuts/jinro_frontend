import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

import logo from '../../images/jinro.svg'

const styles = {
  logo: {
    width: 48,
    height: 48
  }
}

function Header(props) {
  const { classes } = props
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <img src={logo} alt="jinro chat" className={classes.logo} />
        <Button color="inherit" component={Link} to={`${process.env.REACT_APP_PUBLIC_URL}/`}>
          <Typography variant="title" color="inherit">
            Jinro Chat
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(Header)
