import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import Preview from './Preview';
import NotFound from './NotFound';
import Home from './Home';
import './App.css';

const App = (props) => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/home"/>
      <Route exact path="/home" component={Home} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
