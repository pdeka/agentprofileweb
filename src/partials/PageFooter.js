import React from 'react';
import classNames from 'classnames';

import "../styles/css/PageFooter.css";


export default class PageFooter extends React.Component {

  render() {
    return <footer className={classNames('footer')}>
          <div className={classNames('container')}>
              <nav className={classNames('float-left')}>
              </nav>
              <div className={classNames('copyright', 'float-left')}>
                &copy; 2018, made with &nbsp;
                <i className={classNames('material-icons')}>favorite</i>
                &nbsp; by &nbsp;
                <a href="https://www.kenekt.com.au" target="_blank" rel="noopener noreferrer">Kenekt</a>
              </div>
          </div>
      </footer>;

  }
}
