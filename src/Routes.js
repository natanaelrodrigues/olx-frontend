import React from 'react';

import About from './pages/About';
import Home from './pages/Home';

import { Switch, Route } from 'react-router-dom';

export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
        </Switch>
    );
}