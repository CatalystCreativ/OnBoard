import { connect } from 'react-redux';
import { receiveTags, removeTags } from '../../actions/tag_actions';
import SearchWithFilters from './search_with_filters'; 

const msp = (state) => {
   let tags = state.entities.tags;
   return {
       tags
   };
};

const mdp = dispatch => {
   return {
      receiveTags: tags => dispatch(receiveTags(tags)),
      removeTags: () => dispatch(removeTags())
   };
};

export default connect(msp, mdp)(SearchWithFilters)