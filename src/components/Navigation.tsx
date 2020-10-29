import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/components/Navigation.scss';

const Navigation = () => {
  return (
    <aside className='navigation'>
      <ul>
        <li>
          <NavLink
            exact
            to='/'
            activeClassName='navigation__link--active'
            className='navigation__link'
          >
            New Realeses
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='navigation__link--active'
            to='/best'
            className='navigation__link'
          >
            Best Movies
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='navigation__link--active'
            to='/favorite'
            className='navigation__link'
          >
            Favorite
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Navigation;
