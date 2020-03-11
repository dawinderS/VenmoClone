import { connect } from 'react-redux';
import SignupForm from './signup_form';
import { signup, receiveSessionErrors } from '../../actions/session_actions';

const msp = (state) => ({
  errors: state.errors.session
})

const mdp = (dispatch) => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(receiveSessionErrors())
})

const SignupFormContainer = connect(msp, mdp)(SignupForm);
export default SignupFormContainer;