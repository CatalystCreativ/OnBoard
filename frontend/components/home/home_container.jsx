import { connect } from 'react-redux';
import { receiveProducts } from '../../actions/product_actions';
import Home from './home';

const msp = (state) => {
   const products = state.entities.products;
   const currentUser = state.session.currentUser;
   const searchFilters = state.entities.searchFilters
   return {
      products,
      currentUser,
      searchFilters
   }
}

const mdp = dispatch => {
   return {
      receiveProducts: searchFilters => dispatch(receiveProducts(searchFilters))
   }
}

export default connect(msp, mdp)(Home)