import React from 'react';
import NothingFoundImage from '../assets/nothing-found.png';

const NothingFound = () => {
  return (
    <div className='nothing-found'>
      <img src={NothingFoundImage} alt='nothing-found' />
      <h2 className='nothing-found__title'>Nothing found :(</h2>
    </div>
  );
};

export default NothingFound;
