import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Splash from './containers/Splash'
import HomePage from './containers/HomePage'
import VillagePage from './containers/VillagePage'
import VillagerPage from './containers/VillagerPage'

import './App.css'

export default function App() {
  const publicUrl = process.env.REACT_APP_PUBLIC_URL
  return (
    <Fragment>
      <Route exact path={`${publicUrl}/`} component={Splash} />
      <Route exact path={`${publicUrl}/`} component={HomePage} />
      <Route exact path={`${publicUrl}/villages/:villageId`} component={VillagePage} />
      <Route exact path={`${publicUrl}/villages/:villageId/villagers`} component={VillagerPage} />
    </Fragment>
  )
}
