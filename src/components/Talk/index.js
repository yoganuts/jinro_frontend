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
      <CardContent className={props.user.villagerCode === props.talk.villager.code ? classes.align : null}>
        <Typography variant="title">
          {props.talk.content}
        </Typography>
        <Typography color="textSecondary">
          {props.talk.villager.name}: {props.talk.created_at}
        </Typography>
      </CardContent>
    </Card>
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
