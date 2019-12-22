import { RECEIVE_TAGS, REMOVE_TAGS } from '../actions/search_filter_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
   let newState;
   switch(action.type) {
      case RECEIVE_SEARCH_FILTERS:
         if (action.searchFilters) {
            return action.searchFilters;
         } else {
            return state;
         }
      case REMOVE_SEARCH_FILTERS:
         return {};
      default:
         return state;
   }
}
