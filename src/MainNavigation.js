import React from 'react';
import classNames from 'classnames';

import "./styles/css/MainNavigation.css"

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

    console.log("data :" + JSON.stringify(data));

    return <nav className={classNames(navClassNames)} color-on-scroll="100" id="sectionsNav">
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand logo-font" href="/">Ruma Mundi</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="/home" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/articles" class="nav-link">
                Meet Ruma
              </a>
            </li>
            <li class="nav-item">
              <a href={data.properties_link.url} class="nav-link" target="_blank">
                Properties
              </a>
            </li>
            <li class="nav-item">
              <a href="/contactus" class="nav-link">
                Contact Us
              </a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href={data.facebook_link.url} class="nav-link" target="_blank">
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href={data.instagram_link.url} class="nav-link" target="_blank">
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href={data.youtube_link.url} class="nav-link" target="_blank">
                <i class="fa fa-youtube"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href={data.linkedin_link.url} class="nav-link" target="_blank">
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li class="nav-item">
              <a href={data.rate_my_agent_link.url}
                  class="nav-link" target="_blank">
              <div style={{'marginBottom': '-1px'}}>
                <i class="fa icon-ratemyagent" style={{'fontSize': '17px'}}></i>
              </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  }
}
