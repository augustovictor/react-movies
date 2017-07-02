import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import MoviesIndex from './movies_index';
import MoviesShow from './movies_show';
import MoviesForm from './movies_form';

export default (props) => {
    return(
        <BrowserRouter>
            <div>
                <Link to="/">Movies</Link>
                <Link to="/movies/new">Add movie</Link>
                <Switch>
                    <Route path="/movies/new" component={ MoviesForm } />
                    <Route path="/movies/:id/edit" component={ MoviesForm } />
                    <Route path="/movies/:id" component={ MoviesShow } />
                    <Route path="/" component={ MoviesIndex } />
                </Switch>
            </div>
        </BrowserRouter>
    );
};