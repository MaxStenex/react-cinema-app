import React from 'react';
import { connect } from 'react-redux';
import { RootReducerType } from '../store';
import { Film } from '../types';
import Movie from './Movie';
import NothingFound from './NothingFound';

type Props = {
  films: Array<Film>;
};

const SearchBlock: React.FC<Props> = ({ films }) => {
  return films.length === 0 ? (
    <NothingFound />
  ) : (
    <section className='search-block films-section'>
      <h2 className='search-block__title films-section__title'>Search</h2>
      <div className='search-block__content films-section__content'>
        {films.map((film) => {
          return <Movie {...film} key={film.id} />;
        })}
      </div>
    </section>
  );
};

const mapStateToProps = ({ searchBlock }: RootReducerType) => {
  return {
    films: searchBlock,
  };
};

export default connect(mapStateToProps, {})(SearchBlock);
