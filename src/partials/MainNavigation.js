import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import "../styles/css/MainNavigation.css"

export default class MainNavigation extends React.Component {

  render() {
    let data = this.props.thisProp;
    let navClassNames = {
      'navbar': true,
      'navbar-color-on-scroll': true,
      'navbar-transparent': true,
      'fixed-top': true,
      'navbar-expand-lg': true
    }

    navClassNames['navbar-transparent'] = this.props.navBarTransparent;

    return <nav className={classNames(navClassNames)} color-on-scroll="100" id="sectionsNav">
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand logo-font" href="/">/kəˈnɛkt/</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
          </ul>
        </div>
      </div>
    </nav>
  }
}
