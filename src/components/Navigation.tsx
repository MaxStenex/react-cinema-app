import React from 'react';
import '../scss/components/Navigation.scss';

const Navigation = () => {
  return (
    <aside className='navigation'>
      <ul>
        <li>
          <a href='#' className='navigation__link navigation__link--active'>
            New Realeses
          </a>
        </li>
        <li>
          <a href='#' className='navigation__link'>
            Best Movies
          </a>
        </li>
        <li>
          <a href='#' className='navigation__link'>
            Favorite
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;
