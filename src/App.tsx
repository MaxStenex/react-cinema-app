import React from 'react';
import './scss/normalize.scss';
import './scss/components/App.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NewReleases from './components/NewReleases';
import { Route, Switch } from 'react-router-dom';
import SearchBlock from './components/SearchBlock';

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
              </Switch>
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
