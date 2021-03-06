import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import api, { apiKey } from '../api';
import Logo from '../assets/logo.jpg';
import Search from '../assets/search.svg';
import { setSearchedFilms } from '../ducks/searchBlock';
import '../scss/components/Header.scss';
import { Film } from '../types';

const Header: React.FC = ({ setSearchedFilms }: any) => {
  const history = useHistory();
  const onEnterSearch = (evt: React.KeyboardEvent<HTMLInputElement>) => {
    if (evt.key === 'Enter') {
      onSearchFilms(searchText);
    }
  };
  const [loading, setLoading] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');
  const onSearchFilms = (searchText: string) => {
    if (searchText.trim() === '') return;
    setLoading(true);
    api
      .get(
        `search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=1&include_adult=false&region=ru`
      )
      .then((response) => {
        const filmsArray: Array<Film> = [];
        response.data.results.map((film: any) => {
          filmsArray.push({
            id: film.id,
            title: film.title,
            rating: film.vote_average,
            smallPoster: film.poster_path,
          });
          return film;
        });
        setSearchedFilms(filmsArray);
        setLoading(false);
      });
    setSearchText('');
    history.push('/search');
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Link to='/' className='header__logo'>
            <img src={Logo} alt='logo' />
          </Link>
          <div className='header__search'>
            <button
              onClick={() => {
                onSearchFilms(searchText);
              }}
              disabled={loading}
            >
              <img src={Search} alt='search' />
            </button>
            <input
              type='text'
              className=''
              placeholder={loading ? 'Loading...' : 'Search movies'}
              value={searchText}
              onChange={(evt) => setSearchText(evt.currentTarget.value)}
              onKeyPress={onEnterSearch}
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default connect(null, { setSearchedFilms })(Header);
