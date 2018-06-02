import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  grid: {
    textAlign: 'center'
  },
  icon: {
    width: 48,
    height: 48,
  },
  radio: {
    height: 0,
  },
}

class VillagerForm extends Component {
  updateVillagerName(event) {
    this.props.onVillagerChange(event.target.value)
  }

  updateVillagerImageNo(event) {
    this.props.onVillagerImageChange(event.target.value)
  }

  render() {
    const { classes } = this.props
    let avatars = []
    for (let i=0; i<12; i++) {
      avatars.push(
        <Grid item xs={4} sm={4} key={i} className={classes.grid}>
          <label>
            <Radio
              name="villager-image-no"
              value={String(i)}
              className={classes.radio}
              checked={this.props.user.villagerImageNo === String(i)}
              onChange={ (e) => this.updateVillagerImageNo(e) }
            />
            <img className={classes.icon} src={require(`../../images/villager/${String(i).padStart(2, "0")}.jpg`)} alt="" />
          </label>
        </Grid>
      )
    }
    return (
      <Grid container spacing={16}>
        <Grid item xs={12} sm={12}>
          <TextField
            label="Your Name"
            required
            onChange={ (e) => this.updateVillagerName(e) }
          />
        </Grid>
        {avatars}
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
export default withStyles(styles)(VillagerForm)
