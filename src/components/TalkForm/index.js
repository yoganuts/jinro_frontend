import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class TalkForm extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  updateTalkContent(event) {
    this.props.onChange(event.target.value)
  }

  createTalk(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.userVillagerData.code, this.props.userVillagerData.talkContent)
  }

  render() {
    return (
      <form onSubmit={ (e) => this.createTalk(e) }>
        <Card>
          <CardContent>
            <TextField
              fullWidth
              placeholder="Let's talk!"
              onChange={ (e) => this.updateTalkContent(e) }
            />
          </CardContent>
          <CardActions>
            <Button
              color="primary"
              variant="raised"
            >
              Talk
            </Button>
          </CardActions>
        </Card>
      </form>
    )
  }
}

TalkForm.propTypes = {
  userVillagerData: PropTypes.shape({
    code: PropTypes.string,
    talkContent: PropTypes.string
  }),
  onMount: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}
