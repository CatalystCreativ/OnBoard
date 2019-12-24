import { connect } from 'react-redux';
import ProductIndex from './product_index';
import { requestProducts } from '../../actions/product_actions';

const msp = (state) => {
   const products = state.entities.products;

   return {
      products,
      currentUserId: state.session.currentUser.id
   };
};

const mdp = dispatch => {
   return {
      requestProducts: (id, searchFilters) => dispatch(requestProducts(id, searchFilters))
   }
}

export default connect(msp, mdp)(ProductIndex);