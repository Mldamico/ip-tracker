import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
export const AddressInput = () => {
  return (
    <div className='inputContainer'>
      <input className='inputContainer__input' />
      <button className='inputContainer__button'>
        <FontAwesomeIcon icon={faAngleRight} color='white' />
      </button>
    </div>
  );
};
