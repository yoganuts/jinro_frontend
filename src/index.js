import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blueGrey from '@material-ui/core/colors/blueGrey'

import App from './App'
import createStore from './createStore'

const history = createBrowserHistory()
const store = createStore(history)

const theme = createMuiTheme({
  palette: {
    primary: blueGrey
  },
//  typography: {
//    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
//  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)
