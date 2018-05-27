import { handleActions } from 'redux-actions'

// FIXME: this is dummy data.
const initialState = {
  villageId: null,
  villagerCode: null,
  villagerName: null,
  talkContent: null
}

export default handleActions({
  SELECT_VILLAGE: (state, action) => Object.assign({}, state, {
    villageId: action.payload,
    villagerName: null,
    talkContent: null
  }),
  CHANGE_VILLAGER_NAME: (state, action) => Object.assign({}, state, {
    villagerName: action.payload
  }),
  FINISH_CREATE_VILLAGER: (state, action) => Object.assign({}, state, {
    villagerCode: action.payload.code
  }),
  CHANGE_TALK_CONTENT: (state, action) => Object.assign({}, state, {
    talkContent: action.payload
  })
}, initialState)
