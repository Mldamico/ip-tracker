import React, { useContext, useEffect } from 'react';
import {
  GoogleMap,
  Marker,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';
import { LocationContext } from '../context/LocationContext';

export const MapScreen = withScriptjs(
  withGoogleMap((props) => {
    const { location } = useContext(LocationContext);
    console.log(location && location.ip.location.lat);

    return (
      <GoogleMap
        defaultZoom={4}
        defaultCenter={{
          lat: location ? location.ip.location.lat : 34.397,
          lng: location ? location.ip.location.lng : 50.644,
        }}
      >
        {props.isMarkerShown && (
          <Marker
            position={{
              lat: location ? location.ip.location.lat : -34.397,
              lng: location ? location.ip.location.lng : 150.644,
            }}
          />
        )}
      </GoogleMap>
    );
  })
);
