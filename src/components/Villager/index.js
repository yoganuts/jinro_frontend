import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function Villager(props) {
  return (
    <Grid item sm={6} xs={12}>
      <Card>
        <CardContent>
          name: {props.villager.name}
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
