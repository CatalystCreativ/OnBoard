import { RECEIVE_FAVORITES, REMOVE_FAVORITE } from '../actions/favorite_actions';
import { RECEIVE_PRODUCT } from '../actions/product_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
   let newState;
   switch(action.type) {
      case RECEIVE_FAVORITES:
         if (action.favorites) {
            return action.favorites;
         } else {
            return state;
         }
      case REMOVE_FAVORITE:
         newState = state;
         delete newState[action.favoriteId];
         return newState;
      case RECEIVE_PRODUCT:
         return merge({}, state, {[action.product.id]: true});
      default:
         return state;
   }
}