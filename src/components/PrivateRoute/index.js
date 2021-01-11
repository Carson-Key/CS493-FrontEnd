import { Route } from 'react-router-dom';

const PrivateRoute = (props) => {
  const { path, children } = props

  return (
    <Route path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
