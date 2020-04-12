import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Search from './pages/Search';
import MovieInfo from './pages/MovieInfo';

export const ROUTES = {
    HOME: '/',
    SEARCH: '/search',
    INFO: '/info'
}

export default function Routes(){
    return (
        <Router >
            <Switch >
                <Route path={ROUTES.HOME} exact >
                    <Redirect to={ROUTES.SEARCH} />
                </Route>
                <Route path={ROUTES.SEARCH} exact component={Search} />
                <Route path={`${ROUTES.INFO}/:id`} component={MovieInfo} />
            </Switch>
        </Router>
    )
}