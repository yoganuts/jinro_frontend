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
  stamp: {
    width: 200,
    height: 200,
  },
  date: {
    fontSize: 9,
    marginLeft: 5,
    marginRight: 5,
    paddingBottom: 15,
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
  const sanitizeAllowed = { allowedTags: ['a'] }
  const villagerAvatar = (
    <Avatar
      src={require(`../../images/villager/${String(props.talk.villager.imageNo).padStart(2, '0')}.jpg`)}
      alt={props.talk.villager.name}
      className={classes.avatar}
    />
  )
  // talk or stamp
  let content = null
  if (props.talk.stampNo === null) {
    content = (
      <pre
        className={`${classes.content} ${classes.youContent}`}
        dangerouslySetInnerHTML={{ __html: sanitizeHtml(props.talk.content, sanitizeAllowed) }}
      />
    )
  } else {
    content = (
      <img
        src={require(`../../images/stamp/${String(props.talk.stampNo).padStart(3, '0')}.png`)}
        alt="stamp"
        className={classes.stamp}
      />
    )
  }

  return (
    <div className={classes.root}>
      {props.isYou ? (
        <div className={`${classes.youDetail} ${classes.detail}`}>
          <div className={classes.detail2}>
            <Typography className={classes.date}>
              {moment(props.talk.createdAt).format('H:mm')}
            </Typography>
            {content}
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
              {content}
              <Typography className={classes.date}>
                {moment(props.talk.createdAt).format('H:mm')}
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
    content: PropTypes.string,
    stampNo: PropTypes.number,
    createdAt: PropTypes.string.isRequired,
    villager: PropTypes.shape({
      name: PropTypes.string.isRequired,
      code: PropTypes.string.isRequired,
      imageNo: PropTypes.number.isRequired
    })
  }),
  user: PropTypes.shape({
    villagerCode: PropTypes.string
  }),
  isYou: PropTypes.bool,
}

export default withStyles(styles)(Talk)
