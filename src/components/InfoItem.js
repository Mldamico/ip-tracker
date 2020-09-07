import React from 'react';

export const InfoItem = ({ title, description }) => {
  return (
    <div className='InfoItem__container'>
      <p className='InfoItem__title'>{title}</p>
      <p className='InfoItem__description'>{description}</p>
    </div>
  );
};
