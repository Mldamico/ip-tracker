import React from 'react';
import '../App.css';
import { AddressInput } from './AddressInput';
export const Header = () => {
  return (
    <header>
      <h1>IP Address Tracker</h1>
      <AddressInput />
    </header>
  );
};
