import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <Button color="inherit" component={Link} to="/">
          <Typography variant="title" color="inherit">
            Jinro Chat
          </Typography>
        </Button>
      </Toolbar>
    </AppBar>
  )
}
