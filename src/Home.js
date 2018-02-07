import React from 'react';
import {RichText, Date} from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import Truncate from 'react-truncate';
import MainNavigation from './partials/MainNavigation';
import FooterLinkedToContactUs from './partials/FooterLinkedToContactUs';
import classNames from 'classnames';
import Chance from 'chance';
import ArticlePreview from './partials/ArticlePreview';
import FormatDate from './partials/FormatDate';
import PageFooter from "./partials/PageFooter";
import TestimonialCardBody from "./partials/TestimonialCardBody";
import Paragraphs from "./partials/Paragraphs";
import {Link} from 'react-router-dom';

import './styles/css/Home.css';


export default class Home extends React.Component {

  state = {
    doc: null,
    contactInfo: null,
    notFound: false,
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

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  fetchPage(props) {
    if (props.prismicCtx) {

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'homepage')).then((doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'contactinformation')).then(
        (contactInfo) => {
          if (contactInfo) {
            this.setState({ contactInfo });
          }
        }
      );

      return null;

    }
    return null;
  }

  render() {
    if (this.state.doc && this.state.contactInfo) {


      let data = this.state.doc.results[0].data;
      // let contactInfo = this.state.contactInfo.results[0].data;

      console.log("Here is the doc:" + JSON.stringify(data));

      return <div class="sections-page  section-white ">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="main">
          <div class="page-header header-medium-large header-filter home-background" data-parallax="true">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12  text-center">
                          <h1 class="title home-heading">{data.hero_text[0].text}</h1>
                          <h2 class="text-white sub-heading">
                            {data.hero_quote[0].text}
                          </h2>
                          <br/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div class="main main-raised-for-home" style={{'zIndex': 4}}>
            <div class="cd-section  home-background" id="about">
              <div class="container">
                <div class="features-1 home-about-section pt-5 pb-0">
                  <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h1 class="caption-text">{data.about_us_caption[0].text}</h1>
                        <h1 class="title mt-5">{data.about_us_header[0].text}</h1>
                        {RichText.render(data.about_us_text)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cd-section home-background" id="services">
              <div class="container" >
                <div class="features-1 pt-5 pb-4">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h1 class="title">{data.services_header[0].text}</h1>
                            {RichText.render(data.services_description)}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-1">
                        </div>
                        <div class="col-md-5">
                            <div class="card card-raised">
                                <div class="card-title  mt-5">
                                    <i style={{'fontSize': 73, 'color': 'darkgray'}} class="material-icons">explore</i>
                                </div>
                                <div class="row">
                                  <div class="col-md-1">
                                  </div>
                                  <div class="col-md-10">
                                    <h2 class="card-title text-center caption-text mb-5">{data.service_header_1[0].text}</h2>
                                  </div>
                                  <div class="col-md-1">
                                  </div>
                                </div>
                                <div class="mb-5 service-description">
                                  {RichText.render(data.service_description_1)}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="card card-raised">
                                <div class="card-title  mt-5">
                                    <i style={{'fontSize': 73, 'color': 'darkgray'}} class="material-icons">devices</i>
                                </div>
                                <div class="row">
                                  <div class="col-md-1">
                                  </div>
                                  <div class="col-md-10">
                                    <h2 class="card-title text-center caption-text mb-5">{data.service_header_2[0].text}</h2>
                                  </div>
                                  <div class="col-md-1">
                                  </div>
                                </div>
                                <div class="mb-5 service-description">
                                  {RichText.render(data.service_description_2)}
                                </div>
                            </div>
                        </div>
                        <div class="col-md-1">
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="cd-section  home-background" id="contact">
              <div class="container" >
                <div class="features-1 home-about-section pt-2 pb-5">
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto mb-3">
                        <h1 class="title">Contact Us</h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                      <div class="card card-collapse mt-1">
                                <div class="card-title  mb-0 pb-0">
                                  <p class="mb-0 pb-2 text-center">Nick</p>
                                </div>
                                <div class="card-body  mt-0 pt-0">
                                    <a href="tel:+61411030202" class="btn btn-inverse btn-round text-white" style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                      <i class="fa fa-phone fa-inverse" />
                                      &nbsp;0411 030 202
                                      <div class="ripple-container"></div>
                                    </a>
                                </div>
                                <div class="card-footer mt-o pt-0">
                                </div>
                            </div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                      <div class="card card-collapse mt-1">
                                <div class="card-title mb-0 pb-0">
                                  <p class="mb-0 pb-2 text-center">Prabin</p>
                                </div>
                                <div class="card-body mt-o pt-0">
                                      <a href="tel:+610420984257" class="btn btn-inverse btn-round text-white  text-center" style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                        <i class="fa fa-phone fa-inverse" />
                                        &nbsp;0420 984 257
                                        <div class="ripple-container"></div>
                                      </a>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-2"></div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto mb-0 mt-4">
                      <a href="mailto:info@kenekt.com.au" target="_blank" rel="noopener noreferrer">
                        <button class="btn btn-just-icon btn-round btn-default">
                            <i class="fa fa-envelope"></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div class="main main-raised-for-home" style={{'zIndex': 3}}>
          <PageFooter />
        </div>
      </div>;
    }else{
      return   <div className={classNames('sections-page',  'section-white')}>
        <div id="spinner-middle">
          <div>
              <i className={classNames('fa', 'fa-refresh', 'fa-spin', 'fa-5x', 'fa-fw')}></i>
          </div>
        </div>
      </div>;

    }
  }
}
