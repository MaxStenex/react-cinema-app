import React from 'react';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <a className='header__logo' href=''>
              <img src='./img/logo.svg' alt='logo' />
            </a>
            <div className='header__search'>
              <button>
                <img src='./img/search.svg' alt='' />
              </button>
              <input type='text' className='' placeholder='Search movies' />
            </div>
          </div>
        </div>
      </header>

      <div className='content'>
        <div className='container'>
          <div className='content__wrapper'>
            <aside className='navigation'>
              <ul>
                <li>
                  <a
                    href='#'
                    className='navigation__link navigation__link--active'
                  >
                    New Realeses
                  </a>
                </li>
                <li>
                  <a href='#' className='navigation__link'>
                    Best Movies
                  </a>
                </li>
                <li>
                  <a href='#' className='navigation__link'>
                    Favorite
                  </a>
                </li>
              </ul>
            </aside>
            <main className='main'>
              <section className='new-releases'>
                <h2 className='new-releases__title'>New Releases</h2>
              </section>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
