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
  const [currentAlbum, setCurrentAlbum] = useState(Object.keys(artistState.artists[artist])[0])
  const [currentAlbumComponent, setCurrentAlbumComponent] = useState([])
  const [artistObject, setArtistObject] = useState({})
  const [songs, setSongs] = useState({})
  const [albums, setAlbums] = useState([])

  // To satisfy the compiler
  if (authState) {}

  const logOut = () => {
    authDispatch({type: 'SET_USER', payload: null})
    authDispatch({type: 'SET_AUTHSTATE_UNAUTH'})
    artistDispatch({type: 'SET_ARTIST', payload: null})
    history.push(`/`)
  }
  const back = () => {
    history.push(`/dashboard`)
  }

  const switchActiveAlbum = (album) => {
    setCurrentAlbum(album)
    setCurrentAlbumComponent(songs[album])
  }

  useEffect(() => {
    setArtistObject(artistState.artists[artist])
    setAlbums(Object.keys(artistState.artists[artist]))

    const tempSongsObject = {}
    albums.forEach((album, i) => {
      tempSongsObject[album] = Object.keys(artistObject[album])
      if (i === 0) {
        setCurrentAlbumComponent(tempSongsObject[album])
      }
    })
    if (Object.keys(songs).length === 0) {
      setSongs(tempSongsObject)
    }
  }, [songs])

  return (
    <Page>
      <div className="flex w-screen justify-between h-10pr px-6 bg-white">
        <Button onClick={back}>Back</Button>
        <p className="text-2xl my-auto">Artist: {artist}</p>
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
                    <Button key={i} className="text-2xl h-10pr w-full border-b-2 border-fuchsia-600" onClick={() => {
                      switchActiveAlbum(album)
                    }}>
                      {album}
                    </Button>
                  )
                })
              }
            </div>
          </div>
          <div className="bg-white h-80pr w-70pr">
            <p className="font-bold mt-4 mb-1 text-center">Songs</p>
            {
              currentAlbumComponent.map((song, i) => {
                const tempArtist = artistState.artists[artist]
                const tempAlbum = tempArtist[currentAlbum]
                return (
                  <div key={i} className="block text-2xl h-10pr w-full border-b-2 border-fuchsia-600">
                    <center>
                      <p>{tempAlbum[song].title}</p>
                      <audio controls>
                        <source src={tempAlbum[song].url} type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                    </center>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </Page>
  );
}

export default LoggedIn;
