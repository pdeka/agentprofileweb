import React from 'react';

import "./styles/css/PageFooter.css";


export default class PageFooter extends React.Component {

  render() {
    return <footer class="footer">
      <div class="container">
        <nav class="pull-left">
          <ul>
            <li>
              <a href="https://www.creative-tim.com">
                Ruma Mundi
              </a>
            </li>
            <li>
              <a href="http://presentation.creative-tim.com">
                About
              </a>
            </li>
            <li>
              <a href="http://blog.creative-tim.com">
                Blog
              </a>
            </li>
          </ul>
        </nav>
        <div class="copyright pull-right">
          &copy; 2018, made with
          <i class="material-icons">favorite</i>
          by
          <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer">Kenekt</a>
        </div>
      </div>
    </footer>
  }
}
