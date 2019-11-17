import { connect } from 'react-redux';
import { logIn, logOut } from '../../actions/session_actions';
import NavBar from './navbar'; 

const msp = (entities) => {
   console.log()
   const currentUser = entities.session.currentUser;
   return {
      currentUser
   };
};

const mdp = dispatch => {
   return {
      logOut: () => dispatch(logOut()),
      logIn: user => dispatch(logIn(user))
   };
};

export default connect(msp, mdp)(NavBar)