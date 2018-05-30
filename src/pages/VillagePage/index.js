import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import { withStyles } from '@material-ui/core/styles'

import VillagerList from '../../containers/VillagerList'
import Square from '../../containers/Square'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  title: {
    marginTop: 10,
    backgroundColor: 'rgba(150, 150, 150, 0.2)'
  }
}

class VillagePage extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    const { classes } = this.props
    let bgImage = null
    if (this.props.village.image_no) {
      bgImage = require(`../../images/village/${String(this.props.village.image_no).padStart(2, "0")}.jpeg`)
      bgImage = `linear-gradient(rgba(255,255,255,0.7), rgba(255, 255, 255, 0.7)), url(${bgImage})`
    }
    return (
      <div
        style={{ backgroundImage: bgImage }}
      >
        <div className={classes.root}>
          <Chip
            label={this.props.village.name}
            className={classes.title}
          />
        </div>
        <VillagerList />
        <Square />
      </div>
    )
  }
}

VillagePage.propTypes = {
  onMount: PropTypes.func.isRequired
}

export default withStyles(styles)(VillagePage)
