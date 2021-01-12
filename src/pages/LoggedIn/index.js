import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { AuthContext } from '../../helpers/AuthContext.js';

const LoggedIn = () => {
  const [state, dispatch] = useContext(AuthContext)
  const history = useHistory()

  const logOut = () => {
    dispatch({type: 'SET_USER', payload: null})
    dispatch({type: 'SET_AUTHSTATE_UNAUTH'})
    history.push(`/`)
  }

  return (
    <Container className="flex flex-col flex-wrap content-center justify-center mt-33pr h-33pr mx-33pr">
      <p>User Details</p>
      <p>Email: {state.user.email}</p>
      <Button black onClick={logOut}>Log Out</Button>
    </Container>
  );
}

export default LoggedIn;
