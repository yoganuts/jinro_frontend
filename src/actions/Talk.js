import { createAction } from 'redux-actions'
import axios from 'axios'
import Cable from 'actioncable'

const startFetchTalks = createAction('START_FETCH_TALKS')
const receiveTalks = createAction('RECEIVE_TALKS')
const receiveTalk = createAction('RECEIVE_TALK')

export const fetchTalks = (villageId) => {
  return async (dispatch, getState) => {
    dispatch(startFetchTalks())
    axios.get(process.env.REACT_APP_API_HOST + `/villages/${villageId}/talks`).then((response) => {
      dispatch(receiveTalks(response.data))
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const createSocket = (villageId) => {
  return (dispatch, getState) => {
    let cable = Cable.createConsumer(process.env.REACT_APP_SOCKET_PATH)
    this.talks = cable.subscriptions.create({
      channel: 'TalkChannel',
      village: villageId
    }, {
      connected: () => {},
      received: (data) => {
        dispatch(receiveTalk(data))
      },
      create: function(villagerCode, talkContent) {
        this.perform('create', {
          villagerCode: villagerCode,
          content: talkContent
        })
      }
    })
  }
}

export const createTalk = (villagerCode, talkContent) => {
  return () => {
    this.talks.create(villagerCode, talkContent)
  }
}
