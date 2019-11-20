import { connect } from 'react-redux';
import { receiveSearchFilters, removeSearchFilters } from '../../actions/search_filter_actions';
import SearchWithFilters from './search_with_filters'; 

const msp = (state) => {
   let searchFilters = state.entities.searchFilters;
   return {
       searchFilters
   };
};

const mdp = dispatch => {
   return {
      receiveSearchFilters: searchFilters => dispatch(receiveSearchFilters(searchFilters)),
      removeSearchFilters: () => dispatch(removeSearchFilters())
   };
};

export default connect(msp, mdp)(SearchWithFilters)