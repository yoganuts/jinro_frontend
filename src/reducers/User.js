import { handleActions } from 'redux-actions'

// FIXME: this is dummy data.
const initialState = {
  villagerData: {
    39: {
      villageId: 39,
      name: 'foo',
      code: 'TIC4Djz0CqOZil4Bf87EsA==',
      talkContent: ''
    },
    40: {
      villageId: 40,
      name: 'bar',
      code: 'TIC4Djz0CqOZil4Bf87EsA==',
      talkContent: ''
    }
  },
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
