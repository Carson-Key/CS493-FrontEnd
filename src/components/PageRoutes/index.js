import { Switch, Route } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import SignUp from '../../pages/SignUp';
import SignIn from '../../pages/SignIn';
import LoggedIn from '../../pages/LoggedIn';
import Artist from '../../pages/Artist';

const PageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SignIn />
      </Route>
      <Route path="/signup">
        <SignUp />
      </Route>
      <PrivateRoute path="/dashboard">
        <LoggedIn />
      </PrivateRoute>
      <PrivateRoute path="/artist/:artist">
        <Artist />
      </PrivateRoute>
    </Switch>
  );
}

export default PageRoutes;
