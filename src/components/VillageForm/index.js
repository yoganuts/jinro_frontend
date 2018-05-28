import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import FormControl from '@material-ui/core/FormControl'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  image: {
    width: 72,
    height: 72,
  }
}

class VillageForm extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  updateVillageName(event) {
    this.props.onVillageChange(event.target.value)
  }

  updateVillagerName(event) {
    this.props.onVillagerChange(event.target.value)
  }

  updateVillageImageNo(event) {
    this.props.onVillageImageChange(event.target.value)
  }

  updateVillagerImageNo(event) {
    this.props.onVillagerImageChange(event.target.value)
  }

  createVillage(event) {
    event.preventDefault()
    this.props.onSubmit(
      this.props.user.villageName,
      this.props.user.villagerName,
      this.props.user.villageImageNo,
      this.props.user.villagerImageNo
    )
  }

  render() {
    const { classes } = this.props
    return (
      <Card>
        <CardContent>
          <form onSubmit={ (e) => this.createVillage(e) }>
            <FormControl>
              <TextField
                label="Village Name"
                required
                onChange={ (e) => this.updateVillageName(e) }
              />
            </FormControl>
            <FormControl>
              <TextField
                label="Your Name"
                required
                onChange={ (e) => this.updateVillagerName(e) }
              />
            </FormControl>

            <FormControl>
              <label>
                <Radio
                  name="village-image-no"
                  value="0"
                  checked={this.props.user.villageImageNo === "0"}
                  onChange={ (e) => this.updateVillageImageNo(e) }
                />
                <img src={require('../../images/village/00.jpeg')} className={classes.image} alt="" />
              </label>
              <label>
                <Radio
                  name="village-image-no"
                  value="1"
                  checked={this.props.user.villageImageNo === "1"}
                  onChange={ (e) => this.updateVillageImageNo(e) }
                />
                <img src={require('../../images/village/01.jpeg')} className={classes.image} alt="" />
              </label>
              <label>
                <Radio
                  name="village-image-no"
                  value="2"
                  checked={this.props.user.villageImageNo === "2"}
                  onChange={ (e) => this.updateVillageImageNo(e) }
                />
                <img src={require('../../images/village/02.jpeg')} className={classes.image} alt="" />
              </label>
              <label>
                <Radio
                  name="village-image-no"
                  value="3"
                  checked={this.props.user.villageImageNo === "3"}
                  onChange={ (e) => this.updateVillageImageNo(e) }
                />
                <img src={require('../../images/village/03.jpeg')} className={classes.image} alt="" />
              </label>
            </FormControl>

            <FormControl>
              <label>
                <Radio
                  name="villager-image-no"
                  value="0"
                  checked={this.props.user.villagerImageNo === "0"}
                  onChange={ (e) => this.updateVillagerImageNo(e) }
                />
                <img src={require('../../images/villager/00.png')} className={classes.image} alt="" />
              </label>
              <label>
                <Radio
                  name="villager-image-no"
                  value="1"
                  checked={this.props.user.villagerImageNo === "1"}
                  onChange={ (e) => this.updateVillagerImageNo(e) }
                />
                <img src={require('../../images/villager/01.png')} className={classes.image} alt="" />
              </label>
              <label>
                <Radio
                  name="villager-image-no"
                  value="2"
                  checked={this.props.user.villagerImageNo === "2"}
                  onChange={ (e) => this.updateVillagerImageNo(e) }
                />
                <img src={require('../../images/villager/02.png')} className={classes.image} alt="" />
              </label>
              <label>
                <Radio
                  name="villager-image-no"
                  value="3"
                  checked={this.props.user.villagerImageNo === "3"}
                  onChange={ (e) => this.updateVillagerImageNo(e) }
                />
                <img src={require('../../images/villager/03.png')} className={classes.image} alt="" />
              </label>
            </FormControl>

            <Button
              type="submit"
              color="primary"
              variant="raised"
              size="small"
            >
              Create
            </Button>
          </form>
        </CardContent>
      </Card>
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
  onVillageImageChange: PropTypes.func.isRequired,
  onVillagerImageChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(VillageForm)
