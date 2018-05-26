import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VillagerList from '../../containers/VillagerList'
import Square from '../../components/Square'

export default class VillagePage extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    return (
      <div>
        <h2>Village</h2>
        <Square />
        <VillagerList />
      </div>
    )
  }
}

VillagePage.propTypes = {
  onMount: PropTypes.func.isRequired
}
