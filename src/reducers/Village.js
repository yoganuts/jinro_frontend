import { handleActions } from 'redux-actions'

const initialState = {
  villages: [],
  village: {}
}

export default handleActions({
  START_FETCH_VILLAGES: (state, action) => Object.assign({}, state, {
    villages: []
  }),
  RECEIVE_VILLAGES: (state, action) => Object.assign({}, state, {
    villages: action.payload
  }),
  START_FETCH_VILLAGE: (state, action) => Object.assign({}, state, {
    village: {}
  }),
  RECEIVE_VILLAGE: (state, action) => Object.assign({}, state, {
    village: action.payload
  })
}, initialState)
