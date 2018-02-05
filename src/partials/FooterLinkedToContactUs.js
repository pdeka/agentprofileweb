import React from 'react';
import {Link} from 'react-router-dom';

export default class FooterLinkedToContactUs extends React.Component {

  onClick() {
    window.scrollTo(0, 0);
  }

  render() {
    let data = this.props.data;
    return <div class="subscribe-line">
        <div class="container">
          <div class="row">
            <div class="col-md-12 ml-auto mr-auto">
              <div style={{'textAlign': 'center'}}>
                <h5 class="title  footer-question-text">{data}
                </h5>
                <Link to="/home">
                  <button class="btn btn-primary btn-round" onClick={this.onClick()}>
                    Contact Us
                    <div class="ripple-container"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>;
  }
}
