import React from 'react'
import PropTypes from 'prop-types'

import TalkList from '../../containers/TalkList'
import TalkForm from '../../containers/TalkForm'

export default function Square(props) {
  return (
    <div>
      <h3>Square</h3>
      <TalkList villageId={props.villageId} />
      <TalkForm villageId={props.villageId} />
    </div>
  )
}

Square.propTypes = {
  villageId: PropTypes.string.isRequired
}
