import {
   RECEIVE_PRODUCTS,
   RECEIVE_PRODUCT,
   REMOVE_PRODUCT
} from '../actions/product_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
   let newState;
   switch(action.type) {
      case RECEIVE_PRODUCTS:
         return action.products;
      case RECEIVE_PRODUCT:
         return merge({}, state, {[action.project.id]: action.project});
      case REMOVE_PRODUCT:
         newState = state;
         delete newState[action.productId];
         return newState;
      default:
         return state;
   }
}
