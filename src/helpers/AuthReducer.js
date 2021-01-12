import { authStates } from './authHelpers.js';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      }
    case 'SET_AUTHSTATE_UNAUTH':
      return {
        ...state,
        authState: authStates.unAuthorized
      }
    case 'SET_AUTHSTATE_AUTH':
      return {
        ...state,
        authState: authStates.authorized
      }
    case 'SET_AUTHSTATE_LOAD':
      return {
        ...state,
        authState: authStates.loading
      }
    default:
      return state
  }
}

export default AuthReducer
