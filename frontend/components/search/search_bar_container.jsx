import { connect } from 'react-redux';
import { receiveSearchFilters, removeSearchFilters } from '../../actions/search_filter_actions';
import SearchBar from './search_bar'; 

const msp = (state) => {
   let searchFilters = state.entities.searchFilters;
   return {
       searchFilters
   };
};

const mdp = dispatch => {
   return {
      receiveSearchFilters: searchFilters => dispatch(receiveSearchFilters(SearchFilters)),
      removeSearchFilters: () => dispatch(removeSearchFilters())
   };
};

export default connect(msp, mdp)(SearchBar);