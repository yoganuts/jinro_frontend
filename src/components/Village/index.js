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
  return (
    <Grid item sm={3} xs={6}>
      <Card>
        <img src={require(`../../images/village/${String(props.village.image_no).padStart(2, "0")}.jpeg`)} className={classes.image} alt={props.village.name} />
        <CardContent>
          <Typography variant="title">
            {props.village.name}
          </Typography>
          <Typography variant="subheading">
            村民：{props.village.villagers.length}名
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            variant="outlined"
            color="primary"
            component={Link}
            to={`${process.env.REACT_APP_PUBLIC_URL}/villages/${props.village.id}`}
          >
            入村する
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

Village.propTypes = {
  village: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image_no: PropTypes.number.isRequired,
    villagers: PropTypes.array.isRequired
  })
}

export default withStyles(styles)(Village)
