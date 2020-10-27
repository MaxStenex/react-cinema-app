import React from 'react';
import '../scss/components/FilmPage.scss';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import api, { apiKey } from '../api';
import { connect } from 'react-redux';
import { FilmDetails, setFilm } from '../ducks/filmPage';
import { RootReducerType } from '../store';
import PosterNotFound from '../assets/posterNotFound.jpg';

type PathParamsType = {
  id: string;
};

type ReduxType = {
  film: FilmDetails;
  setFilm: (FilmDetails: FilmDetails) => any;
};

type FilmPageType = RouteComponentProps<PathParamsType> & ReduxType;

const FilmPage: React.FC<FilmPageType> = ({ match, setFilm, film }) => {
  React.useEffect(() => {
    api
      .get(`movie/${match.params.id}?api_key=${apiKey}&language=en-US`)
      .then((response) => {
        const data = response.data;
        setFilm({
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
      });
  }, [match.params.id]);

  return (
    <section className='film'>
      <h2 className='film__title films-section__title'>{film.title}</h2>
      <div className='film__main-wrapper'>
        <img
          src={
            film.poster
              ? `http://image.tmdb.org/t/p/w500/${film.poster}`
              : PosterNotFound
          }
          alt=''
          className='film__poster'
        />
        <div className='film__info'>
          <div className='film__rating'>
            Rating: <span>{film.rating} / 10</span>
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
            Prodiction countries :{' '}
            {film.productionCountries.map((country: string) => country)}
          </div>
        </div>
      </div>
      <p className='film__overview'>{film.overview}</p>
    </section>
  );
};

const mapStateToProps = ({ filmPage }: RootReducerType) => {
  return {
    film: filmPage,
  };
};

export default withRouter(connect(mapStateToProps, { setFilm })(FilmPage));
