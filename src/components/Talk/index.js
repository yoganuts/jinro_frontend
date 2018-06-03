import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import moment from 'moment'
import { withStyles } from '@material-ui/core/styles'
import sanitizeHtml from 'sanitize-html'

const styles = {
  root: {
    display: 'flex',
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 12,
  },
  avatar: {
    height: 36,
    width: 36,
  },
  detail: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 10,
    marginRight: 10,
    width: '100%',
  },
  detail2: {
    display: 'flex',
    alignItems: 'flex-end',
    maxWidth: '90%',
  },
  name: {
    fontSize: 9,
    marginBottom: 4,
  },
  content: {
    backgroundColor: 'white',
    padding: 10,
    margin: '0 0 10px 0',
    borderRadius: 16,
    whiteSpace: 'pre-wrap',
  },
  date: {
    fontSize: 9,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 5,
  },
  youDetail: {
    alignItems: 'flex-end'
  },
  youContent: {
    backgroundColor: '#70ff70'
  },
}

function Talk(props) {
  const { classes } = props
  const isYou = props.user.villagerCode === props.talk.villager.code
  const sanitizeAllowed = { allowedTags: ['a'] }
  const villagerAvatar = (
    <Avatar
      src={require(`../../images/villager/${String(props.talk.villager.image_no).padStart(2, "0")}.jpg`)}
      alt={props.talk.villager.name}
      className={classes.avatar}
    />
  )
  return (
    <div className={classes.root}>
      {isYou ? (
        <div className={`${classes.youDetail} ${classes.detail}`}>
          <div className={classes.detail2}>
            <Typography className={classes.date}>
              {moment(props.talk.created_at).format("H:mm")}
            </Typography>
            <pre
              className={`${classes.content} ${classes.youContent}`}
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.talk.content, sanitizeAllowed) }}
            />
          </div>
        </div>
      ) : (
        <Fragment>
          {villagerAvatar}
          <div className={classes.detail}>
            <Typography className={classes.name}>
              {props.talk.villager.name}
            </Typography>
            <div className={classes.detail2}>
              <pre
                className={classes.content}
                dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.talk.content, sanitizeAllowed) }}
              />
              <Typography className={classes.date}>
                {moment(props.talk.created_at).format("H:mm")}
              </Typography>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  )
}

Talk.propTypes = {
  talk: PropTypes.shape({
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
    villager: PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      image_no: PropTypes.number.isRequired
    })
  }),
  user: PropTypes.shape({
    villagerCode: PropTypes.string
  })
}

export default withStyles(styles)(Talk)
