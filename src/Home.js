import React from 'react';
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

      // console.log("Here is the doc:" + JSON.stringify(data));

      return <div class="sections-page  section-white ">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="main">
          <div class="page-header header-xs-small header-filter home-background" data-parallax="true">
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
            <div class="cd-section">
              <div class="container" >
                <div class="features-1 home-about-section pt-5 pb-5">
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto">
                        <h1 class="title">{data.about_us_header[0].text}</h1>
                        <Paragraphs paragraphs={data.about_us_text} clazz={"description"}/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cd-section">
              <div class="container">
                <div class="features-1 pt-0 pb-5">
                    <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                            <h1 class="title">{data.services_header[0].text}</h1>
                            <Paragraphs paragraphs={data.services_description} clazz={"description"}/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="info">
                                <div class="icon icon-disabled">
                                    <i class="material-icons">explore</i>
                                </div>
                                <h4 class="info-title">{data.service_header_1[0].text}</h4>
                                <Paragraphs paragraphs={data.service_description_1} />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="info">
                                <div class="icon icon-disabled">
                                    <i class="material-icons">devices</i>
                                </div>
                                <h4 class="info-title">{data.service_header_2[0].text}</h4>
                                <Paragraphs paragraphs={data.service_description_2} />
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="cd-section">
              <div class="container" >
                <div class="features-1 home-about-section pt-0 pb-5">
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto mb-5">
                        <h1 class="title">Contact Us</h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                      <div class="card card-profile card-raised mt-1">
                                <div class="card-title mb-0 pb-0">
                                  <p>Prabin</p>
                                </div>
                                <div class="card-body mt-o pt-0">
                                  <div class="row">
                                      <a href="tel:+610420984257" class="btn btn-inverse btn-round text-white  text-center" style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                        <i class="fa fa-phone fa-inverse" />
                                        &nbsp;0420 984 257
                                        <div class="ripple-container"></div>
                                      </a>
                                  </div>
                                </div>
                            </div>
                    </div>
                    <div class="col-md-2"></div>
                    <div class="col-md-3">
                      <div class="card card-profile card-raised mt-1">
                                <div class="card-title  mb-0 pb-0">
                                  <p>Nick</p>
                                </div>
                                <div class="card-body  mt-0 pt-0">
                                  <div class="row">
                                    <a href="tel:+61411030202" class="btn btn-inverse btn-round text-white" style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                      <i class="fa fa-phone fa-inverse" />
                                      &nbsp;0411 030 202
                                      <div class="ripple-container"></div>
                                    </a>
                                  </div>
                                </div>
                                <div class="card-footer mt-o pt-0">
                                </div>
                            </div>
                    </div>
                    <div class="col-md-2"></div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto mb-0 mt-0">
                      <a href="mailto:info@kenekt.com.au" target="_blank" rel="noopener noreferrer">
                        <button class="btn btn-disabled btn-round">
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
