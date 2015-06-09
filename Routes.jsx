import React from 'react';
import Router from 'react-router';
const Route = Router.Route
const DefaultRoute = Router.DefaultRoute
import Root from './components/Root.jsx';
import Index from './components/Index.jsx';
import About from './components/About.jsx';

let Routes = (
  <Route handler={Root} path='/'>
    <DefaultRoute handler={Index} />
    <Route path='/about' handler={About} />
  </Route>
)

export default Routes;
