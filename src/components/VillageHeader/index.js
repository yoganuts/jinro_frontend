import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import BackIcon from '@material-ui/icons/KeyboardArrowLeft'
import MenuDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { Link } from 'react-router-dom'

import VillageMenu from '../../containers/VillageMenu'

const styles = {
  root: {
    position: 'fixed',
    width: '100%',
    flexGrow: 1,
    zIndex: 999
  },
  flex: {
    flex: 1
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
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <IconButton component={Link} to={`${process.env.REACT_APP_PUBLIC_URL}/`}>
              <BackIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              {this.props.village.name}
            </Typography>
            <IconButton onClick={ () => this.toggleMenu() }>
              <MenuDownIcon />
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
