import React from 'react'
import PropTypes from 'prop-types'
import CardContent from '@material-ui/core/CardContent'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'
import { withStyles } from '@material-ui/core/styles'

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
    <Chip
      avatar={<Avatar
                src={require(`../../images/villager/${String(props.villager.image_no).padStart(2, "0")}.png`)}
                alt={props.villager.name}
              />}
      label={`${props.villager.name}${props.you ? "(you)" : ""}`}
    />
  )
}

Villager.propTypes = {
  villager: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image_no: PropTypes.number.isRequired
  })
}

export default withStyles(styles)(Villager)
