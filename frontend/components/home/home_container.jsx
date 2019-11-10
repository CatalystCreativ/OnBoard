import { connect } from 'react-redux';
import { receiveProducts } from '../../actions/product_actions';
import Home from './home';

const msp = (state) => {
   const products = state.entities.products;
   return {
      products
   }
}

const mdp = dispatch => {
   return {
      receiveProducts: filters => dispatch(receiveProducts(filters))
   }
}

export default connect(msp, mdp)(Home)