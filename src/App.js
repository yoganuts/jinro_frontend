import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './pages/Home'
import Village from './pages/Village'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Jinro Game</h1>
        <Route exact path="/" component={Home} />
        <Route path="/villages/:villageId" component={Village} />
      </div>
    )
  }
}
