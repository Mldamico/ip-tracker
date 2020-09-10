import React, { useReducer, useEffect } from 'react';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { MapScreen } from './components/Map';
import { LocationContext } from './context/LocationContext';
import { locationReducer } from './context/locationReducer';
import { types } from './types/types';

function App() {
  const [location, dispatch] = useReducer(locationReducer);

  const initialSearch = async () => {
    try {
      const resp = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_3jdhRyuxsaN11nn09VpIkORJnUNiG`
      );
      const data = await resp.json();

      dispatch({ type: types.SETLOCATION, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    initialSearch();
  }, []);

  return (
    <LocationContext.Provider value={{ location, dispatch }}>
      <div className='app'>
        <Header />
        <Info />
        <div className='app__map'>
          {location && <MapScreen isMarkerShown />}
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
