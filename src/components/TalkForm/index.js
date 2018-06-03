import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import StampIcon from '@material-ui/icons/TagFaces'
import { withStyles } from '@material-ui/core/styles'
import TextArea from 'react-textarea-autosize'

const styles = {
  root: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
  base: {
    display: 'flex',
    paddingLeft: 16,
    paddingRight: 16,
  },
  form: {
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',
  },
  text: {
    flex: 1,
    border: '1px #ccc solid',
    borderRadius: 16,
    padding: '6px 10px 7px',
    fontSize: 16,
    transform: 'scale(0.8)',
  },
  icon: {
    width: 36,
    height: 36,
  },
}

class TalkForm extends Component {
  componentWillMount() {
    this.props.onMount(this.props.user.villageId)
  }

  updateTalkContent(event) {
    this.props.onChange(event.target.value)
  }

  componentWillUnmount() {
    this.props.onUnmount(this.props.user.villageId)
  }

  createTalk(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.user.villagerCode, this.props.user.talkContent)
    this.formRef.reset()
    this.props.onChange(null)
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <div className={classes.base}>
          <form
            onSubmit={ (e) => this.createTalk(e) }
            className={classes.form}
            ref={ (el) => this.formRef = el }
          >
            <IconButton className={classes.icon}>
              {false && <StampIcon />}
            </IconButton>
            <TextArea
              className={classes.text}
              onChange={ (e) => this.updateTalkContent(e) }
            />
            <IconButton type="submit" className={classes.icon}>
              <SendIcon />
            </IconButton>
          </form>
        </div>
      </div>
    )
  }
}

TalkForm.propTypes = {
  user: PropTypes.shape({
    villageId: PropTypes.number,
    villagerCode: PropTypes.string,
    talkContent: PropTypes.string
  }),
  onMount: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default withStyles(styles)(TalkForm)
