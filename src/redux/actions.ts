import { LOGIN_SUCCESS, LOGOUT_SUCCESS, UserActionType } from './types';
import { UserObject } from '../types';

//Crear el action 

export const loginSuccess = (obj: UserObject): UserActionType => ({
  type: LOGIN_SUCCESS,
  payload: obj
})

export const logoutSuccess = (): UserActionType => ({
  type: LOGOUT_SUCCESS
})
