import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Talk from '../../containers/Talk'

export default class TalkList extends Component {
  componentWillMount() {
    this.props.onMount(this.props.user.villageId)
  }

  render() {
    return (
      <Fragment>
        {this.props.talks.slice().reverse().map(talk =>
          <Talk key={talk.id} talk={talk} />
        )}
      </Fragment>
    )
  }
}

TalkList.propTypes = {
  talks: PropTypes.array.isRequired,
  user: PropTypes.shape({
    villageId: PropTypes.number.isRequired,
  }),
  onMount: PropTypes.func.isRequired
}
