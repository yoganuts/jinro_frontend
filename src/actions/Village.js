import { createAction } from 'redux-actions'
import axios from 'axios'

const startFetchVillages = createAction('START_FETCH_VILLAGES')
const receiveVillages = createAction('RECEIVE_VILLAGES')
const startFetchVillage = createAction('START_FETCH_VILLAGE')
const receiveVillage = createAction('RECEIVE_VILLAGE')

export const fetchVillages = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchVillages())
    axios.get(process.env.REACT_APP_API_HOST + '/villages').then((response) => {
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
