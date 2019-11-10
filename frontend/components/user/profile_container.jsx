import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { fetchProducts } from '../../actions/product_actions';
import UserProfile from './profile';

const msp = ( state, ownProps ) => {
   const userId = state.entities.users[ownProps.match.params.userId];
   const products = {"surf": [], "skate": [], "snow": []};

   if (state.entities.products) {
      for (let i = 0; i < state.entities.products.length; i++) {
         const product = state.entities.products[i];
         if (product.userId === userId) {
            if (product.category === "surf") {
               products["surf"].push(product)
            } else if (product.category === "skate") {
               products["skate"].push(product)
            } else if (product.category === "snow") {
               products["snow"].push(product)
            }
         }
      }
   }

   return {
      userId,
      products
   };
};

const mdp = dispatch => {
   return {
      requestUser: id => dispatch(requestUser(id)),
      fetchProducts: filters => dispatch(fetchProducts(filters))
   };
};

export default connect(msp, mdp)(UserProfile);