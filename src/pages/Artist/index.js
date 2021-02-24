import { useContext, useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Button from '../../components/Button';
import { AuthContext } from '../../helpers/AuthContext.js';
import { ArtistContext } from '../../helpers/ArtistContext.js';
import Page from '../../components/Page';

const LoggedIn = () => {
  const [authState, authDispatch] = useContext(AuthContext)
  const [artistState, artistDispatch] = useContext(ArtistContext)
  const history = useHistory()
  const {artist} = useParams();
  const [currentAlbum, setCurrentAlbum] = useState("SetAWSProfile")
  const [currentAlbumComponent, setCurrentAlbumComponent] = useState(<></>)
  const [albums, setAlbums] = useState([])

  const logOut = () => {
    authDispatch({type: 'SET_USER', payload: null})
    authDispatch({type: 'SET_AUTHSTATE_UNAUTH'})
    artistDispatch({type: 'SET_ARTIST', payload: null})
    history.push(`/`)
  }
  const back = () => {
    history.push(`/dashboard`)
  }

  useEffect(() => {
    setAlbums(Object.keys(artistState.artists[artist]))
  }, [artistState, artist])

  useEffect(() => {
    // console.log(artistState)
  }, [currentAlbum, artistState])

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
            <div className="block">
              {
                albums.map((album, i) => {
                  return (
                    <Button key={i} className="text-2xl h-10pr w-full border-b-2 border-fuchsia-600">{album}</Button>
                  )
                })
              }
            </div>
          </div>
          <div className="bg-white h-80pr w-70pr">
            <p className="font-bold mt-4 mb-1 text-center">Songs</p>

          </div>
        </div>
        <div>
          {currentAlbumComponent}
        </div>
      </div>
    </Page>
  );
}

export default LoggedIn;
