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
    articles: null,
    testimonials: null,
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

      // const headerSummaryParagraphs = data.top_level_text_1.map((para, index) => {return <div key={index}>{para.text}</div>})
      console.log("This is the home page:" + data);

      return <div class="sections-page  section-white ">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="main">
          <div class="page-header header-filter" data-parallax="true">
              <div class="container hero-text-margin">
                  <div class="row">
                      <div class="col-md-8">
                          <h2 class="title">Real estate, done differently</h2>
                          <h5 class="text-white hero-paragraph-text">Ruma’s professional approach has led to unparalleled results for her clients.
                            She invests in long term relationships with her clients, being deeply aware that selling or buying a house
                            is a significant decision, that extends far beyond a financial transaction
                          </h5>
                          <br/>
                      </div>
                  </div>
              </div>
              <video autoPlay loop id="video-background" muted plays-inline="true" preload="auto" poster="https://prismic-io.s3.amazonaws.com/rumamundi%2F311dd30e-7826-4c90-ae05-4cf3141ecff6_videoversion2-poster.png">
                <source src="https://prismic-io.s3.amazonaws.com/rumamundi%2Ffafbff33-efae-411d-8bb4-01ed574cb22f_ruma+website+video+v2.mp4" type="video/mp4"/>
              </video>
          </div>
        </div>
        <div class="main main-raised-for-home" style={{'zIndex': 4}}>
            <div class="cd-section">
            <div class="container" >
              <div class="features-3 home-about-section">
                <div class="row">
                  <div class="col-md-12 ml-auto mr-auto">
                  <div class="card card-profile card-plain">
                      <div class="row">
                          <div class="col-md-5">
                              <div class="card-header card-header-image">
                                  <a href="#pablo">
                                      <img class="img" src="./images/180131_NKnight_Ruma_0017.jpg" alt="please fill" />
                                  </a>
                              </div>
                          </div>
                          <div class="col-md-7">
                              <div class="card-body">
                                  <h3 class="card-title">Passion Integrity Care</h3>
                                  <p class="card-description text-black">
                                    Ruma's name is synonymous with the real estate industry in the Hills District.
                                    She is among the REB top 50, a director, a business owner, but above all a mother of 2 beautiful daughters, Samara and Safira, and a person renowned in the community for her dedication, her integrity and her compassion.
                                  </p>
                                  <Link to="/about" style={{'marginLeft' : '25px'}} class="nav-link">
                                    <button class="btn btn-primary btn-round">
                                      Meet Ruma
                                      <div class="ripple-container"></div>
                                    </button>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div class="cd-section section-dark">
              <div class="container" >
                <div class="features-3 home-team-section">
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto">
                    <div class="card card-profile card-plain">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card-body pt-0 mt-0 pb-5">
                                    <h3 class="card-title">The Team</h3>
                                    <p class="card-description">
                                      People rarely achieve much without a good supportive team around them. We truely believe that we have the best team in the North West of Sydney.
                                      Our extensive experience, local knowledge, attention to details and determination to do the best for our clients, has been the bed rock of our success.
                                      However, our true strength is in our positivity and humility.
                                      We pride ourselves with the fact that we have managed to preserve a sense of approachability and hospitality,
                                      with a deep understanding that being the agent you can trust and seek advice from, has been a core competency of our endeavour so far.
                                    </p>
                                    <Link to="/team" style={{'marginLeft' : '25px'}}>
                                        <button class="btn btn-primary btn-round">
                                          Meet The Team
                                          <div class="ripple-container"></div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-header card-header-image">
                                        <img class="img" src="https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg" alt="please fill" />
                                </div>
                            </div>
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
