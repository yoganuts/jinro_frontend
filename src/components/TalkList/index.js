import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Talk from '../../containers/Talk'

export default class TalkList extends Component {
  componentWillMount() {
    this.props.onMount(this.props.villageId)
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
  villageId: PropTypes.string.isRequired,
  onMount: PropTypes.func.isRequired
}
