import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import AddIcon from '@material-ui/icons/Add'
import CancelIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  add: {
    position: 'fixed',
    bottom: 25,
    right: 25,
    zIndex: 999
  },
  form: {
    position: 'fixed',
    bottom: 0,
    zIndex: 999
  },
  imageVillage: {
    width: 96,
    height: 48,
  }
}

class VillageForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addForm: false
    }
  }

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
    this.setState({ addForm: false })
    this.props.onSubmit(
      this.props.user.villageName,
      this.props.user.villagerName,
      this.props.user.villageImageNo,
      this.props.user.villagerImageNo
    )
  }

  clickAdd() {
    this.setState({ addForm: true })
  }

  clickAddCancel() {
    this.setState({ addForm: false })
  }

  render() {
    const { classes } = this.props
    if (!this.state.addForm) {
      return <Button variant="fab" color="primary" className={classes.add} onClick={ (e) => this.clickAdd() }><AddIcon /></Button>
    }
    return (
      <div className={classes.form}>
        <Slide in={this.state.addForm} direction="up">
          <Card>
            <CardContent>
              <form onSubmit={ (e) => this.createVillage(e) }>
                <Grid container spacing={16}>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      label="Village Name"
                      required
                      onChange={ (e) => this.updateVillageName(e) }
                    />
                  </Grid>

                  <Grid item xs={12} sm={9} container>
                    <Grid item xs={12} sm={6}>
                      <label>
                        <Radio
                          name="village-image-no"
                          value="0"
                          checked={this.props.user.villageImageNo === "0"}
                          onChange={ (e) => this.updateVillageImageNo(e) }
                        />
                        <img src={require('../../images/village/00.jpeg')} className={classes.imageVillage} alt="" />
                      </label>
                      <label>
                        <Radio
                          name="village-image-no"
                          value="1"
                          checked={this.props.user.villageImageNo === "1"}
                          onChange={ (e) => this.updateVillageImageNo(e) }
                        />
                        <img src={require('../../images/village/01.jpeg')} className={classes.imageVillage} alt="" />
                      </label>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <label>
                        <Radio
                          name="village-image-no"
                          value="2"
                          checked={this.props.user.villageImageNo === "2"}
                          onChange={ (e) => this.updateVillageImageNo(e) }
                        />
                        <img src={require('../../images/village/02.jpeg')} className={classes.imageVillage} alt="" />
                      </label>
                      <label>
                        <Radio
                          name="village-image-no"
                          value="3"
                          checked={this.props.user.villageImageNo === "3"}
                          onChange={ (e) => this.updateVillageImageNo(e) }
                        />
                        <img src={require('../../images/village/03.jpeg')} className={classes.imageVillage} alt="" />
                      </label>
                    </Grid>
                  </Grid>

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

                  <Grid item xs={12} sm={6}>
                    <Button
                      type="submit"
                      color="primary"
                      variant="raised"
                      size="small"
                    >
                      村作成
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Slide>
        <Button variant="fab" color="secondary" className={classes.add} onClick={ (e) => this.clickAddCancel() }><CancelIcon /></Button>
      </div>
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
