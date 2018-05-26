import { handleActions } from 'redux-actions'

const initialState = {
  talks: []
}

export default handleActions({
  START_FETCH_TALKS: (state, action) => ({
    talks: []
  }),
  RECEIVE_TALKS: (state, action) => ({
    talks: action.payload
  }),
  RECEIVE_TALK: (state, action) => ({
    talks: [action.payload, ...state.talks,]
  })
}, initialState)
