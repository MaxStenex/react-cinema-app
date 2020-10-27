import React from 'react';
import { Link } from 'react-router-dom';
import { Film } from '../types';
import PosterNotFound from '../assets/posterNotFound.jpg';

const Movie: React.FC<Film> = ({
  id,
  title,
  rating,
  genreIds,
  smallPoster,
}) => {
  return (
    <Link to={`/film/${id}`} className='search-block__movie movie'>
      <div className='movie__rating '>{rating}</div>
      <img
        src={
          smallPoster
            ? `http://image.tmdb.org/t/p/w185/${smallPoster}`
            : PosterNotFound
        }
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
