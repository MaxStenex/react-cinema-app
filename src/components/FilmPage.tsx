import React from 'react';
import '../scss/components/FilmPage.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import api, { apiKey } from '../api';
import { connect } from 'react-redux';
import { setFilm } from '../ducks/filmPage';
import { RootReducerType } from '../store';
import PosterNotFound from '../assets/posterNotFound.jpg';
import Star from '../assets/star.svg';
import { toggleFavoriteFilm } from '../ducks/favorite';
import Delete from '../assets/delete.svg';
import { FilmDetails } from '../types';

type PathParamsType = {
  id: string;
};

type ReduxType = {
  film: FilmDetails;
  setFilm: (FilmDetails: FilmDetails) => any;
  toggleFavoriteFilm: (filmId: number | null) => any;
  favoriteFilms: Set<number | null>;
};

type FilmPageType = RouteComponentProps<PathParamsType> & ReduxType;

const FilmPage: React.FC<FilmPageType> = ({
  match,
  setFilm,
  film,
  toggleFavoriteFilm,
  favoriteFilms,
}) => {
  const isFavorite: boolean = favoriteFilms.has(film.id) ? true : false;

  React.useEffect(() => {
    api
      .get(`movie/${match.params.id}?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        const data = response.data;
        setFilm({
          id: data.id,
          title: data.title,
          rating: data.vote_average,
          duration: data.runtime,
          filmGenres: data.genres,
          productionCountries: data.production_countries.map(
            (country: any) => country.name
          ),
          overview: data.overview,
          poster: data.poster_path,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id, setFilm]);

  return (
    <section className='film'>
      <h2 className='film__title films-section__title'>{film.title}</h2>
      <div className='film__main-wrapper'>
        <div className='film__poster poster'>
          <img
            src={
              film.poster
                ? `http://image.tmdb.org/t/p/w500/${film.poster}`
                : PosterNotFound
            }
            alt=''
            className='poster__image'
          />
          <button
            onClick={() => toggleFavoriteFilm(film.id)}
            className='poster__button'
          >
            <span>
              {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
            </span>
            <img src={isFavorite ? Delete : Star} alt='' />
          </button>
        </div>

        <div className='film__info'>
          <div className='film__rating'>
            <span>Rating : {film.rating} / 10</span>
          </div>
          <div className='film__duration'>Duration : {film.duration} min</div>
          <div className='film__genres'>
            <span>Film genres :</span>
            <ul>
              {film.filmGenres.map((genre: { id: number; name: string }) => {
                return <li key={genre.id + genre.name}>{genre.name}</li>;
              })}
            </ul>
          </div>
          <div className='film__production-countries'>
            <span>Prodiction countries : </span>
            <ul>
              {film.productionCountries.map((country: string) => (
                <li key={country}>{country}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className='film__overview'>{film.overview}</p>
    </section>
  );
};

const mapStateToProps = ({ filmPage, favoriteFilms }: RootReducerType) => {
  return {
    favoriteFilms: favoriteFilms,
    film: filmPage,
  };
};

export default withRouter(
  connect(mapStateToProps, { setFilm, toggleFavoriteFilm })(FilmPage)
);
