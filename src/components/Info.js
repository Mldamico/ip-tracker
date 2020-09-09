import React, { useContext, useEffect } from 'react';
import { LocationContext } from '../context/LocationContext';
import { InfoItem } from './InfoItem';

export const Info = () => {
  const { location } = useContext(LocationContext);

  return (
    <div className='Info__container'>
      <InfoItem
        title='IP ADDRESS'
        description={location ? location.ip.ip : '192.212.174.101'}
      />
      <InfoItem
        title='LOCATION'
        description={
          location
            ? location.ip.location.city +
              ', ' +
              location.ip.location.country +
              ' ' +
              location.ip.location.postalCode
            : 'Brooklyn, NY 10001'
        }
      />
      <InfoItem
        title='TIMEZONE'
        description={
          location ? 'UTC ' + location.ip.location.timezone : 'UTC -05:00'
        }
      />
      <InfoItem
        title='ISP'
        description={location ? location.ip.isp : 'SpaceX Starlink'}
      />
    </div>
  );
};
