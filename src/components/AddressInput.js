import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { LocationContext } from '../context/LocationContext';
import { types } from '../types/types';


export const AddressInput = () => {
  const [ip, setIp] = useState('');
  const { dispatch } = useContext(LocationContext);
  const [error, setError] = useState();
  const ipChangeHandler = async (e) => {
    e.preventDefault();

    try {
      const resp = await fetch(
        `https://geo.ipify.org/api/v1?apiKey=at_3jdhRyuxsaN11nn09VpIkORJnUNiG&ipAddress=${ip}`
      );
      const data = await resp.json();
      
      dispatch({ type: types.SETLOCATION, payload: data });
      
    } catch (err) {
      console.log(err);
      setError('Please add a correct IP');
    }
  };

  return (
    <form className='inputContainer' onSubmit={ipChangeHandler}>
      <input
        className='inputContainer__input'
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button className='inputContainer__button'>
        <FontAwesomeIcon icon={faAngleRight} color='white' />
      </button>
    </form>
  );
};
