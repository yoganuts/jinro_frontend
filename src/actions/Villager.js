import { createAction } from 'redux-actions'
import axios from 'axios'

const startFetchVillagers = createAction('START_FETCH_VILLAGERS')
const receiveVillagers = createAction('RECEIVE_VILLAGERS')

export const fetchVillagers = (villageId) => {
  return async (dispatch, getState) => {
    dispatch(startFetchVillagers())
    axios.get(process.env.REACT_APP_API_HOST + `/villages/${villageId}/villagers`).then((response) => {
      dispatch(receiveVillagers(response.data))
    }).catch((response) => {
      console.log(response)
    })
  }
}
