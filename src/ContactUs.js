import React from 'react';
import Prismic from 'prismic-javascript';
import MapContainer from './MapContainer';
import MainNavigation from './MainNavigation';
import PageFooter from "./PageFooter";

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
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="main main-raised">
          <div class="contact-content">
            <div class="container">
              <h2 class="title">{contactuspage.header[0].text}</h2>
              <div class="row">
                <div class="col-md-12">
                  <p class="description">{contactuspage.title_text[0].text}
                  </p>
                  <br/>
                </div>
              </div>
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
