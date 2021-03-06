import React, { useContext } from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';
import { LocationContext } from '../context/LocationContext';
import { compose, withProps } from 'recompose';

export const MapScreen = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAwjavClqIBDXz-F30uVROAYCD2zujzy5E',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => {
  const { location } = useContext(LocationContext);

  return (
    <GoogleMap
      defaultZoom={8}
      center={{
        lat: location && location.ip.location.lat,
        lng: location && location.ip.location.lng,
      }}
    >
      {props.isMarkerShown && (
        <Marker
          position={{
            lat: location && location.ip.location.lat,
            lng: location && location.ip.location.lng,
          }}
        />
      )}
    </GoogleMap>
  );
});
