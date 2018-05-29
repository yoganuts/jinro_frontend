import { createAction } from 'redux-actions'
import axios from 'axios'
import Cable from 'actioncable'

import * as userActions from './User'

const startFetchVillages = createAction('START_FETCH_VILLAGES')
const receiveVillages = createAction('RECEIVE_VILLAGES')
const startFetchVillage = createAction('START_FETCH_VILLAGE')
const receiveVillage = createAction('RECEIVE_VILLAGE')

export const fetchVillages = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchVillages())
    axios.get(process.env.REACT_APP_API_HOST + '/villages?q[s]=created_at+desc').then((response) => {
      dispatch(receiveVillages(response.data))
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const fetchVillage = (villageId) => {
  return async (dispatch, getState) => {
    dispatch(startFetchVillage())
    axios.get(process.env.REACT_APP_API_HOST + `/villages/${villageId}`).then((response) => {
      dispatch(receiveVillage(response.data))
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const createSocket = () => {
  return (dispatch, getState) => {
    let cable = Cable.createConsumer(process.env.REACT_APP_SOCKET_PATH)
    this.villager = cable.subscriptions.create({
      channel: 'VillageChannel'
    }, {
      connected: () => {},
      received: (data) => {
        dispatch(receiveVillage(data))
      }
    })
  }
}

export const createVillage = (villageName, villagerName, villageImageNo, villagerImageNo) => {
  return async (dispatch, getState) => {
    const params = {
      name: villageName,
      image_no: villageImageNo,
      villagers_attributes: [{ name: villagerName, image_no: villagerImageNo }]
    }
    axios.post(process.env.REACT_APP_API_HOST + `/villages`, params).then((response) => {
      dispatch(userActions.finishCreateVillager(response.data.villagers[0]))
    }).catch((response) => {
      console.log(response)
    })
  }
}
