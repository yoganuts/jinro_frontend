import React from 'react'
import PropTypes from 'prop-types'

import TalkList from '../../containers/TalkList'
import TalkForm from '../../containers/TalkForm'

export default function Square(props) {
  return (
    <div>
      <TalkList />
      {props.user.villagerCode &&
        <TalkForm />
      }
    </div>
  )
}

Square.propTypes = {
  user: PropTypes.shape({
    villagerCode: PropTypes.string
  })
}
