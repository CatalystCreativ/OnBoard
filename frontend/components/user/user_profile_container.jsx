import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import { requestProducts } from '../../actions/product_actions';
import { requestFavorites } from '../../actions/favorite_actions';
import UserProfile from './user_profile';

const msp = ( state, ownProps ) => {
   const currentUser = state.session.currentUser;
   const userId = ownProps.match.params.userId;
   const user = state.entities.users[userId];
   const favoriteIds = state.entities.favorites;

   const products = {"surf": [], "skate": [], "snow": []};
   let favorites = "";

   if ( currentUser === userId ) {
      favorites = [];
   }

   if ( state.entities.products ) {

      for (let i = 0; i < state.entities.products.length; i++) {
         const product = state.entities.products[i];

         if (product.userId === userId) {
            if (product.category === "surf") {
               products["surf"].push(product);
            } else if (product.category === "skate") {
               products["skate"].push(product);
            } else if (product.category === "snow") {
               products["snow"].push(product);
            }
         }

         if ( favorites ) {
            if ( favoriteIds[product.id] ) {
               favorites.push(product);
            }
         }
      }
   }

   return {
      user,
      userId,
      products,
      currentUser,
      favorites
   };
};

const mdp = dispatch => {
   return {
      requestUser: id => dispatch(requestUser(id)),
      requestProducts: filters => dispatch(requestProducts(filters)),
      requestFavorites: userId => dispatch(requestFavorites(userId))
   };
};

export default connect(msp, mdp)(UserProfile);