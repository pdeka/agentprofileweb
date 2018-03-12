import React from 'react';
import classNames from 'classnames';
import '../styles/css/Loading.css';


export default class Loading extends React.Component {

  render() {
    return <div className={classNames('sections-page',  'section-white')}>
      <div id="spinner-middle">
        <div>
          <img src="./images/loading.gif" alt="loading icon"/>
        </div>
      </div>
    </div>
  }
}
