import React from 'react'

import VillagerList from '../../containers/VillagerList'

export default function Village(props) {
  return (
    <div>
      <h2>Village</h2>
      <VillagerList villageId={props.match.params.villageId} />
    </div>
  )
}
