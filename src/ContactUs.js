import React from 'react';
import Prismic from 'prismic-javascript';
import MapContainer from './partials/MapContainer';
import MainNavigation from './partials/MainNavigation';
import PageFooter from "./partials/PageFooter";

import './styles/css/ContactUs.css';

export default class ContactUs extends React.Component {

  state = {
    homepageDoc: null,
    contactuspageDoc: null,
    contactInfo: null
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'homepage')).then((homepageDoc) => {
        if (homepageDoc) {
          this.setState({homepageDoc});
        } else {
          this.setState({
            notFound: !homepageDoc
          });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'contactuspage')).then((contactuspageDoc) => {
        if (contactuspageDoc) {
          this.setState({contactuspageDoc});
        } else {
          this.setState({
            notFound: !contactuspageDoc
          });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'contactinformation')).then((contactInfo) => {
        if (contactInfo) {
          this.setState({contactInfo});
        }
      });

      return null;
    }
    return null;
  }

  render() {
    if (this.state.homepageDoc && this.state.contactuspageDoc && this.state.contactInfo) {

      let homepage = this.state.homepageDoc.results[0].data;
      let contactuspage = this.state.contactuspageDoc.results[0].data;
      let contactInfo = this.state.contactInfo.results[0].data;

      return <div class="contact-us ">
        <MainNavigation thisProp={homepage} navBarTransparent={true}/>
        <div class="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
          <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="title mb-0">We would love a coffee with you</h2>
                  <h5 class="text-white hero-paragraph-text mt-0">Give us a ring at the number below or visit us at the office
                  </h5>
                </div>
              </div>
              <div class="row">
                <div class="col-md-7">
                  <div class="card card-profile card-plain mt-1">
                      <div class="row">
                          <div class="col-md-7  pl-0 ml-0">
                              <div class="card-footer pb-0 pt-0" style={{'paddingLeft': '14px'}}>
                                  <a href="tel:+61411030202" class="btn btn-inverse btn-round" style={{'fontSize': '16px', 'fontWeight': '900', 'color': 'white', 'textTransform': 'none'}}>
                                    <i class="fa fa-phone fa-inverse" />
                                    &nbsp;0411 030 202
                                    <div class="ripple-container"></div>
                                  </a>
                              </div>
                              <div class="card-footer pb-0 pt-0">
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-facebook" target="_blank">
                                      <i class="fa fa-facebook fa-inverse"></i>
                                  </a>
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-instagram" target="_blank">
                                      <i class="fa fa-instagram fa-inverse"></i>
                                  </a>
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-youtube" target="_blank">
                                      <i class="fa fa-youtube fa-inverse"></i>
                                  </a>
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-linkedin" target="_blank">
                                      <i class="fa fa-linkedin fa-inverse"></i>
                                  </a>
                                  <a href="" class="btn btn-just-icon btn-link" target="_blank">
                                    <div style={{'marginBottom': '-1px'}}>
                                      <i class="fa icon-ratemyagent fa-inverse" style={{'fontSize': '17px'}}></i>
                                    </div>
                                  </a>
                                  <a class="btn btn-just-icon btn-link" href="mailto:name@email.com" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-envelope fa-inverse"/>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
          </div>

        </div>
        <div class="main main-raised">
          <div class="contact-content">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <div id="contactUsMap" class="big-map">
                    <MapContainer/>
                  </div>
                </div>
                <div class="col-md-4 ml-auto">
                  <div class="info info-horizontal">
                    <div class="icon icon-disabled">
                      <i class="fa fa-volume-control-phone"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Give us a ring</h4>
                      <a href="tel:+61411030202" class="btn btn-primary btn-round" style={{'fontSize': '16px', 'fontWeight': '900', 'color': 'white', 'textTransform': 'none'}}>0411 030 202<div class="ripple-container"></div></a>
                    </div>
                  </div>
                  <div class="info info-horizontal">
                    <div class="icon icon-disabled">
                      <i class="fa fa-location-arrow"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">... Or find us at the office</h4>
                      <p>
                        {contactInfo.address_line_1[0].text}
                        <br/> {contactInfo.address_line_2[0].text}
                        <br/> {contactInfo.address_line_3[0].text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    } else {
      return <div class="sections-page  section-white">
        <div id="spinner-middle">
          <div>
            <i class="fa fa-refresh fa-spin fa-5x fa-fw"></i>
          </div>
        </div>
      </div>

    }
  }
}
