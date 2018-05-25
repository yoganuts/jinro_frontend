import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Villager from '../Villager'

export default class VillagerList extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    return (
      <Grid container>
        {this.props.villagers.map(villager => (
          <Villager key={villager.id} villager={villager} />
        ))}
      </Grid>
    )
  }
}

VillagerList.propTypes = {
  villagers: PropTypes.array.isRequired,
  onMount: PropTypes.func.isRequired
}
