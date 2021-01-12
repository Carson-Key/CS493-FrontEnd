import React, {createContext, useReducer} from "react";
import AuthReducer from './AuthReducer.js';
import { authStates } from './authHelpers.js';

const initialState = {
  user: null,
  authState: authStates.unAuthorized
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState)
  return (
    <AuthContext.Provider value={[state, dispatch]}>
      {children}
    </AuthContext.Provider>
  )
}

export const AuthContext = createContext(initialState)
export default Store
