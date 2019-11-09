import {
   RECEIVE_ERRORS,
   REMOVE_ERRORS
} from '../actions/error_actions';

export default (state = [], action) => {
   switch (action.type) {
      case RECEIVE_ERRORS:
         return action.errors;
      case REMOVE_ERRORS:
         return [];
      default:
         return state;
   }
};