import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Results from './Results';
import Filter from './Filter';
import Search from './Search';

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <div>
                <Header />
                <div className="container">
                    <Route exact  path="/" component={Search} />
                    <Route  path="/favourites" component={Filter} />
                    <Route path="/" component={Results} />
                </div>
                
            </div>
            </BrowserRouter>
        </div>
    )
};

export default App;