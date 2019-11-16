import { connect } from 'react-redux';
import { requestUser } from '../../actions/user_actions';
import UserSettings from './settings'; 

const msp = ({ session }) => {
   console.log('current user ', );
   return {
      currentUser: session.currentUser
   };
};

const mdp = dispatch => {
   return {
      requestUser: () => dispatch(requestUser()),
   };
};

export default connect(msp, mdp)(UserSettings)