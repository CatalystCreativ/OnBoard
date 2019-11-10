import * as UserAPIUtil from '../util/user_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

export const receiveUser = user => {
   return {
      type: RECEIVE_USER,
      user
   };
};

export const requestUser = user => dispatch => {
   return UserAPIUtil.fetchUser(user).then(user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateUser = data => dispatch => {
   return UserAPIUtil.updateUser(data).then(user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)));
};

export const updateUserPhoto = data => dispatch => {
   return UserAPIUtil.updateUserPhoto(data).then(user => dispatch(receiveUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)));
};

const removeUser = id => {
   return {
      type: REMOVE_USER,
      userId: id
   };
};

export const deleteUser = id => dispatch => {
   return UserAPIUtil.deleteUser(id).then(() => dispatch(removeUser(id)),
      err => dispatch(receiveErrors(err.responseJSON)));
};