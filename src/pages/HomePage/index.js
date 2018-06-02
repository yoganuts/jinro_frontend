import React, { Fragment } from 'react'

import Header from '../../components/Header'
import VillageList from '../../containers/VillageList'
import VillageForm from '../../containers/VillageForm'

export default function HomePage(props) {
  return (
    <Fragment>
      {props.user.initialized &&
        <Fragment>
          <Header />
          <VillageForm />
          <VillageList />
        </Fragment>
      }
    </Fragment>
  )
}
