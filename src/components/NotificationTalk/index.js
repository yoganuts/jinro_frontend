import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 15,
  },
  chip: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
    borderRadius: 10,
    padding: '5px 15px',
  },
  text: {
    color: 'white',
  },
}

function NotificationTalk(props) {
  const { classes } = props
  return (
    <div className={classes.root}>
      <div className={classes.chip}>
        <Typography className={classes.text}>
          {moment(props.talk.createdAt).format('H:mm')}
        </Typography>
        <Typography className={classes.text}>
          {props.talk.content}
        </Typography>
      </div>
    </div>
  )
}

NotificationTalk.propTypes = {
  talk: PropTypes.shape({
    content: PropTypes.string.isRequired,
  }),
}

export default withStyles(styles)(NotificationTalk)
