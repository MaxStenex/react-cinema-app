import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/components/Navigation.scss';
import MenuIcon from '../assets/menu.svg';
import CloseIcon from '../assets/close.svg';

const Navigation = () => {
  const [closed, setClosed] = React.useState(true);

  return (
    <aside className={`navigation ` + (closed ? '' : 'navigation--opened')}>
      <button
        className='navigation__close'
        onClick={() => {
          setClosed(!closed);
        }}
      >
        <img src={closed ? MenuIcon : CloseIcon} alt='menu' />
      </button>
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
