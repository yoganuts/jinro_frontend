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
      <div>
        <h3>Villager List</h3>
        <Grid container>
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
  onMount: PropTypes.func.isRequired
}
