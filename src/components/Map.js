import React, { useContext, useEffect } from 'react';
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
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
    center={{ lat: props.lat, lng: props.lng }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: props.lat, lng: props.lng }} />
    )}
  </GoogleMap>
));
