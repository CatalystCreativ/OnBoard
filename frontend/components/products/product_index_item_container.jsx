import { connect } from 'react-redux';
import { addFavorite } from '../../actions/favorite_actions';
import ProductItem from './product_index_item';

const msp = (product) => {
   return {
      product
   };
};

const mdp = dispatch => {
   return {
      addFavorite: productId => dispatch(addFavorite(productId)),
   };
};

export default connect(msp, mdp)(ProductItem);