import React from 'react';
import './scss/normalize.scss';
import './scss/components/App.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NewReleases from './components/NewReleases';
import { Route, Switch } from 'react-router-dom';
import SearchBlock from './components/SearchBlock';
import FilmPage from './components/FilmPage';
import FavoritePage from './components/FavoritePage';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__wrapper'>
            <Navigation />
            <main className='main'>
              <Switch>
                <Route exact path='/' component={NewReleases} />
                <Route path='/search' component={SearchBlock} />
                <Route path='/film/:id?' component={FilmPage} />
                <Route path='/favorite/' component={FavoritePage} />
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
