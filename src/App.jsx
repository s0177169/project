import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Support from './components/Support';
import Plans from './components/Plans';
import Cases from './components/Cases';
import Team from './components/Team';
import Reviews from './components/Reviews';
import Partners from './components/Partners';
import Webform from './components/Webform';

const App = () => {
    return (
        <div>
            <Header />
            <Services />
            <Support />
            <Plans />
            <Cases />
            <Team />
            <Reviews />
            <Partners />
            <Webform />
        </div>
    );
};

export default App;