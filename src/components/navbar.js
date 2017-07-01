import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import MoviesIndex from './movies_index';
import MoviesShow from './movies_show';

export default (props) => {
    return(
        <BrowserRouter>
            <div>
                <Link to="/">Movies</Link>
                <Switch>
                    <Route path="/movies/:id" component={ MoviesShow } />
                    <Route path="/" component={ MoviesIndex } />
                </Switch>
            </div>
        </BrowserRouter>
    );
};