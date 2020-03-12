import { 
  RECEIVE_REQUESTS, 
  RECEIVE_REQUEST 
} from "../actions/request_actions";

const requestReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_REQUESTS:
      return Object.assign({}, action.requests);
    case RECEIVE_REQUEST:
      nextState[action.request.id] = action.request
      return nextState;
    default:
      return state;
  }
}

export default requestReducer;