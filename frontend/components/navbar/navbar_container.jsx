import { connect } from 'react-redux';
import { logIn, logOut } from '../../actions/session_actions';
import NavBar from './navbar'; 

const msp = ({ session, entities: { users } }) => {
   return {
      currentUser: users[session.id]
   };
};

const mdp = dispatch => {
   return {
      logOut: () => dispatch(logOut()),
      logIn: user => dispatch(logIn(user))
   };
};

export default connect(msp, mdp)(NavBar)