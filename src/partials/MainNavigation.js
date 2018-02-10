import React from 'react';
import classNames from 'classnames';

import "../styles/css/MainNavigation.css"

export default class MainNavigation extends React.Component {

  render() {
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
          <a className={classNames('navbar-brand', 'logo-font')} href="/">/kəˈnɛkt/</a>
          <button className={classNames('navbar-toggler')} type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className={classNames('navbar-toggler-icon')}></span>
            <span className={classNames('navbar-toggler-icon')}></span>
            <span className={classNames('navbar-toggler-icon')}></span>
          </button>
        </div>
        <div className={classNames('collapse', 'navbar-collapse')}>
          <ul className={classNames('navbar-nav', 'ml-auto')}>
            <li className={classNames('nav-item')}>
              <a href="#home" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Home</a>
            </li>
            <li className={classNames('nav-item')}>
              <a href="#about" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>About</a>
            </li>
            <li className={classNames('nav-item')}>
              <a href="#services" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Services</a>
            </li>
            <li className={classNames('nav-item')}>
              <a href="#contact" className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  }
}
