import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import FooterLinkedToContactUs from "./partials/FooterLinkedToContactUs";
import PageFooter from "./partials/PageFooter";
import {Link} from 'react-router-dom';

import './styles/css/About.css';

export default class About extends React.Component {

  state = {
    doc: null,
    aboutpage: null,
    notFound: false
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
          this.setState({doc});
        } else {
          this.setState({
            notFound: !doc
          });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'aboutpage')).then((aboutpage) => {
        if (aboutpage) {
          this.setState({aboutpage});
        }
      });

      return null;

    }
    return null;
  }

  render() {
    if (this.state.doc && this.state.aboutpage) {

      let data = this.state.doc.results[0].data;
      let aboutpageResults = this.state.aboutpage.results;

      return <div class="sections-page">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="page-header header-medium header-filter" data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
        <div class="container hero-text-margin">
              <div class="row">
                <div class="col-md-3">
                </div>
                <div class="col-md-6">
                  <div class="iframe-container">
                      <iframe height="300" src="https://www.youtube.com/embed/IN6QnLpVEPI" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen=""></iframe>
                  </div>
                </div>
                <div class="col-md-3">
                </div>
              </div>
              <div class="row justify-content-center mt-5">
                <h2 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
              </div>
        </div>

        </div>
        <div class="main main-raised">
          <div class="features-1 pt-5 pb-3">
            <div class="container">
              <div class="row">
                  <div class="col-md-8 ml-auto mr-auto">
                      <h3 class="title">Serving you with love and care</h3>
                      <p class="description"  >
                      Ruma Mundi's name has become synonymous with real estate in the Hills District. During her dynamic career spanning close to 20 years, Ruma has succeeded in bringing about a positive and refreshing change to customer service in the real estate industry, not just in the North West of Sydney, but in the country as a whole. She has earned her place in an elite group of agents, through highly effective negotiating strategies that time and again have produced exceptional sale prices for her clients. Her integrity and professionalism has earned her respect not just among her peers, but with the community as a whole. Behind her personable manner and respectful approach is a sharp and strategic thinker with exemplary sales skills. Displaying absolute integrity  Ruma’s dedication to each individual campaign is reflected in the consistency of her results.
                      </p>
                      <p class="description"  >
                      She is a hard working mom of 2 beautiful daughters, Samara and Safira. Being a mom gives her a perspective on what a growing family needs. Nick, her husband helps her out between his work as an executive at Woolworths, and making time for the family. Ruma is keenly aware of the juggles of everyday life in the North West of Sydney, and the pressures families today have to work with to live happy and stay healthy.
                      </p>

                      <p class="description"  >

                      Principal of First National Hills Direct, Ruma is a hard-working director who has an unwavering dedication for her Agency and her staff. With an Master’s degree in business administration and a bachelor’s degree in commerce, she has the education to back her up. Ruma and her team's success are driven by a strong market knowledge of the Hills District and a passion for people, coupled with care and integrity in all their dealings.
                      </p>
                      <div class="icon">
                        <i class="material-icons">format_quote</i>
                      </div>
                      <blockquote class="blockquote text-center">
                        <p class="mb-0">
                          I have been selling real estate in Sydney’s Hills District for nearly 20 years. A major portion of the homes that I sell are either past clients, or referrals. My passion and motivation is continually driven forward by the satisfaction I receive when I secure an exceptional outcome for my clients.
                        </p>
                        <footer class="blockquote-footer">Ruma Mundi</footer>
                      </blockquote>
                  </div>
              </div>
            </div>
          </div>
          <div class="team-2 section-image pt-5 pb-3" id="team-5" style={{'backgroundImage': 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
              <div class="container">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto text-center">
                          <h3 class="title">Awards and Recognitions</h3>
                          <blockquote class="blockquote-without-left-line text-center text-white">
                            <p class="mb-0">
                              While it is an honour&nbsp;to be recognised both nationally and globally, my true reward comes from the satisfaction that I gain from a good result for my clients.&nbsp;
                            </p>
                            <footer class="blockquote-footer text-white">Ruma</footer>
                          </blockquote>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">#4 | Top Salesperson</h4>
                                  <p class="text-white awards-para">
                                     GEM Awards
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">Diamond Award</h4>
                                  <p class="text-white awards-para">
                                    Residental Commission, FN, 2016
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">#4 | Top Salesperson</h4>
                                  <p class="text-white awards-para">
                                    FN Real Estate, 2016
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">Grand Centurion</h4>
                                  <p class="text-white awards-para">
                                    Top 1% Producer Globally, 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">Silver Auction Certificate</h4>
                                  <p class="text-white awards-para">
                                    3rd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">Top Principal (GCC) NSW</h4>
                                  <p class="text-white awards-para">
                                    2nd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">Grand Centurion</h4>
                                  <p class="text-white awards-para">
                                    Top 1% Producer Globally, 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">Silver Auction Certificate</h4>
                                  <p class="text-white awards-para">
                                    3rd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy  fa-inverse"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">Top Principal (GCC) NSW</h4>
                                  <p class="text-white awards-para">
                                    2nd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row awards-image-section">
                      <div class="col-md-4">
                          <div class="card card-profile card-plain">

                              <div class="card-header card-header-image mb-0" style={{'height': '166px'}}>
                                  <a href="#pablo">
                                      <img class="img" src="./images/REB-top-50.png" style={{'height': '166px'}} alt="REB top 50 Ruma Mundi North West Sydney"/>
                                  </a>
                              </div>
                              <div class="card-body ">
                                  <h4 class="card-title">#29 | REB Awards, 2017</h4>
                              </div>

                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="card card-profile card-plain mb-0">
                              <div class="card-header card-header-image" style={{'height': '166px'}}>
                                  <a href="#pablo">
                                      <img class="img" src="./images/First-National-Real-Estate-SEQA-441x269.png" style={{'height': '166px'}} alt="First National Real Estate Ruma Mundi Sydney"/>
                                  </a>
                              </div>
                              <div class="card-body ">
                                  <h4 class="card-title">#2 | Combined Highest Gross Sales</h4>
                                  <p class="text-white">First National Real Estate NSW Network</p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="card card-profile card-plain">
                              <div class="card-header card-header-image" style={{'height': '166px'}}>
                                  <a href="#pablo">
                                      <img class="img" src="./images/REBsalesagentoftheyear.jpeg" style={{'height': '166px'}} alt="REB sales agent of the year Ruma Mundi Sydney"/>
                                  </a>
                              </div>
                              <div class="card-body ">
                                  <h4 class="card-title">Finalist | Sales Agent of the Year</h4>
                                  <p class="text-white">REB Awards 2017 (Metropolitan)</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="team-3 pt-5 pb-0">
              <div class="container">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto text-center">
                          <h3 class="title">Ruma in the community</h3>
                          <p class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                      <Link to="/community" class="nav-link">
                        <button class="btn btn-primary btn-round">
                          Read More
                          <div class="ripple-container"></div>
                        </button>
                      </Link>
                    </div>
                  </div>
              </div>
          </div>
          <FooterLinkedToContactUs data={"Contact Ruma for a market appraisal"}/>
        </div>
        <PageFooter />
      </div>;

    } else {
      return <div className={classNames('sections-page', 'section-white')}>
        <div id="spinner-middle">
          <div>
            <i className={classNames('fa', 'fa-refresh', 'fa-spin', 'fa-5x', 'fa-fw')}></i>
          </div>
        </div>
      </div>;

    }
  }
}
