import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import VillagerForm from '../../containers/VillagerForm'

class VillagerNew extends Component {
  createVillager(event) {
    event.preventDefault()
    this.props.onSubmit(
      this.props.user.villageId,
      this.props.user.villagerName,
      this.props.user.villagerImageNo
    )
  }

  render() {
    return (
      <form onSubmit={ (e) => this.createVillager(e) }>
        <Card>
          <CardContent>
            <VillagerForm />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              color="primary"
              variant="raised"
              size="small"
            >
              入村する
            </Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

VillagerNew.propTypes = {
  user: PropTypes.shape({
    villageId: PropTypes.number,
    villagerName: PropTypes.string
  }),
  onSubmit: PropTypes.func.isRequired
}

export default VillagerNew
