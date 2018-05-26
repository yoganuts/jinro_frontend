import { handleActions } from 'redux-actions'

// FIXME: this is dummy data.
const initialState = {
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
  CHANGE_VILLAGER_NAME: (state, action) => {
    let villagerData = Object.assign({}, state.villagerData)
    villagerData[state.currentVillageId] = Object.assign(villagerData[state.currentVillageId], {
      name: action.payload
    })
    return Object.assign({}, state, {
      villagerData: villagerData
    })
  },
  FINISH_CREATE_VILLAGER: (state, action) => {
    let villagerData = Object.assign({}, state.villagerData)
    villagerData[state.currentVillageId] = Object.assign(villagerData[state.currentVillageId], {
      code: action.payload.code
    })
    return Object.assign({}, state, {
      villagerData: villagerData
    })
  },
  CHANGE_TALK_CONTENT: (state, action) => {
    let villagerData = Object.assign({}, state.villagerData)
    villagerData[state.currentVillageId] = Object.assign(villagerData[state.currentVillageId], {
      talkContent: action.payload
    })
    return Object.assign({}, state, {
      villagerData: villagerData
    })
  }
}, initialState)
