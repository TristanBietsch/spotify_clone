import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import './App.css';
import './Login'
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import Player from'./Player'

const spotifty = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
 
    if (_token) {
      setToken(_token);

      spotifty.setAccessToken(_token);

      spotifty.getMe().then(user => {
        console.log(user);
      })
    }

  }, []);

  return (
    <div className='app'>
      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }
    </div>
  );
}

export default App;
