import { handleActions } from 'redux-actions'

// FIXME: this is dummy data.
const initialState = {
  villagerData: {
    39: {
      code: 'TIC4Djz0CqOZil4Bf87EsA==',
      talkContent: ''
    }
  }
}

export default handleActions({
  CHANGE_TALK_CONTENT: (state, action) => {
    // FIXME
    return ({
      villagerData: {
        39: {
          code: 'TIC4Djz0CqOZil4Bf87EsA==',
          talkContent: action.payload
        }
      }
    })
  }
}, initialState)
