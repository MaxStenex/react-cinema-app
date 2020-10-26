import React from 'react';
import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';
import '../scss/components/Header.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <a className='header__logo' href='#'>
            <img src={Logo} alt='logo' />
          </a>
          <div className='header__search'>
            <button>
              <img src={Search} alt='search' />
            </button>
            <input type='text' className='' placeholder='Search movies' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
