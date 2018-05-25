import React from 'react'
import PropTypes from 'prop-types'

import VillagerList from '../../containers/VillagerList'

export default function Village(props) {
  return (
    <div>
      <h2>Village</h2>
      <VillagerList villageId={props.match.params.villageId} />
    </div>
  )
}

Village.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      villageId: PropTypes.string.isRequired
    })
  })
}
