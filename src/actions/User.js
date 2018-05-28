import { createAction } from 'redux-actions'

export const changeVillageName = createAction('CHANGE_VILLAGE_NAME')
export const changeVillagerName = createAction('CHANGE_VILLAGER_NAME')
export const changeVillageImage = createAction('CHANGE_VILLAGE_IMAGE')
export const changeVillagerImage = createAction('CHANGE_VILLAGER_IMAGE')
export const changeTalkContent = createAction('CHANGE_TALK_CONTENT')
export const selectVillage = createAction('SELECT_VILLAGE')
export const finishCreateVillager = createAction('FINISH_CREATE_VILLAGER')
