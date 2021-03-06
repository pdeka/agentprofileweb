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
import ContactUs from './ContactUs';
import About from './About';
import Team from './Team';
import Testimonials from './Testimonials';
import Community from './Community';
import Properties from './Properties';
import './styles/css/App.css';

const App = (props) => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/home"/>
      <Route exact path="/home" render={routeProps => <Home {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route exact path="/preview" render={routeProps => <Preview {...routeProps} prismicCtx={props.prismicCtx} />} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
