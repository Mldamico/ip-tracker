import React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Info } from './components/Info';
import { MapScreen } from './components/Map';

function App() {
  return (
    <div className='app__container'>
      <Header />
      <Info />
      <div className='map'>
        <MapScreen
          isMarkerShown={false}
          googleMapURL='https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAwjavClqIBDXz-F30uVROAYCD2zujzy5E'
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </div>
  );
}

export default App;
