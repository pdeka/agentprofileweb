import React from 'react';
import classNames from 'classnames';

import "../styles/css/PageFooter.css";


export default class PageFooter extends React.Component {

  render() {
    return <footer className={classNames('footer','footer-white')}>
          <div class="container">
              <ul class="social-buttons">
                  <li>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-twitter" target="_blank">
                          <i class="fa fa-twitter"  style={{'fontSize': '24px'}} ></i>
                      </a>
                  </li>
                  <li>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-facebook"  target="_blank">
                          <i class="fa fa-facebook-square"  style={{'fontSize': '24px'}}></i>
                      </a>
                  </li>
                  <li>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-linkedin"  target="_blank">
                          <i class="fa fa-linkedin"  style={{'fontSize': '24px'}}></i>
                      </a>
                  </li>
                  <li>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-instagram"  target="_blank">
                          <i class="fa fa-instagram"  style={{'fontSize': '24px'}}></i>
                      </a>
                  </li>
                  <li>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-youtube"  target="_blank">
                          <i class="fa fa-youtube-play"  style={{'fontSize': '24px'}}></i>
                      </a>
                  </li>
                  <li>
                      <a href="#pablo" class="btn btn-just-icon btn-link btn-youtube"  target="_blank">
                          <i class="fa icon-ratemyagent"  style={{'fontSize': '18px', 'color': '#37474f'}}></i>
                      </a>
                  </li>
              </ul>
              <div className={classNames('copyright', 'pull-center')}>
                &copy; 2018, made with &nbsp;
                <i className={classNames('material-icons')}>favorite</i>
                &nbsp; by &nbsp;
                <a href="https://www.kenekt.com.au" target="_blank" rel="noopener noreferrer">Kenekt</a>
              </div>
          </div>
      </footer>;

  }
}
