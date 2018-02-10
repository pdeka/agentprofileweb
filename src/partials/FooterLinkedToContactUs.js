import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';

export default class FooterLinkedToContactUs extends React.Component {

  onClick() {
    window.scrollTo(0, 0);
  }

  render() {
    let data = this.props.data;
    return <div className={classNames('subscribe-line')}>
        <div className={classNames('container')}>
          <div className={classNames('row')}>
            <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
              <div style={{'textAlign': 'center'}}>
                <h5 className={classNames('title', 'footer-question-text')}>{data}
                </h5>
                <Link to="/home">
                  <button className={classNames('btn', 'btn-primary', 'btn-round')} onClick={this.onClick()}>
                    Contact Us
                    <div className={classNames('ripple-container')}></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>;
  }
}
