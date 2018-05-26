import { handleActions } from 'redux-actions'

const initialState = {
  villagers: []
}

export default handleActions({
  START_FETCH_VILLAGERS: (state, action) => ({
    villagers: []
  }),
  RECEIVE_VILLAGERS: (state, action) => ({
    villagers: action.payload
  }),
  RECEIVE_VILLAGER: (state, action) => ({
    villagers: [...state.villagers, action.payload]
  })
}, initialState)
