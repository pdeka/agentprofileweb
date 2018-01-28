import React from 'react';

import "./styles/css/PageFooter.css";


export default class PageFooter extends React.Component {

  render() {
    return <footer class="footer">
      <div class="container">
        <div class="copyright jutify-content-center">
          &copy; 2018, made with &nbsp;
          <i class="material-icons">favorite</i>
          &nbsp; by &nbsp;
          <a href="https://www.kenekt.com.au" target="_blank" rel="noopener noreferrer">Kenekt</a>
        </div>
      </div>
    </footer>
  }
}
