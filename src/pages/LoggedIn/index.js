import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { AuthContext } from '../../helpers/AuthContext.js';
import Page from '../../components/Page';

const LoggedIn = () => {
  const [state, dispatch] = useContext(AuthContext)
  const history = useHistory()

  const logOut = () => {
    dispatch({type: 'SET_USER', payload: null})
    dispatch({type: 'SET_AUTHSTATE_UNAUTH'})
    history.push(`/`)
  }

  return (
    <Page>
      <div className="flex w-screen justify-between py-4 px-6 bg-white">
        <p></p>
        <p className="text-2xl">Artists</p>
        <Button black onClick={logOut}>Log Out</Button>
      </div>
      <Container className="flex flex-col flex-wrap content-center justify-center mt-33pr h-33pr mx-33pr">
        <div>
          <p>User Details</p>
          <p className="my-6">Email: {state.user.email}</p>
        </div>
      </Container>
    </Page>
  );
}

export default LoggedIn;
