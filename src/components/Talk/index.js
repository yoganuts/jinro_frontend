import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

export default function Talk(props) {
  return (
    <Card>
      <CardContent>
        {props.talk.content}
      </CardContent>
    </Card>
  )
}

Talk.propTypes = {
  talk: PropTypes.shape({
    content: PropTypes.string.isRequired,
  })
}
