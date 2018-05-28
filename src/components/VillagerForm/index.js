import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class VillagerForm extends Component {
  componentWillMount() {
    this.props.onMount(this.props.user.villageId)
  }

  updateVillagerName(event) {
    this.props.onChange(event.target.value)
  }

  createVillager(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.user.villageId, this.props.user.villagerName)
  }

  render() {
    return (
      <form onSubmit={ (e) => this.createVillager(e) }>
        <Card>
          <CardContent>
            <TextField
              fullWidth
              placeholder="name"
              onChange={ (e) => this.updateVillagerName(e) }
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              color="primary"
              variant="raised"
              size="small"
            >
              Join
            </Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

VillagerForm.propTypes = {
  user: PropTypes.shape({
    villageId: PropTypes.number,
    villagerName: PropTypes.string
  }),
  onMount: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
