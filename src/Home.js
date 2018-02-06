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
                <div class="features-3 home-about-section pt-2">
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto">
                    <div class="card card-profile card-plain">
                          <div class="card-body">
                              <h2 class="card-title">Why Us</h2>
                              <p class="card-description text-black">
                                Kenekt Digital is a business focussed on digital and technology consulting. We have the expertise to connect creative energy, technical know-how and business experience to enable our clients to bring their digital ambitions to life.
                              </p>
                          </div>
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
