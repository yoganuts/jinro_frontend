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
            onClick={ (e) => this.createTalk(e) }
          >
            Talk
          </Button>
        </CardActions>
      </Card>
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
