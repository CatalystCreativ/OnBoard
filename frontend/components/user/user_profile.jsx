import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import Feed from './feed';
import ProductIndexContainer from '../products/product_index_container';

class UserProfile extends React.Component {
   constructor(props) {
      super(props);
      this.currentUser = this.props.currentUser;
      this.user = this.props.user;
      this.userId = this.props.userId;
      this.products = this.props.products;
      this.favorites = this.props.favorites;
      this.requestUser = this.props.requestUser;
      this.requestProducts = this.props.requestProducts;
      this.requestFavorites = this.props.requestFavorites;
   }

   componentDidMount() {
      const currentUser = this.currentUser;
      const userId = this.props.userId;

      this.requestUser( userId );
      this.requestProducts({ userId });
      
      if ( this.currentUser === userId ) {
         this.requestFavorites( currentUser );
      }
   }

   render() {
      let user = this.user;
      let username = "";
      let email = "";
      let bio = "";
      // let rating; need to implement rating table

      if ( user ) {
         username = user.username;
         email = user.email;
         bio = user.bio;
      }
      // rating = user.rating; need to implement rating backend for associating ratings with users and averaging

      let surf = "";
      let skate = "";
      let snow = "";

      const surfProducts = this.products["surf"];

      if ( surfProducts.length ) {
         // surf = surfProducts.map(( surfboard, idx ) => {
         //    return (
         //       <div key={`surfboard-${idx}`}>
         //          <ProductItemContainer product={ surfboard } />
         //       </div>
         //    )
         // });

         surf = (
            <ProductIndexContainer products={ surf }></ProductIndexContainer>
         )
      }

      const skateProducts = this.products["skate"];

      if ( skateProducts.length ) {
         // skate = skateProducts.map(( skateboard, idx ) => {
         //    return (
         //       <div key={`skateboard-${idx}`}>
         //          <ProductItemContainer product={ skateboard } />
         //       </div>
         //    )
         // });

         skate = <ProductIndexContainer products={ skate }></ProductIndexContainer>
      }

      const snowProducts = this.products["snow"];

      if ( snowProducts.length ) {
         // snow = snowProducts.map(( snowboard, idx ) => {
         //    return (
         //       <div key={`snowboard-${idx}`}>
         //          <ProductItemContainer product={ snowboard } />
         //       </div>
         //    )
         // });

         snow = <ProductIndexContainer products={ snow }></ProductIndexContainer>
      }

      let favorites = this.favorites;
      
      return (
         <>
            <div className="">
               <div className="avatar">Large Avatar</div>
               <ul>
                  <li>{ username }</li>
                  <li>{ email }</li>
                  <li>{ bio }</li>
               </ul>
               <ul>
                  <li>{ surf }</li>
                  <li>{ skate }</li>
                  <li>{ snow }</li>
               </ul>
               <ul>
                  { favorites }
               </ul>
            </div>
         </>
      )
   }
}

export default UserProfile;