import React from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import Avatar from '@material-ui/core/Avatar'

export default function Villager(props) {
  return (
    <Chip
      avatar={<Avatar
                src={require(`../../images/villager/${String(props.villager.imageNo).padStart(2, "0")}.jpg`)}
                alt={props.villager.name}
              />}
      label={`${props.villager.name}${props.you ? "(you)" : ""}`}
    />
  )
}

Villager.propTypes = {
  villager: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageNo: PropTypes.number.isRequired
  }),
  you: PropTypes.bool
}
