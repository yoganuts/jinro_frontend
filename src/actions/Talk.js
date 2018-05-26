import { createAction } from 'redux-actions'
import axios from 'axios'

const startFetchTalks = createAction('START_FETCH_TALKS')
const receiveTalks = createAction('RECEIVE_TALKS')

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
