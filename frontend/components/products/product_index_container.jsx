import { connect } from 'react-redux';
import ProductIndex from './product_index';

const msp = (state) => {
   const products = state.entities.products;
   return {
      products
   };
};

export default connect(msp, null)(ProductIndex);