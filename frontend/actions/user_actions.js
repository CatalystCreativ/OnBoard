import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_USER = "RECEIVE_USER";

export const receiveUser = user => {
   return {
      type: RECEIVE_USER,
      user
   };
};

export const requestUser = id => dispatch => {
   return UserAPIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)));
};