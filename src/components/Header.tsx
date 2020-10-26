import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import api, { apiKey } from '../api';
import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';
import { setSearchedFilms } from '../ducks/searchBlock';
import '../scss/components/Header.scss';
import { Film } from '../types';

const Header: React.FC = ({ setSearchedFilms }: any) => {
  const history = useHistory();
  const [searchText, setSearchText] = React.useState('');
  const onSearchFilms = (searchText: string) => {
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
            overview: film.overview,
            releaseDate: film.release_date,
            genreIds: film.genre_ids,
            smallPoster: film.poster_path,
            bigPoster: film.backdrop_path,
          });
          return film;
        });
        setSearchedFilms(filmsArray);
      });
    setSearchText('');
    history.push('/search');
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <Link to='/' className='header__logo' href='#'>
            <img src={Logo} alt='logo' />
          </Link>
          <div className='header__search'>
            <button
              onClick={() => {
                onSearchFilms(searchText);
              }}
            >
              <img src={Search} alt='search' />
            </button>
            <input
              type='text'
              className=''
              placeholder='Search movies'
              value={searchText}
              onChange={(evt) => setSearchText(evt.currentTarget.value)}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default connect(null, { setSearchedFilms })(Header);
