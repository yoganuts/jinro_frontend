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
  RECEIVE_TALK: (state, action) => {
    const exist = state.talks.some(talk => talk.id === action.payload.id)
    return {
      talks: exist ? state.talks : [action.payload, ...state.talks]
    }
  }
}, initialState)
