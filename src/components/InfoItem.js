import React from 'react';

export const InfoItem = ({ title, description }) => {
  return (
    <div className='infoItem'>
      <p className='infoItem__title'>{title}</p>
      <p className='infoItem__description'>{description}</p>
    </div>
  );
};
