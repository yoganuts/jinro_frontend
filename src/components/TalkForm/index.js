import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const styles = {
  root: {
    bottom: 0,
    position: 'fixed',
    width: '100%'
  }
}

class TalkForm extends Component {
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
    const { classes } = this.props
    return (
      <Card className={classes.root}>
        <CardContent>
            <form onSubmit={ (e) => this.createTalk(e) }>
              <Grid container>
                <Grid item xs={9} sm={9}>
                  <TextField
                    fullWidth
                    placeholder="証言を入力(Let's talk!)"
                    onChange={ (e) => this.updateTalkContent(e) }
                  />
                </Grid>
                <Grid item xs={3} sm={3}>
                  <Button
                    type="submit"
                    color="primary"
                    variant="raised"
                  >
                    話す
                  </Button>
                </Grid>
              </Grid>
            </form>
        </CardContent>
      </Card>
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
