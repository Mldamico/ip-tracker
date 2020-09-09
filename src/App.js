import React, { useReducer } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { MapScreen } from './components/Map';
import { LocationContext } from './context/LocationContext';
import { locationReducer } from './context/locationReducer';

function App() {
  const [location, dispatch] = useReducer(locationReducer);

  return (
    <LocationContext.Provider value={{ location, dispatch }}>
      <div className='app__container'>
        <Header />
        <Info />
        <div className='map'>
          <MapScreen
            isMarkerShown
            lat={location ? location.ip.location.lat : -34.397}
            lng={location ? location.ip.location.lng : 150.644}
          />
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
