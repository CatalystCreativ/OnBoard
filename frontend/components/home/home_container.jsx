import { connect } from 'react-redux';
import { receiveProducts } from '../../actions/product_actions';
import Home from './home';

const msp = (state) => {
   const products = {"surf": [], "skate": [], "snow": []};
   const currentUser = state.session.currentUser;

   if ( state.entities.products ) {
      for (let i = 0; i < state.entities.products.length; i++) {
         const product = state.entities.products[i];

         if (product.category === "surf") {
            products["surf"].push(product);
         } else if (product.category === "skate") {
            products["skate"].push(product);
         } else if (product.category === "snow") {
            products["snow"].push(product);
         }
      }
   }

   return {
      products,
      currentUser
   }
}

const mdp = dispatch => {
   return {
      receiveProducts: tags => dispatch(receiveProducts(tags))
   }
}

export default connect(msp, mdp)(Home)