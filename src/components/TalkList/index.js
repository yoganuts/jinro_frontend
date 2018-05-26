import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Talk from '../Talk'

export default class TalkList extends Component {
  componentWillMount() {
    this.props.onMount()
  }

  render() {
    return (
      <div>
        <h4>TalkList</h4>
        {this.props.talks.map(talk => (
          <Talk key={talk.id} talk={talk} />
        ))}
      </div>
    )
  }
}

TalkList.propTypes = {
  talks: PropTypes.array.isRequired,
  onMount: PropTypes.func.isRequired
}
