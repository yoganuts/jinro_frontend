import { handleActions } from 'redux-actions'

// FIXME: this is dummy data.
const initialState = {
  villagerData: {
    39: {
      id: 178,
      code: 'TIC4Djz0CqOZil4Bf87EsA==',
      talkContent: ''
    },
  },
  currentVillageId: null
}

export default handleActions({
  CHANGE_TALK_CONTENT: (state, action) => {
    const villagerData = Object.assign({}, state.villagerData[state.currentVillageId], {
      talkContent: action.payload
    })
    return (Object.assign({}, state, {
      villagerData: {
        [state.currentVillageId]: villagerData
      }
    }))
  },
  SELECT_VILLAGE: (state, action) => (Object.assign({}, state, {
    currentVillageId: action.payload
  }))
}, initialState)
