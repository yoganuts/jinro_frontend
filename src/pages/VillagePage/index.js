import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VillagerList from '../../containers/VillagerList'
import Square from '../../containers/Square'

export default class VillagePage extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    return (
      <div>
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
