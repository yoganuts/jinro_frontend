import { handleActions } from 'redux-actions'

const initialState = {
  villageId: null,
  villagerCode: null,
  villageName: null,
  villageImageNo: "0",
  villagerImageNo: "0",
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
  FINISH_CREATE_VILLAGER: (state, action) => {
    saveCode(action.payload.village_id, action.payload.code)
    return Object.assign({}, state, {
      villagerCode: action.payload.code
    })
  },
  CHANGE_VILLAGE_NAME: (state, action) => Object.assign({}, state, {
    villageName: action.payload
  }),
  CHANGE_VILLAGER_NAME: (state, action) => Object.assign({}, state, {
    villagerName: action.payload
  }),
  CHANGE_VILLAGE_IMAGE: (state, action) => Object.assign({}, state, {
    villageImageNo: action.payload
  }),
  CHANGE_VILLAGER_IMAGE: (state, action) => Object.assign({}, state, {
    villagerImageNo: action.payload
  }),
  CHANGE_TALK_CONTENT: (state, action) => Object.assign({}, state, {
    talkContent: action.payload
  })
}, initialState)
