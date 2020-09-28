import { LOGIN_SUCCESS, LOGOUT_SUCCESS, UserActionType } from './types';
import { UserObject } from '../types';


export type UserState = UserObject | null;

const initialState: UserState = null;

const userReducer = (state= initialState, action: UserActionType): UserState => {
  switch(action.type){
    case LOGIN_SUCCESS:
      return action.payload;
    case LOGOUT_SUCCESS:
      return initialState
    default:
      return state
  }
}

export default userReducer;