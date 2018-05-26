import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

export default function TalkFom(props) {
  return (
    <Card>
      <CardContent>
        <form>
          <TextField
            multiline
            fullWidth
            rows={4}
          />
        </form>
      </CardContent>
      <CardActions>
        <Button color="primary" variant="raised">Talk</Button>
      </CardActions>
    </Card>
  )
}
