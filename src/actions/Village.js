import { createAction } from 'redux-actions'

const startFetchVillages = createAction('START_FETCH_VILLAGES')
const receiveVillages = createAction('RECEIVE_VILLAGES')

export const fetchVillages = () => {
  return async (dispatch, getState) => {
    dispatch(startFetchVillages())
    dispatch(receiveVillages())
  }
}
