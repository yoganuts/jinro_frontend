import { createAction } from 'redux-actions'
import axios from 'axios'
import Cable from 'actioncable'
import qs from 'qs'
import humps from 'humps'

import * as userActions from './User'

const startFetchTalks = createAction('START_FETCH_TALKS')
const receiveTalks = createAction('RECEIVE_TALKS')
const receiveTalk = createAction('RECEIVE_TALK')

export const fetchTalks = (villageId) => {
  return async (dispatch, getState) => {
    dispatch(startFetchTalks())
    const q = qs.stringify(humps.decamelizeKeys({ q: { s: 'created_at+desc' } }))
    axios.get(process.env.REACT_APP_API_HOST + `/villages/${villageId}/talks?${q}`).then((response) => {
      dispatch(receiveTalks(humps.camelizeKeys(response.data)))
      dispatch(userActions.setScrollBottom())
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const createSocket = (villageId) => {
  return (dispatch, getState) => {
    let cable = Cable.createConsumer(process.env.REACT_APP_SOCKET_PATH)
    this.talks = cable.subscriptions.create(humps.decamelizeKeys({
      channel: 'TalkChannel',
      villageId: villageId
    }), {
      connected: () => {},
      received: (data) => {
        dispatch(receiveTalk(humps.camelizeKeys(data)))
        dispatch(userActions.setScrollBottom())
      },
      create: function(villageId, villagerCode, talkContent) {
        this.perform('create', humps.decamelizeKeys({
          villageId: villageId,
          villagerCode: villagerCode,
          content: talkContent,
        }))
      }
    })
  }
}

export const removeSocket = (villageId) => {
  return () => this.talks.unsubscribe()
}

export const createTalk = (villageId, villagerCode, talkContent) => {
  return () => {
    this.talks.create(villageId, villagerCode, talkContent)
  }
}
