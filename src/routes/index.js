import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import CounterApp from './../components/CounterApp';
import AboutCounter from '../components/AboutCounter';

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={CounterApp} exact={true} /> 
                <Route path='/about' component={AboutCounter} />
            </Switch>
        </BrowserRouter>
    );
};