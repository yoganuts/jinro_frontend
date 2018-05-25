import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Home from './components/Home'

export default class App extends Component {
  render () {
    return (
      <div>
        <h1>Jinro Game</h1>
        <Route path="/" component={Home} />
      </div>
    )
  }
}
