import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Villager from '../Villager'

export default class VillagerList extends Component {
  componentWillMount() {
    this.props.onMount(this.props.villageId)
  }

  render() {
    return (
      <div>
        <h3>Villager List</h3>
        <Grid container spacing={16}>
          {this.props.villagers.map(villager => (
            <Villager key={villager.id} villager={villager} />
          ))}
        </Grid>
      </div>
    )
  }
}

VillagerList.propTypes = {
  villagers: PropTypes.array.isRequired,
  villageId: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired
}
