import React, { useContext } from 'react';
import { LocationContext } from '../context/LocationContext';
import { InfoItem } from './InfoItem';

export const Info = () => {
  const { location } = useContext(LocationContext);

  return (
    <div className='info__container'>
      <InfoItem
        title='IP ADDRESS'
        description={location ? location.ip.ip : ''}
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
            : ''
        }
      />
      <InfoItem
        title='TIMEZONE'
        description={location ? 'UTC ' + location.ip.location.timezone : ''}
      />
      <InfoItem title='ISP' description={location ? location.ip.isp : ''} />
    </div>
  );
};
