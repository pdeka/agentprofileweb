import React from 'react';

export default class FooterLinkedToContactUs extends React.Component {

  render() {
    let data = this.props.data;
    return <footer class="footer footer-white">
      <div class="container">
        <div class="container">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto">
              <div>
                <h5 class="title">{data}
                  <a href="/contactus">
                    <button class="btn btn-disabled btn-round">
                      Contact Us
                      <div class="ripple-container"></div>
                    </button>
                  </a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;

  }
}
