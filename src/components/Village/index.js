import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

export default function Village(props) {
  return (
    <Grid item sm={6} xs={12}>
      <Card>
        <CardContent>
          name: {props.village.name}
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`/villages/${props.village.id}`}
          >
            Enter
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}
