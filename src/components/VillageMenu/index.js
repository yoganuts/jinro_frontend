import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/DirectionsWalk'
import { withStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    textAlign: 'center'
  },
  card: {
    paddingTop: 6
  }
}

function VillageMenu(props) {
  const { classes } = props
  return (
    <Grid container className={classes.root}>
      <Grid item xs={3} sm={3}>
        <Link to={`${process.env.REACT_APP_PUBLIC_URL}/villages/${props.user.villageId}/villagers/`}>
          <Card>
            <CardContent className={classes.card}>
              <IconButton>
                <AddIcon />
              </IconButton>
              <Typography>
                村人
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Grid>
    </Grid>
  )
}

VillageMenu.propTypes = {
  user: PropTypes.shape({
    villageId: PropTypes.number
  })
}

export default withStyles(styles)(VillageMenu)
