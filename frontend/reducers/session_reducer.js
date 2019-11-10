import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';

const sessionReducer = (state = { id: null }, action) => {
   console.log('hitting session with ', action)
   switch (action.type) {
      case RECEIVE_CURRENT_USER:
         return { currentUser: action.currentUser };
      case LOGOUT_CURRENT_USER:
         return { currentUser: null };
      default:
         return state;
   }
};

export default sessionReducer;