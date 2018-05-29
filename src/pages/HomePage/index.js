import React from 'react'

import VillageList from '../../containers/VillageList'
import VillageForm from '../../containers/VillageForm'

export default function HomePage(props) {
  return (
    <div>
      <VillageForm />
      <VillageList />
    </div>
  )
}
