import { connect } from 'react-redux';
import { NavBar } from './navbar'
import { logout } from '../../actions/session_actions';

const msp = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  }
};

const mdp = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(NavBar);