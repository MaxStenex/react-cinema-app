import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../types';

const Movie: React.FC<Film> = ({ title, rating, genreIds, smallPoster }) => {
  return (
    <Link to='/' className='search-block__movie movie'>
      <div className='movie__rating '>{rating}</div>
      <img
        src={`http://image.tmdb.org/t/p/w185/${smallPoster}`}
        alt='poster'
        className='movie__poster '
      />
      <h3 className='movie__name '>{title}</h3>
      <ul className='movie__genres'>
        <li>Mystery</li>
        <li>Thriller</li>
      </ul>
    </Link>
  );
};

export default Movie;
