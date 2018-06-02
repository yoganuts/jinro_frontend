import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import SendIcon from '@material-ui/icons/Send'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    bottom: 0,
    position: 'fixed',
    width: '100%',
    height: 42,
    padding: 4,
    backgroundColor: 'white'
  },
  text: {
    width: '75%'
  },
  icon: {
    width: 32,
    height: 32
  }
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
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
          <form onSubmit={ (e) => this.createTalk(e) }>
            <TextField
              placeholder="証言を入力(Let's talk!)"
              onChange={ (e) => this.updateTalkContent(e) }
              className={classes.text}
            />
            <IconButton type="submit" className={classes.icon}>
              <SendIcon />
            </IconButton>
          </form>
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
