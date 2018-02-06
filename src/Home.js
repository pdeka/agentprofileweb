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

      return <div class="sections-page  section-white ">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="main">
          <div class="page-header header-xs-small header-filter home-background" data-parallax="true">
              <div class="container">
                  <div class="row">
                      <div class="col-md-12  text-center">
                          <h1 class="title home-heading">/kəˈnɛkt/</h1>
                          <h2 class="text-white sub-heading">We connect business strategy with creative design and technology
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
                        <h1 class="title">Why Us</h1>
                        <p class="description text-black">
                          Kenekt Digital is a business focussed on digital and technology consulting. We have the expertise to connect creative energy, technical know-how and business experience to enable our clients to bring their digital ambitions to life.
                        </p>
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
                            <h1 class="title">Our Services</h1>
                            <p class="description  text-black">
                              asdasd asdasda sda asd asdasd asdad asd as
                            </p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="info">
                                <div class="icon icon-info">
                                    <i class="material-icons">chat</i>
                                </div>
                                <h4 class="info-title">Digital Advisory</h4>
                                <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="info">
                                <div class="icon icon-success">
                                    <i class="material-icons">verified_user</i>
                                </div>
                                <h4 class="info-title">Digital Enablement</h4>
                                <p>
                                  Web & mobile development, required to bring your strategy to life.
                                  System integrators
                                  Social media development
                                  Data insights and analytics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div class="cd-section">
              <div class="container" >
                <div class="features-1 home-about-section pt-5 pb-5">
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto">
                        <h1 class="title">Contant Us</h1>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                        <div class="info">
                            <h4 class="info-title">Nick</h4>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="info">
                            <h4 class="info-title">Nick</h4>
                        </div>
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
