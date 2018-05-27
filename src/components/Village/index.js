import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const styles = {
  image: {
    height: 240,
  }
}

function Village(props) {
  const { classes } = props
  const imageNo = Math.floor(Math.random() * 4) + 1
  return (
    <Grid item sm={3} xs={6}>
      <Card>
        <img src={require(`../../images/village0${imageNo}.jpeg`)} className={classes.image} alt={props.village.name} />
        <CardContent>
          <Typography variant="headline">
            {props.village.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`${process.env.REACT_APP_PUBLIC_URL}/villages/${props.village.id}`}
          >
            Enter
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

Village.propTypes = {
  village: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
}

export default withStyles(styles)(Village)
