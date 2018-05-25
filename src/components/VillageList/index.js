import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import Village from '../Village'

export default class VillageList extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    return (
      <Grid container>
        {this.props.villages.map(village => (
          <Village key={village.id} village={village} />
        ))}
      </Grid>
    )
  }
}
