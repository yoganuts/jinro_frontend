import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home'
import Village from './pages/Village'

export default class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/villages/:villageId" component={Village} />
      </div>
    )
  }
}
