import React from 'react';
import './scss/normalize.scss';
import './scss/components/App.scss';
import Header from './components/Header';
import Navigation from './components/Navigation';
import NewReleases from './components/NewReleases';

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className='content'>
        <div className='container'>
          <div className='content__wrapper'>
            <Navigation />
            <main className='main'>
              <NewReleases />
            </main>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
