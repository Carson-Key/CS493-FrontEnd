import { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { AuthContext } from '../../helpers/AuthContext.js';
import Page from '../../components/Page';

const LoggedIn = () => {
  const [artists, setArtists] = useState({})
  const [artistsArray, setArtistsArray] = useState([])
  const [state, dispatch] = useContext(AuthContext)
  const history = useHistory()

  const logOut = () => {
    dispatch({type: 'SET_USER', payload: null})
    dispatch({type: 'SET_AUTHSTATE_UNAUTH'})
    history.push(`/`)
  }

  useEffect(() => {
    fetch("https://asc9ahbb60.execute-api.us-west-2.amazonaws.com")
    .then((response) => {
      response.json().then((data) => {
        setArtists(data)
        setArtistsArray(Object.keys(data))
      })
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <Page>
      <div className="flex w-screen justify-between h-10pr px-6 bg-white">
        <p></p>
        <p className="text-2xl my-auto">Artists</p>
        <Button black onClick={logOut} className="my-auto">Log Out</Button>
      </div>
      <Container className="flex content-center justify-center mt-5pr h-80pr w-95pr mx-auto py-5pr">
        <div>
          {
            artistsArray.map((artist, i) => {
              return (
                <Link key={i} to={"/artist/" + artist}>
                  <p className="w-80pr flex justify-center text-6xl text-white bg-gray-400 py-5pr">
                    {artist}
                  </p>
                </Link>
                )
            })
          }
        </div>
      </Container>
    </Page>
  );
}

export default LoggedIn;
