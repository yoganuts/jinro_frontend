import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { withStyles } from '@material-ui/core/styles'
import BackIcon from '@material-ui/icons/KeyboardArrowLeft'
import MenuDownIcon from '@material-ui/icons/KeyboardArrowDown'
import { Link } from 'react-router-dom'

const styles = {
  appBar: {
    position: 'fixed',
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
}

function VillageHeader(props) {
  const { classes } = props
  return (
    <AppBar position="static" color="default" className={classes.appBar}>
      <Toolbar>
        <IconButton component={Link} to={`${process.env.REACT_APP_PUBLIC_URL}/`}>
          <BackIcon />
        </IconButton>
        <Typography variant="title" color="inherit" className={classes.flex}>
          {props.village.name}
        </Typography>
        <IconButton>
          <MenuDownIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

VillageHeader.propTypes = {
  village: PropTypes.shape({
    name: PropTypes.string
  })
}

export default withStyles(styles)(VillageHeader)
