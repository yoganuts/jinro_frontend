import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Fade from '@material-ui/core/Fade'
import { withStyles } from '@material-ui/core/styles'

import VillageHeader from '../../components/VillageHeader'
import TalkList from '../../containers/TalkList'
import TalkForm from '../../containers/TalkForm'

const styles = {
  square: {
    minHeight: '100vh',
    overflow: 'auto',
    marginTop: 36,
    marginBottom: 42,
    paddingTop: 20,
    backgroundSize: 'auto 100%',
    backgroundPosition: 'bottom',
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
          <VillageHeader village={this.props.village} />
          <div style={{ backgroundImage: bgImage }} className={classes.square}>
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
    image_no: PropTypes.number
  }),
  onMount: PropTypes.func.isRequired
}

export default withStyles(styles)(VillagePage)
