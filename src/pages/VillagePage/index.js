import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VillagerList from '../../containers/VillagerList'
import Square from '../../containers/Square'

export default class VillagePage extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    let bgImage = null
    if (this.props.village.image_no) {
      bgImage = require(`../../images/village/${String(this.props.village.image_no).padStart(2, "0")}.jpeg`)
      bgImage = `linear-gradient(rgba(255,255,255,0.7), rgba(255, 255, 255, 0.7)), url(${bgImage})`
    }
    return (
      <div
        style={{ backgroundImage: bgImage }}
      >
        <h2>{this.props.village.name}</h2>
        <VillagerList />
        <Square />
      </div>
    )
  }
}

VillagePage.propTypes = {
  onMount: PropTypes.func.isRequired
}
