import { createAction } from 'redux-actions'
import axios from 'axios'
import Cable from 'actioncable'
import qs from 'qs'

import * as userActions from './User'

const startFetchVillages = createAction('START_FETCH_VILLAGES')
const receiveVillages = createAction('RECEIVE_VILLAGES')
const receiveVillage = createAction('RECEIVE_VILLAGE')
const startSelectVillage = createAction('START_SELECT_VILLAGE')
const setVillage = createAction('SET_VILLAGE')

export const fetchVillages = (params) => {
  return async (dispatch, getState) => {
    dispatch(startFetchVillages())
    const q = qs.stringify({ q: params })
    axios.get(process.env.REACT_APP_API_HOST + `/villages?${q}`).then((response) => {
      dispatch(receiveVillages(response.data))
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const selectVillage = (villageId) => {
  return async (dispatch, getState) => {
    dispatch(startSelectVillage())
    axios.get(process.env.REACT_APP_API_HOST + `/villages/${villageId}`).then((response) => {
      dispatch(setVillage(response.data))
    }).catch((response) => {
      console.log(response)
    })
  }
}

export const createSocket = () => {
  return (dispatch, getState) => {
    let cable = Cable.createConsumer(process.env.REACT_APP_SOCKET_PATH)
    this.villages = cable.subscriptions.create({
      channel: 'VillageChannel'
    }, {
      connected: () => {},
      received: (data) => {
        dispatch(receiveVillage(data))
      }
    })
  }
}

export const removeSocket = () => {
  return () => this.villages.unsubscribe()
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
