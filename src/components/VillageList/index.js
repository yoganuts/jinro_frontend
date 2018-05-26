import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Village from '../Village'

export default class VillageList extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    return (
      <div>
        <h3>Village List</h3>
        <Grid container spacing={16}>
          {this.props.villages.map(village => (
            <Village key={village.id} village={village} />
          ))}
        </Grid>
      </div>
    )
  }
}

VillageList.propTypes = {
  villages: PropTypes.array.isRequired,
  onMount: PropTypes.func.isRequired
}
