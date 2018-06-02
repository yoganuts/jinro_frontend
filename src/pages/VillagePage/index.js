import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/core/styles'
import BackIcon from '@material-ui/icons/KeyboardArrowLeft'
import { Link } from 'react-router-dom'

import VillagerList from '../../containers/VillagerList'
import TalkList from '../../containers/TalkList'
import TalkForm from '../../containers/TalkForm'

const styles = {
  appBar: {
    position: 'fixed',
  },
  square: {
    height: '100vh',
    overflow: 'auto',
    paddingTop: 50,
    backgroundSize: 'auto 100%',
    backgroundPosition: 'bottom'
  }
}

class VillagePage extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    const { classes } = this.props
    let bgImage = null
    if (this.props.village.image_no >= 0) {
      bgImage = require(`../../images/village/${String(this.props.village.image_no).padStart(2, "0")}.jpeg`)
      bgImage = `linear-gradient(rgba(255,255,255,0.7), rgba(255, 255, 255, 0.7)), url(${bgImage})`
    }
    return (
      <Fade in={true}>
        <div>
          <AppBar position="static" color="default" className={classes.appBar}>
            <Toolbar>
              <Link to={`${process.env.REACT_APP_PUBLIC_URL}/`}>
                <BackIcon />
              </Link>
              <Typography variant="title" color="inherit">
                {this.props.village.name}
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={{ backgroundImage: bgImage }} className={classes.square}>
            <VillagerList />
            <TalkList />
          </div>
          {this.props.user.villagerCode &&
            <TalkForm />
          }
        </div>
      </Fade>
    )
  }
}

VillagePage.propTypes = {
  user: PropTypes.shape({
    villagerCode: PropTypes.string
  }),
  village: PropTypes.shape({
    name: PropTypes.string,
    image_no: PropTypes.number
  }),
  onMount: PropTypes.func.isRequired
}

export default withStyles(styles)(VillagePage)
