import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Badge from '@material-ui/core/Badge'
import { withStyles } from '@material-ui/core/styles'

import imgVillager from '../../images/villager.png'

const styles = {
  card: {
    display: 'flex'
  },
  image: {
    display: 'flex',
    flexDirection: 'column',
    height: 36,
    width: 36,
    padding: 12
  }
}

function Villager(props) {
  const { classes } = props
  return (
    <Grid item sm={3} xs={6}>
      <Card className={ classes.card }>
        <img src={imgVillager} alt={props.villager.name} className={classes.image} />
        <CardContent>
          {props.you ? (
            <Badge color="primary" badgeContent="you">
              {props.villager.name}
            </Badge>
          ) : (
            <span>{props.villager.name}</span>
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}

Villager.propTypes = {
  villager: PropTypes.shape({
    name: PropTypes.string.isRequired
  })
}

export default withStyles(styles)(Villager)
