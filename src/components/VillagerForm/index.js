import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'

class VillagerForm extends Component {
  updateVillagerName(event) {
    this.props.onVillagerChange(event.target.value)
  }

  updateVillagerImageNo(event) {
    this.props.onVillagerImageChange(event.target.value)
  }

  render() {
    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={3}>
          <TextField
            label="Your Name"
            required
            onChange={ (e) => this.updateVillagerName(e) }
          />
        </Grid>

        <Grid item xs={12} sm={9} container>
          <Grid item xs={12} sm={6}>
            <label>
              <Radio
                name="villager-image-no"
                value="0"
                checked={this.props.user.villagerImageNo === "0"}
                onChange={ (e) => this.updateVillagerImageNo(e) }
              />
              <img src={require('../../images/villager/00.png')} alt="" />
            </label>
            <label>
              <Radio
                name="villager-image-no"
                value="1"
                checked={this.props.user.villagerImageNo === "1"}
                onChange={ (e) => this.updateVillagerImageNo(e) }
              />
              <img src={require('../../images/villager/01.png')} alt="" />
            </label>
            <label>
              <Radio
                name="villager-image-no"
                value="2"
                checked={this.props.user.villagerImageNo === "2"}
                onChange={ (e) => this.updateVillagerImageNo(e) }
              />
              <img src={require('../../images/villager/02.png')} alt="" />
            </label>
          </Grid>
          <Grid item xs={12} sm={6}>
            <label>
              <Radio
                name="villager-image-no"
                value="3"
                checked={this.props.user.villagerImageNo === "3"}
                onChange={ (e) => this.updateVillagerImageNo(e) }
              />
              <img src={require('../../images/villager/03.png')} alt="" />
            </label>
            <label>
              <Radio
                name="villager-image-no"
                value="4"
                checked={this.props.user.villagerImageNo === "4"}
                onChange={ (e) => this.updateVillagerImageNo(e) }
              />
              <img src={require('../../images/villager/04.png')} alt="" />
            </label>
            <label>
              <Radio
                name="villager-image-no"
                value="5"
                checked={this.props.user.villagerImageNo === "5"}
                onChange={ (e) => this.updateVillagerImageNo(e) }
              />
              <img src={require('../../images/villager/05.png')} alt="" />
            </label>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

VillagerForm.propTypes = {
  user: PropTypes.shape({
    villagerImageNo: PropTypes.string
  }),
  onVillagerChange: PropTypes.func.isRequired,
  onVillagerImageChange: PropTypes.func.isRequired
}
export default VillagerForm
