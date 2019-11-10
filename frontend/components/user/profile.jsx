import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Feed from './feed';

class UserProfile extends React.Component {
   constructor(props) {
      super(props);
      this.requestUser = this.props.requestUser.bind(this);
      this.fetchProducts = this.props.fetchProducts.bind(this);
   }

   componentDidMount() {
      const userId = this.props.match.params.userId
      this.requestUser( userId );
      this.fetchProducts({ userId });
   }

   render() {
      let username;
      let email;
      let bio;

      if (this.props.user) {
         username = this.props.user.username;
         email = this.props.user.email;
         bio = this.props.user.bio;
      }

      let surf;
      let skate;
      let snow;

      if (this.props.products["surf"]) {
         surf = this.props.products["surf"].map((surfboard, idx) => {
            return (
               <div key={`surfboard-${idx}`}>
                  <ProductContainer product={ surfboard } />
               </div>
            )
         });
      }

      if (this.props.products["skate"]) {
         skate = this.props.products["skate"].map((skateboard, idx) => {
            return (
               <div key={`skateboard-${idx}`}>
                  <ProductContainer product={ skateboard } />
               </div>
            )
         });
      }

      if (this.props.products["snow"]) {
         snow = this.props.products["snow"].map((snowboard, idx) => {
            return (
               <div key={`snowboard-${idx}`}>
                  <ProductContainer product={ snowboard } />
               </div>
            )
         });
      }
      
      return (
         <>
            <div className="">
               <div className="avatar">Large Avatar</div>
               <ul>
                  <li>{username}</li>
                  <li>{email}</li>
                  <li>{bio}</li>
               </ul>
               <ul>
                  <li>{ surf }</li>
                  <li>{ skate }</li>
                  <li>{ snow }</li>
               </ul>
            </div>
         </>
      )
   }
}

export default UserProfile;