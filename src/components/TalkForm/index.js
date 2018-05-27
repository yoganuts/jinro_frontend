import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default class TalkForm extends Component {
  componentWillMount() {
    this.props.onMount(this.props.user.villageId)
  }

  updateTalkContent(event) {
    this.props.onChange(event.target.value)
  }

  createTalk(event) {
    event.preventDefault()
    this.props.onSubmit(this.props.user.villagerCode, this.props.user.talkContent)
  }

  render() {
    return (
      <form onSubmit={ (e) => this.createTalk(e) }>
        <Card>
          <CardContent>
            <TextField
              fullWidth
              placeholder="証言を入力(Let's talk!)"
              onChange={ (e) => this.updateTalkContent(e) }
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              color="primary"
              variant="raised"
            >
              話す
            </Button>
          </CardActions>
        </Card>
      </form>
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
