import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

const Main = () => (
    <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/Resume' component={Resume} />
        <Route exact path='/Projects' component={Projects} />
        <Route exact path='/Contact' component={Contact} />
    </Switch>
);

export default Main;