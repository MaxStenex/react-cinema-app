import React from 'react';
import { connect } from 'react-redux';
import { RootReducerType } from '../store';

type ReduxType = {
  favoriteFilms: Set<number | null>;
};

type FavoritePageType = ReduxType;

const FavoritePage: React.FC<FavoritePageType> = ({ favoriteFilms }) => {
  const films = Array.from(favoriteFilms);
  return (
    <section className='new-releases films-section'>
      <h2 className='new-releases__title films-section__title'>New Releases</h2>
      <div className='new-releases__content films-section__content'></div>
    </section>
  );
};

const mapStateToProps = ({ favoriteFilms }: RootReducerType) => {
  return {
    favoriteFilms: favoriteFilms,
  };
};

export default connect(mapStateToProps, {})(FavoritePage);
