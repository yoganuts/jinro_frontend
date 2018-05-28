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
  RECEIVE_VILLAGER: (state, action) => {
    const exist = state.villagers.some(villager => villager.id === action.payload.id)
    return {
      villagers: exist ? state.villagers : [...state.villagers, action.payload]
    }
  }
}, initialState)
