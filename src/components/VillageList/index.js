import React, { Component } from 'react'

import Village from '../Village'

export default class VillageList extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    return (
      <div>
        {this.props.villages.map(village => (
          <Village key={village.id} village={village} />
        ))}
      </div>
    )
  }
}
