import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'
import VillageList from './containers/VillageList'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Jinro Game</h1>
        <Route path="/" component={Home} />
        <Route path="/" component={VillageList} />
      </div>
    )
  }
}
