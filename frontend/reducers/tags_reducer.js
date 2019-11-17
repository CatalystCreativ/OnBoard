import { RECEIVE_TAGS, REMOVE_TAGS } from '../actions/tag_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
   let newState;
   switch(action.type) {
      case RECEIVE_TAGS:
         if (action.favorites) {
            return action.favorites; //object formatted with favorite Ids pointing to null values
         } else {
            return state;
         }
      case REMOVE_TAGS:
         return merge({}, state, { [action.product.id]: true });
      default:
         return state;
   }
}
