import { connect } from 'react-redux';
import ProductIndex from './product_index';

const msp = (products) => {
   return {
      products
   };
};

export default connect(msp, null)(ProductIndex);