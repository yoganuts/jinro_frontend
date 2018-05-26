import React from 'react'

import TalkList from '../../containers/TalkList'
import TalkForm from '../../containers/TalkForm'

export default function Square(props) {
  return (
    <div>
      <h3>Square</h3>
      <TalkForm />
      <TalkList />
    </div>
  )
}
