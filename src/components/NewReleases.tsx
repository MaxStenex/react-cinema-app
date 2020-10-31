import React from 'react';
import { RootReducerType } from '../store';
import { connect } from 'react-redux';
import api, { apiKey } from '../api';
import { setNewReleases } from '../ducks/newReleases';
import '../scss/components/NewReleases.scss';
import { Film } from '../types';
import Movie from './Movie';
import Loader from './Loader';

type ReduxTypes = {
  newReleases: Array<Film>;
  setNewReleases: (films: Array<Film>) => any;
};

type NewReleasesType = ReduxTypes;

const NewReleases: React.FC<NewReleasesType> = ({
  setNewReleases,
  newReleases,
}) => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    api
      .get(
        `movie/now_playing?api_key=${apiKey}&language=en-US&page=1&region=ru`
      )
      .then((response) => {
        const newReleases: Array<Film> = [];
        response.data.results.map((film: any) => {
          newReleases.push({
            id: film.id,
            title: film.title,
            rating: film.vote_average,
            smallPoster: film.poster_path,
          });
          return film;
        });
        setNewReleases(newReleases);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [setNewReleases]);

  return loading === true ? (
    <Loader />
  ) : (
    <section className='new-releases films-section'>
      <h2 className='new-releases__title films-section__title'>New Releases</h2>
      <div className='new-releases__content films-section__content'>
        {newReleases.map((film) => {
          return <Movie {...film} key={film.id} />;
        })}
      </div>
    </section>
  );
};

const mapStateToProps = ({ newReleases }: RootReducerType) => {
  return {
    newReleases,
  };
};

export default connect(mapStateToProps, { setNewReleases })(NewReleases);
