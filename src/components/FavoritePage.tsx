import React from 'react';
import { connect } from 'react-redux';
import api, { apiKey } from '../api';
import { setFavoritePage } from '../ducks/favoritePage';
import { RootReducerType } from '../store';
import { Film } from '../types';
import Movie from './Movie';

type ReduxType = {
  favoriteFilms: Set<number | null>;
  setFavoritePage: (films: Array<Film>) => any;
  favoritePageFilms: Array<Film>;
};

type FavoritePageType = ReduxType;

const FavoritePage: React.FC<FavoritePageType> = ({
  favoriteFilms,
  setFavoritePage,
  favoritePageFilms,
}) => {
  React.useEffect(() => {
    const films: Array<number | null> = Array.from(favoriteFilms);
    Promise.all(
      films.map((film) => {
        return api.get(`movie/${film}?api_key=${apiKey}&language=en-US`);
      })
    ).then((response) => {
      const films: Array<Film> = [];
      response.map((film: any) => {
        films.push({
          id: film.data.id,
          title: film.data.title,
          rating: film.data.vote_average,
          smallPoster: film.data.poster_path,
        });
        return film;
      });
      setFavoritePage(films);
    });
  }, [favoriteFilms, setFavoritePage]);

  return (
    <section className='new-releases films-section'>
      <h2 className='new-releases__title films-section__title'>New Releases</h2>
      <div className='new-releases__content films-section__content'>
        {favoritePageFilms.map((film: Film) => {
          return <Movie key={film.id} {...film} />;
        })}
      </div>
    </section>
  );
};

const mapStateToProps = ({
  favoriteFilms,
  faroviritePageFilms,
}: RootReducerType) => {
  return {
    favoriteFilms: favoriteFilms,
    favoritePageFilms: faroviritePageFilms,
  };
};

export default connect(mapStateToProps, { setFavoritePage })(FavoritePage);
