import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import PrismicConfig from './prismic-configuration';
import Prismic from 'prismic-javascript';
import MapContainer from './MapContainer';
import ArticlePreview from './ArticlePreview';
import Truncate from 'react-truncate';
import FormatDate from './FormatDate';

export default class MainNavigation extends React.Component {

  render() {
    let data = this.props.thisProp;
    return <nav class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg " color-on-scroll="100" id="sectionsNav">
      <div class="container">
        <div class="navbar-translate">
          <a class="navbar-brand" href="#">Ruma Mundi Logo</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="#" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="#pablo" class="nav-link">
                Articles & Videos
              </a>
            </li>
            <li class="nav-item">
              <a href={data.properties_link.url} class="nav-link">
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
                <i class="fa fa-facebook-square"></i>
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
          </ul>
        </div>
      </div>
    </nav>
  }
}
