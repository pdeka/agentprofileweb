import React from 'react';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import RegularButton from '../components/CustomButtons/RegularButton';


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
                  <RegularButton
                      color="primary"
                      round
                      aria-label="home"
                      onClick={this.onClick()} >
                      Contact Us
                  </RegularButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>;
  }
}
