import React from 'react';
import '../scss/components/NewReleases.scss';
import TestPoster from '../assets/poster.jpg';
import { Link } from 'react-router-dom';

const NewReleases = () => {
  return (
    <section className='new-releases films-section'>
      <h2 className='new-releases__title films-section__title'>New Releases</h2>
      <div className='new-releases__content films-section__content'>
        <Link to='/' className='new-releases__movie movie'>
          <div className='movie__rating '>7,9</div>
          <img src={TestPoster} alt='poster' className='movie__poster ' />
          <h3 className='movie__name '>Warcraft</h3>
          <ul className='movie__genres'>
            <li>Mystery</li>
            <li>Thriller</li>
          </ul>
        </Link>
      </div>
    </section>
  );
};

export default NewReleases;
