import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import BackIcon from '@material-ui/icons/KeyboardArrowLeft'
import MenuUpIcon from '@material-ui/icons/KeyboardArrowUp'
import MenuDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { Link } from 'react-router-dom'

import VillageMenu from '../../containers/VillageMenu'

const styles = {
  root: {
    top: 0,
    position: 'fixed',
    width: '100%',
    zIndex: 999,
  },
  toolbar: {
    minHeight: 36,
    justifyContent: 'space-between',
  },
  icon: {
    width: 36,
    height: 36,
  }
}

class VillageHeader extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    const { classes } = this.props
    const menuIcon = this.state.showMenu ? <MenuUpIcon /> : <MenuDownIcon />
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar className={classes.toolbar}>
            <IconButton component={Link} to={`${process.env.REACT_APP_PUBLIC_URL}/`} className={classes.icon}>
              <BackIcon />
            </IconButton>
            <Typography variant="subheading" color="inherit">
              {this.props.village.name}
            </Typography>
            <IconButton onClick={ () => this.toggleMenu() } className={classes.icon}>
              {menuIcon}
            </IconButton>
          </Toolbar>
        </AppBar>
        {this.state.showMenu &&
          <VillageMenu />
        }
      </div>
    )
  }
}

VillageHeader.propTypes = {
  village: PropTypes.shape({
    name: PropTypes.string
  })
}

export default withStyles(styles)(VillageHeader)
