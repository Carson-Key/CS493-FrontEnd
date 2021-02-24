import { useContext, useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Container from '../../components/Container';
import Button from '../../components/Button';
import { AuthContext } from '../../helpers/AuthContext.js';
import { ArtistContext } from '../../helpers/ArtistContext.js';
import Page from '../../components/Page';

const LoggedIn = () => {
  const [artistsArray, setArtistsArray] = useState([1])
  const [authState, authDispatch] = useContext(AuthContext)
  const [artistState, artistDispatch] = useContext(ArtistContext)
  const history = useHistory()

  // To satisfy the compiler
  if (authState) {}
  if (artistState) {}

  const logOut = () => {
    authDispatch({type: 'SET_USER', payload: null})
    authDispatch({type: 'SET_AUTHSTATE_UNAUTH'})
    history.push(`/`)
  }

  useEffect(() => {
    if (!artistState.artists) {
      fetch("https://asc9ahbb60.execute-api.us-west-2.amazonaws.com")
      .then((response) => {
        response.json().then((data) => {
          artistDispatch({type: 'SET_ARTIST', payload: data})
          setArtistsArray(Object.keys(data))
        })
      })
      .catch((error) => {
        console.log(error)
      })
    } else {
      setArtistsArray(Object.keys(artistState.artists))
    }
  }, [artistDispatch, artistState])

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
              if (artist === 1) {
                return (
                  <p className="w-80pr flex justify-center text-6xl my-auto">
                    Loading...
                  </p>
                )
              } else {
                return (
                  <Link key={i} to={"/artist/" + artist}>
                    <p className="w-80pr flex justify-center text-6xl text-white bg-gray-400 py-5pr">
                      {artist}
                    </p>
                  </Link>
                )
              }
            })
          }
        </div>
      </Container>
    </Page>
  );
}

export default LoggedIn;
