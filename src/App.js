import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import VillagePage from './containers/VillagePage'
import Splash from './components/Splash'

import './App.css'

export default class App extends Component {
  render () {
    return (
      <div>
        <Route exact path={`${process.env.REACT_APP_PUBLIC_URL}/`} component={Splash} />
        <Header />
        <Route exact path={`${process.env.REACT_APP_PUBLIC_URL}/`} component={HomePage} />
        <Route path={`${process.env.REACT_APP_PUBLIC_URL}/villages/:villageId`} component={VillagePage} />
      </div>
    )
  }
}
