import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'

import Villager from '../Villager'
import VillagerForm from '../../containers/VillagerForm'

export default class VillagerList extends Component {
  componentWillMount() {
    this.props.onMount(this.props.user.villageId)
  }

  render() {
    return (
      <div>
        <h3>Villager List</h3>
        <Grid container spacing={16}>
          {this.props.villagers.map(villager =>
            <Villager
              key={villager.id}
              villager={villager}
              you={this.props.user.villagerCode === villager.code}
            />
          )}
          {!this.props.user.villagerCode &&
            <Grid item sm={3} xs={6}>
              <VillagerForm />
            </Grid>
          }
        </Grid>
      </div>
    )
  }
}

VillagerList.propTypes = {
  villagers: PropTypes.array.isRequired,
  user: PropTypes.shape({
    villageId: PropTypes.number.isRequired,
    villagerCode: PropTypes.string
  }),
  onMount: PropTypes.func.isRequired
}
