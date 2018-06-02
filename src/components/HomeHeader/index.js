import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import AddCancelIcon from '@material-ui/icons/Clear'
import { withStyles } from '@material-ui/core/styles'

import logo from '../../images/jinro.svg'

const styles = {
  root: {
    top: 0,
    position: 'fixed',
    width: '100%',
    zIndex: 999,
  },
  toolbar: {
    minHeight: 36,
  },
  icon: {
    width: 36,
    height: 36,
  },
  title: {
    flex: 1,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
}

function Header(props) {
  const { classes } = props
  return (
    <AppBar position="static" color="default" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <img src={logo} alt="jinro line" className={classes.logo} />
        <Typography variant="subheading" color="inherit" className={classes.title}>
          Jinro Line
        </Typography>
        <IconButton className={classes.icon} onClick={ () => props.toggleForm() } >
          {props.showForm ? <AddCancelIcon /> : <AddIcon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  showForm: PropTypes.bool.isRequired,
  toggleForm: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header)
