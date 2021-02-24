const ArtistReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ARTISTS':
      return {
        ...state,
        artists: action.payload
      }
    default:
      return state
  }
}

export default ArtistReducer
