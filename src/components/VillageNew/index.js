import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Radio from '@material-ui/core/Radio'
import Slide from '@material-ui/core/Slide'
import { withStyles } from '@material-ui/core/styles'

import VillagerForm from '../../containers/VillagerForm'

const styles = {
  root: {
    backgroundColor: 'white',
  },
  grid: {
    textAlign: 'center',
  },
  imageVillage: {
    width: 96,
    height: 48,
  },
}

class VillageNew extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  updateVillageName(event) {
    this.props.onVillageChange(event.target.value)
  }

  updateVillageImageNo(event) {
    this.props.onVillageImageChange(event.target.value)
  }

  createVillage(event) {
    event.preventDefault()
    this.props.closeForm()
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
    let villageImages = []
    for (let i=0; i<4; i++) {
      villageImages.push(
        <Grid item xs={6} sm={6} key={i} className={classes.grid}>
          <label>
            <Radio
              name="village-image-no"
              value={String(i)}
              checked={this.props.user.villageImageNo === String(i)}
              onChange={ (e) => this.updateVillageImageNo(e) }
            />
            <img src={require(`../../images/village/${String(i).padStart(2, "0")}.jpeg`)} className={classes.imageVillage} alt="" />
          </label>
        </Grid>
      )
    }
    return (
      <div className={classes.root}>
        <Slide in={true} direction="down">
          <Card>
            <CardContent>
              <form onSubmit={ (e) => this.createVillage(e) }>
                <Grid container spacing={16}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      label="村の名前"
                      required
                      onChange={ (e) => this.updateVillageName(e) }
                    />
                  </Grid>
                  {villageImages}
                </Grid>
                <VillagerForm />
                <Grid container spacing={16}>
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
      </div>
    )
  }
}

VillageNew.propTypes = {
  user: PropTypes.shape({
    villageName: PropTypes.string,
    villagerName: PropTypes.string,
    villageImageNo: PropTypes.string,
    villagerImageNo: PropTypes.string
  }),
  closeForm: PropTypes.func.isRequired,
  onMount: PropTypes.func.isRequired,
  onVillageChange: PropTypes.func.isRequired,
  onVillageImageChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(VillageNew)
