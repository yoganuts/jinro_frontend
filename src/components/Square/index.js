import React from 'react'
import PropTypes from 'prop-types'

import TalkList from '../../containers/TalkList'
import TalkForm from '../../containers/TalkForm'

export default function Square(props) {
  return (
    <div>
      <h3>広場にて(chat space)</h3>
      {props.user.villagerCode &&
        <TalkForm />
      }
      <TalkList />
    </div>
  )
}

Square.propTypes = {
  user: PropTypes.shape({
    villagerCode: PropTypes.string
  })
}
