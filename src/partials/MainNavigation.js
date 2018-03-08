import React from 'react';
import classNames from 'classnames';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

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
          <a className={classNames('navbar-brand')} href="/">
            <img src="./images/kenekt-logo4.png" alt="Kenekt Logo"/>
          </a>
          <button className={classNames('navbar-toggler')} type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className={classNames('navbar-toggler-icon')}></span>
            <span className={classNames('navbar-toggler-icon')}></span>
            <span className={classNames('navbar-toggler-icon')}></span>
          </button>
        </div>
        <div className={classNames('collapse', 'navbar-collapse')}>
          <ul className={classNames('navbar-nav', 'ml-auto')}>
            <li className={classNames('nav-item')}>
              <Link to="home" spy={false} smooth={true} duration={1000} delay={300} className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Home</Link>
            </li>
            <li className={classNames('nav-item')}>
              <Link to="about" spy={false} smooth={true} duration={1000} delay={300} className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>About</Link>
            </li>
            <li className={classNames('nav-item')}>
              <Link to="services" spy={false} smooth={true} duration={1000} delay={300} className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Services</Link>
            </li>
            <li className={classNames('nav-item')}>
              <Link to="contact" spy={false} smooth={true} duration={1000} delay={300} className={classNames('nav-link', 'bold-navigation', 'nav-project-specfic')}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  }
}
