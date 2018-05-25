import { handleActions } from 'redux-actions'

const initialState = {
  villages: []
}

export default handleActions({
  START_FETCH_VILLAGES: (state, action) => ({
    villages: []
  }),
  RECEIVE_VILLAGES: (state, action) => ({
    villages: action.payload
  }),
}, initialState)
