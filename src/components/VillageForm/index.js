import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class VillageForm extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  updateVillageName(event) {
    this.props.onVillageChange(event.target.value)
  }

  updateVillagerName(event) {
    this.props.onVillagerChange(event.target.value)
  }

  createVillage(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.user.villageName, this.props.user.villagerName)
  }

  render() {
    return (
      <form onSubmit={ (e) => this.createVillage(e) }>
        <Card>
          <CardContent>
            <TextField
              fullWidth
              required
              placeholder="village name"
              onChange={ (e) => this.updateVillageName(e) }
            />
          </CardContent>
          <CardContent>
            <TextField
              fullWidth
              required
              placeholder="your name"
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
              Create
            </Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

VillageForm.propTypes = {
  user: PropTypes.shape({
    villageName: PropTypes.string,
    villagerName: PropTypes.string
  }),
  onMount: PropTypes.func.isRequired,
  onVillageChange: PropTypes.func.isRequired,
  onVillagerChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
