import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';

const usersReducer = (state = {}, action) => {
   switch(action.type) {
      case RECEIVE_USER:
         return merge({}, state, {[action.user.id]: action.user});
      case RECEIVE_CURRENT_USER:
         return merge({}, state, {[action.currentUser.id]: action.currentUser});
      case RECEIVE_ERRORS:
         return action.errors
      default:
         return state;
   }
}

export default usersReducer;