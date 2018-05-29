import React from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  align: {
    textAlign: 'right'
  }
}

function Talk(props) {
  const { classes } = props
  const you = props.user.villagerCode === props.talk.villager.code
  const villagerAvatar = (
    <Avatar
      src={require(`../../images/villager/${String(props.talk.villager.image_no).padStart(2, "0")}.png`)}
      alt={props.talk.villager.name}
    />
  )
  return (
    <ListItem>
      {!you && villagerAvatar}
      <ListItemText
        primary={props.talk.content}
        secondary={`${props.talk.villager.name}: ${moment(props.talk.created_at).format("MM/DD h:mm")}`}
        className={you ? classes.align : null}
      />
      {you && villagerAvatar}
    </ListItem>
  )
}

Talk.propTypes = {
  talk: PropTypes.shape({
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    villager: PropTypes.shape({
      code: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  }),
  user: PropTypes.shape({
    villagerCode: PropTypes.string
  })
}

export default withStyles(styles)(Talk)
