import { combineReducers } from 'redux';
import users from './users_reducer';
import products from './products_reducer';
import favorites from './favorites_reducer';
import searchFilters from './search_filters_reducer';

export default combineReducers({
   users,
   products,
   favorites,
   searchFilters
});