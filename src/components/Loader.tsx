import React from 'react';
import LoaderGif from '../assets/loader.gif';

const Loader = () => {
  return (
    <div className='loader'>
      <img src={LoaderGif} alt='loading' />
    </div>
  );
};

export default Loader;
