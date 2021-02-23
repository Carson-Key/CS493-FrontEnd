import { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { AuthContext } from '../../helpers/AuthContext.js';
import Page from '../../components/Page';

const LoggedIn = () => {
  const [state, dispatch] = useContext(AuthContext)
  const history = useHistory()
  let { artist } = useParams();
  const [currentPage, setCurrentPage] = useState("SetAWSProfile")
  const [currentPageComponent, setCurrentPageComponent] = useState(<></>)

  const logOut = () => {
    dispatch({type: 'SET_USER', payload: null})
    dispatch({type: 'SET_AUTHSTATE_UNAUTH'})
    history.push(`/`)
  }
  const back = () => {
    history.push(`/dashboard`)
  }

  useEffect(() => {

  }, [currentPage])

  return (
    <Page>
      <div className="flex w-screen justify-between h-10pr px-6 bg-white">
        <Button onClick={back}>Back</Button>
        <p className="text-2xl my-auto">Artists</p>
        <Button black onClick={logOut} className="my-auto">Log Out</Button>
      </div>
      <div className="flex justify-around mt-5pr w-95pr mx-auto">
        <div className="flex mt-4">
          <div className="bg-white h-80pr w-20pr mr-5pr">
            <p className="font-bold mt-4 mb-1 text-center">Albums</p>

          </div>
          <div className="bg-white h-80pr w-70pr">
            <p className="font-bold mt-4 mb-1 text-center">Songs</p>

          </div>
        </div>
        <div>
          {currentPageComponent}
        </div>
      </div>
    </Page>
  );
}

export default LoggedIn;
