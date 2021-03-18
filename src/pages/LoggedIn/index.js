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
      fetch("https://q2h6cilfdi.execute-api.us-west-2.amazonaws.com/dev/artistList", {
        headers: {
          authorization: "hello",
        }
      })
      .then((response) => {
        response.json().then((data) => {
          const dataArray = Object.keys(data.artists)
          dataArray.forEach((artist) => {
            const artistArray = Object.keys(data.artists[artist])
            const artistObject = data.artists[artist]
            artistArray.forEach((album) => {
              const albumArray = Object.keys(artistObject[album])
              const albumObject = artistObject[album]
              albumArray.forEach((song) => {
                albumObject[song].songObject = new Audio(albumObject[song].url)
              })
            })
          })
          artistDispatch({type: 'SET_ARTISTS', payload: data.artists})
          setArtistsArray(Object.keys(data.artists))
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
        <div className="overflow-auto">
          {
            artistsArray.map((artist, i) => {
              if (artist === 1) {
                return (
                  <p key={i} className="w-80pr flex justify-center text-6xl my-auto">
                    Loading...
                  </p>
                )
              } else {
                return (
                  <Link key={i} to={"/artist/" + artist}>
                    <p className="w-80pr flex justify-center text-6xl text-white bg-gray-400 py-5pr mt-4">
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
