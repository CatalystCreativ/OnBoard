import { RECEIVE_FAVORITES, REMOVE_FAVORITE, RECEIVE_FAVORITE } from '../actions/favorite_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
   let newState;
   switch(action.type) {
      case RECEIVE_FAVORITES:
         if (action.favorites) {
            return action.favorites; //object formatted with favorite Ids pointing to null values
         } else {
            return state;
         }
      case RECEIVE_FAVORITE:
         return merge({}, state, { [action.product.id]: true });
      case REMOVE_FAVORITE:
         newState = state;
         delete newState[action.favoriteId];
         return newState;
      default:
         return state;
   }
}