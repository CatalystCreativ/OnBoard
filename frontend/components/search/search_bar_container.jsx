import { connect } from 'react-redux';
import { receiveTags, removeTags } from '../../actions/tag_actions';
import SearchBar from './search_bar'; 

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

export default connect(msp, mdp)(SearchBar)