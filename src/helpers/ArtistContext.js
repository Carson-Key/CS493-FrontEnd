import React, {createContext, useReducer} from "react";
import ArtistReducers from './ArtistReducers.js';

const initialState = {
  artists: null,
}

const Store = ({children}) => {
  const [state, dispatch] = useReducer(ArtistReducers, initialState)
  return (
    <ArtistContext.Provider value={[state, dispatch]}>
      {children}
    </ArtistContext.Provider>
  )
}

export const ArtistContext = createContext(initialState)
export default Store
