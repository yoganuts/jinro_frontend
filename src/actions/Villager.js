import { createAction } from 'redux-actions'
import axios from 'axios'
import Cable from 'actioncable'
import humps from 'humps'

import * as userActions from './User'

const startFetchVillagers = createAction('START_FETCH_VILLAGERS')
const receiveVillagers = createAction('RECEIVE_VILLAGERS')
const receiveVillager = createAction('RECEIVE_VILLAGER')

export const fetchVillagers = (villageId) => {
  return async (dispatch, getState) => {
    dispatch(startFetchVillagers())
    axios.get(process.env.REACT_APP_API_HOST + `/villages/${villageId}/villagers`).then((response) => {
      dispatch(receiveVillagers(humps.camelizeKeys(response.data)))
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const createSocket = (villageId) => {
  return (dispatch, getState) => {
    let cable = Cable.createConsumer(process.env.REACT_APP_SOCKET_PATH)
    this.villagers = cable.subscriptions.create(humps.decamelizeKeys({
      channel: 'VillagerChannel',
      villageId: villageId
    }), {
      connected: () => {},
      received: (data) => {
        dispatch(receiveVillager(humps.camelizeKeys(data)))
      }
    })
  }
}

export const removeSocket = (villageId) => {
  return () => this.villagers.unsubscribe()
}

export const createVillager = (villageId, villagerName, villagerImageNo) => {
  return async (dispatch, getState) => {
    const params = humps.decamelizeKeys({
      villageId: villageId,
      name: villagerName,
      imageNo: villagerImageNo
    })
    axios.post(process.env.REACT_APP_API_HOST + `/villages/${villageId}/villagers`, params).then((response) => {
      dispatch(userActions.finishCreateVillager(humps.camelizeKeys(response.data)))
    }).catch((response) => {
      console.log(response)
    })
  }
}
