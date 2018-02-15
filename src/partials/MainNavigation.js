import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';

import "../styles/css/MainNavigation.css"

export default class MainNavigation extends React.Component {

  render() {
    // let data = this.props.thisProp;
    let navClassNames = {
      'navbar': true,
      'navbar-color-on-scroll': true,
      'navbar-transparent': true,
      'fixed-top': true,
      'navbar-expand-lg': true
    }

    navClassNames['navbar-transparent'] = this.props.navBarTransparent;

    return <nav className={classNames(navClassNames)} color-on-scroll="100" id="sectionsNav">
      <div className={classNames('container')}>
        <div className={classNames('navbar-translate')}>
          <a className={classNames('navbar-brand', 'logo-font')} href="/">Ruma Mundi</a>
          <button className={classNames('navbar-toggler')} type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className={classNames('navbar-toggler-icon')}></span>
            <span className={classNames('navbar-toggler-icon')}></span>
            <span className={classNames('navbar-toggler-icon')}></span>
          </button>
        </div>
        <div className={classNames('collapse', 'navbar-collapse')}>
          <ul className={classNames('navbar-nav', 'ml-auto')}>
            <li className={classNames('nav-item')}>
              <Link to="/home" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Home</Link>
            </li>
            <li className={classNames('nav-item')}>
              <Link to="/about" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Meet Ruma</Link>
            </li>
            <li className={classNames('nav-item')}>
              <Link to="/team" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>The Team</Link>
            </li>
            <li className={classNames('nav-item')}>
              <Link to="/community" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Our Community</Link>
            </li>
            <li className={classNames('nav-item')}>
              <Link to="/testimonials" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Client Stories</Link>
            </li>
            <li className={classNames('nav-item')}>
              <Link to="/properties" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Properties</Link>
            </li>
            <li className={classNames('nav-item')} style={{'display': 'none'}}>
              <Link to="/contactus" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  }
}
