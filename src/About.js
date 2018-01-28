import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './MainNavigation';
import classNames from 'classnames';
import ArticlePreview from './ArticlePreview';
import FooterLinkedToContactUs from "./FooterLinkedToContactUs";
import PageFooter from "./PageFooter";

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
          <div class="container">
              <div class="features-1 no-padding-bottom">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto">
                          <h2 class="title">Meet Ruma</h2>
                          <h5 class="description">
                            Behind Ruma’s personable manner and respectful approach is a sharp and strategic thinker with exemplary sales skills. With nearly 20 years’ experience in the real estate industry, Ruma has honed many highly effective negotiating strategies that time and again have produced exceptional sale prices for her clients. Displaying absolute integrity and professionalism, Ruma’s dedication to each individual campaign is reflected in the consistency of her results.
                          </h5>
                          <div class="icon">
                            <i class="material-icons">format_quote</i>
                          </div>
                          <blockquote class="blockquote text-center">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <footer class="blockquote-footer">Ruma Mundi</footer>
                          </blockquote>
                      </div>
                  </div>
              </div>
          </div>
          <div class="team-2 section-dark" id="team-5" >
              <div class="container">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto text-center">
                          <h2 class="title">Awards and Recognitions</h2>
                          <h5 class="description" style={{'marginBottom': 0}}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          </h5>
                      </div>
                  </div>
              </div>
          </div>
          <div class="team-2" id="team-2">
              <div class="container">
                  <div class="row">
                      <div class="col-md-4">
                          <div class="card card-profile card-plain">
                              <div class="card-header card-header-image" style={{'height': '198px'}}>
                                  <a href="#pablo">
                                      <img class="img" src="./images/REB-top-50.png" style={{'height': '198px'}}/>
                                  </a>
                              </div>
                              <div class="card-body ">
                                  <h4 class="card-title">#29 | REB Awards, 2017</h4>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="card card-profile card-plain">
                              <div class="card-header card-header-image" style={{'height': '198px'}}>
                                  <a href="#pablo">
                                      <img class="img" src="./images/First-National-Real-Estate-SEQA-441x269.png" style={{'height': '198px'}}/>
                                  </a>
                              </div>
                              <div class="card-body ">
                                  <h4 class="card-title">#2 | Combined Highest Gross Sales</h4>
                                  <h6 class="card-category text-muted">First National Real Estate NSW Network</h6>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="card card-profile card-plain">
                              <div class="card-header card-header-image" style={{'height': '198px'}}>
                                  <a href="#pablo">
                                      <img class="img" src="./images/REBsalesagentoftheyear.jpeg" style={{'height': '198px'}}/>
                                  </a>
                              </div>
                              <div class="card-body ">
                                  <h4 class="card-title">Finalist | Sales Agent of the Year - Metropolitan </h4>
                                  <h6 class="card-category text-muted">REB Awards 2017</h6>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">#4 | Top Salesperson</h4>
                                  <p>
                                     Residental | GEM Awards | First National Real Estate Australia, 2016
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">Diamond Award</h4>
                                  <p>
                                    Residental Commission - First National Real Estate (NSW), 2016
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">#4 | Top Salesperson</h4>
                                  <p>
                                    First National Real Estate (NSW), 2016
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">Grand Centurion</h4>
                                  <p>
                                    Top 1% Producer Globally, 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">Silver Auction Certificate</h4>
                                  <p>
                                    3rd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">Top Principal (GCC) NSW</h4>
                                  <p>
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
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">Bronze Auction Certificate</h4>
                                  <p>
                                    2nd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">Top Principal (GCC) NSW</h4>
                                  <p>
                                    1st Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title">Top Residential Principal</h4>
                                  <p>
                                    (Units) NSW - 1st Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <FooterLinkedToContactUs data={aboutpageResults[0].data.footer_content[0].text}/>
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
