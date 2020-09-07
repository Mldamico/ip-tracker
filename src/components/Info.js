import React from 'react';
import { InfoItem } from './InfoItem';

export const Info = () => {
  return (
    <div className='Info__container'>
      <InfoItem title='IP ADDRESS' description='192.212.174.101' />
      <InfoItem title='LOCATION' description='Brooklyn, NY 10001' />
      <InfoItem title='TIMEZONE' description='UTC -05:00' />
      <InfoItem title='ISP' description='SpaceX Starlink' />
    </div>
  );
};
