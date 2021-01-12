import { useEffect, useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../helpers/AuthContext.js'
import { authStates } from '../../helpers/authHelpers.js';

const PrivateRoute = (props) => {
  const [state, dispatch] = useContext(AuthContext)
  const { path, children } = props

  useEffect(() => {
    console.log(state.user)
    console.log(state.authState)
  }, [state.user, state.authState])

  return (
    <Route
      path={path}
      render={() =>
        state.user && state.authState === authStates.authorized ? (
          children
        ) : (
          <Redirect
            to="/"
          />
        )
      }
    />
  );
}

export default PrivateRoute;
