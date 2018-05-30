import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Villager from '../Villager'
import VillagerForm from '../../containers/VillagerForm'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
}

class VillagerList extends Component {
  componentWillMount() {
    this.props.onMount(this.props.user.villageId)
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <h3>村人一覧(chat member)</h3>
        <div className={classes.root}>
          {this.props.villagers.map(villager =>
            <Villager
              key={villager.id}
              villager={villager}
              you={this.props.user.villagerCode === villager.code}
            />
          )}
          {!this.props.user.villagerCode &&
            <VillagerForm />
          }
        </div>
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

export default withStyles(styles)(VillagerList)
