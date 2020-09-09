import React, { useReducer } from 'react';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { MapScreen } from './components/Map';
import { LocationContext } from './context/LocationContext';
import { locationReducer } from './context/locationReducer';

function App() {
  const [location, dispatch] = useReducer(locationReducer);

  return (
    <LocationContext.Provider value={{ location, dispatch }}>
      <div className='app'>
        <Header />
        <Info />
        <div className='app__map'>
          <MapScreen isMarkerShown />
        </div>
      </div>
    </LocationContext.Provider>
  );
}

export default App;
