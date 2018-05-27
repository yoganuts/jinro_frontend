import { handleActions } from 'redux-actions'

// FIXME: this is dummy data.
const initialState = {
  villageCode: null,
  villagerCode: null,
  villagerName: null,
  talkContent: null,

  villagerData: {},
  currentVillageId: null
}

export default handleActions({
  SELECT_VILLAGE: (state, action) => {
    let villagerData = Object.assign({}, state.villagerData)
    villagerData[action.payload] = { villageId: action.payload }
    return Object.assign({}, state, {
      villagerData: villagerData,
      currentVillageId: action.payload
    })
  },
  CHANGE_VILLAGER_NAME: (state, action) => Object.assign({}, state, {
    villagerName: action.payload
  }),
  FINISH_CREATE_VILLAGER: (state, action) => {
    let villagerData = Object.assign({}, state.villagerData)
    villagerData[state.currentVillageId] = Object.assign(villagerData[state.currentVillageId], {
      code: action.payload.code
    })
    return Object.assign({}, state, {
      villagerData: villagerData
    })
  },
  CHANGE_TALK_CONTENT: (state, action) => Object.assign({}, state, {
    talkContent: action.payload
  })
}, initialState)
