import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import Talk from '../Talk'
import NotificationTalk from '../NotificationTalk'

export default class TalkList extends Component {
  componentWillMount() {
    this.props.onMount(this.props.user.villageId)
  }

  render() {
    return (
      <Fragment>
        {this.props.talks.slice().reverse().map(talk =>
          <Fragment key={talk.id}>
            {talk.villagerId ? (
              <Talk
                talk={talk}
                isYou={this.props.user.villagerCode === talk.villager.code}
              />
            ):(
              <NotificationTalk talk={talk} />
            )}
          </Fragment>
        )}
      </Fragment>
    )
  }
}

TalkList.propTypes = {
  talks: PropTypes.array.isRequired,
  user: PropTypes.shape({
    villageId: PropTypes.number.isRequired,
    villagerCode: PropTypes.string.isRequired,
  }),
  onMount: PropTypes.func.isRequired,
}
