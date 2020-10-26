import React from 'react';
import '../scss/components/NewReleases.scss';
import TestPoster from '../assets/poster.jpg';

const NewReleases = () => {
  return (
    <section className='new-releases'>
      <h2 className='new-releases__title section-title'>New Releases</h2>
      <div className='new-releases__content'>
        <a href='#' className='new-releases__movie movie'>
          <div className='movie__rating'>7,9</div>
          <img src={TestPoster} alt='poster' className='movie__poster' />
          <h3 className='movie__name'>Warcraft</h3>
          <ul className='movie__genres'>
            <li>Mystery</li>
            <li>Thriller</li>
          </ul>
        </a>
      </div>
    </section>
  );
};

export default NewReleases;
