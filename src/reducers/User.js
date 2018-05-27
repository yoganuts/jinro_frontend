import { handleActions } from 'redux-actions'

const initialState = {
  villageId: null,
  villagerCode: null,
  villagerName: null,
  talkContent: null
}

const saveCode = (villageId, villagerCode) => {
  let codes = JSON.parse(localStorage.getItem('villager_codes')) || {}
  codes[villageId] = villagerCode
  localStorage.setItem('villager_codes', JSON.stringify(codes))
}
const retrieveCode = (villageId) => {
  const codes = JSON.parse(localStorage.getItem('villager_codes')) || {}
  return codes.hasOwnProperty(villageId) ? codes[villageId] : null
}

export default handleActions({
  SELECT_VILLAGE: (state, action) => Object.assign({}, state, {
    villageId: action.payload,
    villagerCode: retrieveCode(action.payload),
    villagerName: null,
    talkContent: null
  }),
  CHANGE_VILLAGER_NAME: (state, action) => Object.assign({}, state, {
    villagerName: action.payload
  }),
  FINISH_CREATE_VILLAGER: (state, action) => {
    saveCode(action.payload.village_id, action.payload.code)
    return Object.assign({}, state, {
      villagerCode: action.payload.code
    })
  },
  CHANGE_TALK_CONTENT: (state, action) => Object.assign({}, state, {
    talkContent: action.payload
  })
}, initialState)
