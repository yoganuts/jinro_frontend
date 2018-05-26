import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Cable from 'actioncable'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class TalkForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      talkContent: ''
    }
  }

  updateTalkContent(event) {
    this.setState({
      talkContent: event.target.value
    })
  }

  createSocket() {
    let cable = Cable.createConsumer(process.env.REACT_APP_SOCKET_PATH)
    this.talks = cable.subscriptions.create({
      channel: 'TalkChannel'
    }, {
      connected: () => {},
      received: (data) => {
        console.log(data)
      },
      create: function(userVillagerCode, talkContent) {
        this.perform('create', {
          code: userVillagerCode,
          content: talkContent
        })
      }
    })
  }

  componentWillMount() {
    this.createSocket()
  }

  sendTalk(event) {
    event.preventDefault()
    this.talks.create(this.props.userVillagerCode, this.state.talkContent)
    this.setState({
      talkContent: ''
    })
  }

  render() {
    return (
      <Card>
        <CardContent>
          <TextField
            multiline
            fullWidth
            rows={4}
            onChange={ (e) => this.updateTalkContent(e) }
          />
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            variant="raised"
            onClick={ (e) => this.sendTalk(e) }
          >
            Talk
          </Button>
        </CardActions>
      </Card>
    )
  }
}

TalkForm.propTypes = {
  userVillagerCode: PropTypes.string.isRequired
}
