import { createAction } from 'redux-actions'

export const changeVillagerName = createAction('CHANGE_VILLAGER_NAME')
export const changeTalkContent = createAction('CHANGE_TALK_CONTENT')
export const selectVillage = createAction('SELECT_VILLAGE')
export const finishCreateVillager = createAction('FINISH_CREATE_VILLAGER')
