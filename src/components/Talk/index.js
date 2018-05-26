import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  align: {
    textAlign: 'right'
  }
}

function Talk(props) {
  const { classes } = props
  return (
    <Card>
      <CardContent className={props.userVillagerData.id === props.talk.villager_id ? classes.align : null}>
        <Typography variant="title">
          {props.talk.content}
        </Typography>
        <Typography color="textSecondary">
          {props.talk.villager_id}: {props.talk.created_at}
        </Typography>
      </CardContent>
    </Card>
  )
}

Talk.propTypes = {
  talk: PropTypes.shape({
    villager_id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired
  }),
  userVillagerData: PropTypes.shape({
    id: PropTypes.number.isRequired
  })
}

export default withStyles(styles)(Talk)
