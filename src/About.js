import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './MainNavigation';
import classNames from 'classnames';
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
        <div class="page-header header-small header-filter" data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <h2 class="title pb-0 mb-0" >Meet Ruma</h2>
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
                                <a href={data.rate_my_agent_link.url} class="btn btn-just-icon btn-link" target="_blank">
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
          <div class="container">
              <div class="features-1 no-padding-bottom">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto">
                          <h2 class="title">Serving you with love and care</h2>
                          <p class="description"  >
                            In the past decade, Ruma Mundi's name has become synonymous with Real Estate in the Hills District.  Behind her personable manner and respectful approach is a sharp and strategic thinker with exemplary sales skills. With nearly 20 years’ experience in the real estate industry, Ruma has honed highly effective negotiating strategies that time and again have produced exceptional sale prices for her clients. Displaying absolute integrity and professionalism, Ruma’s dedication to each individual campaign is reflected in the consistency of her results.
                          </p>
                          <p class="description"  >
                            She is a hard working mom of 2 beautiful daughters, Samara and Safira, which among other things, gives her a perspective on what a growing family needs. Nick, her husband helps her out between his work as an executive at Woolworths, and making time for Samara and Safira. Ruma is keenly aware of the juggles of everyday life in the North West of Sydney, and the pressures families today have to work with to live happy and stay healthy.
                          </p>
                          <p class="description"  >
                            Principal of First National Hills Direct, Ruma is a hard-working, dedicated director who has an unwavering dedication for her Agency and her staff.  With an Master’s degree in business administration and a bachelor’s degree in commerce, she has the education to back her up.  Ruma and her team's success are driven by having a strong market knowledge of the Hills District and having a passion for people coupled with a persona that is caring and approachable. During her dynamic career, Ruma has succeeded in bringing about a positive and refreshing change to customer service in the real estate industry, not just in the North West of Sydney, but in the country as a whole.
                          </p>
                          <div class="icon">
                            <i class="material-icons">format_quote</i>
                          </div>
                          <blockquote class="blockquote text-center">
                            <p class="mb-0">
                              I have been selling real estate on Sydney’s Hills District for nearly 20 years. A major portion of the homes that I sell are either past clients, or referrals. My passion and motivation is continually driven forward by the satisfaction I receive when I secure an exceptional outcome for my clients.
                            </p>
                            <footer class="blockquote-footer">Ruma Mundi</footer>
                          </blockquote>
                      </div>
                  </div>
              </div>
          </div>
          <div class="team-2 section-image" id="team-5" style={{'backgroundImage': 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
              <div class="container">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto text-center">
                          <h2 class="title">Awards and Recognitions</h2>
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
                                  <i class="fa fa-trophy"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">#4 | Top Salesperson</h4>
                                  <p class="text-white">
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
                                  <h4 class="info-title text-white">Diamond Award</h4>
                                  <p class="text-white">
                                    Residental Commission   - First National Real Estate (NSW), 2016
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
                                  <h4 class="info-title text-white">#4 | Top Salesperson</h4>
                                  <p class="text-white">
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
                                  <h4 class="info-title text-white">Grand Centurion</h4>
                                  <p class="text-white">
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
                                  <h4 class="info-title text-white">Silver Auction Certificate</h4>
                                  <p class="text-white">
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
                                  <h4 class="info-title text-white">Top Principal (GCC) NSW</h4>
                                  <p class="text-white">
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
                                  <h4 class="info-title text-white">Grand Centurion</h4>
                                  <p class="text-white">
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
                                  <h4 class="info-title text-white">Silver Auction Certificate</h4>
                                  <p class="text-white">
                                    3rd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info info-horizontal" style={{'padding': 0}}>
                              <div class="icon icon-default">
                                  <i class="fa fa-trophy la-lg"></i>
                              </div>
                              <div class="description">
                                  <h4 class="info-title text-white">Top Principal (GCC) NSW</h4>
                                  <p class="text-white">
                                    2nd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="card card-profile card-plain">

                              <div class="card-header card-header-image" style={{'height': '166px'}}>
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
                          <div class="card card-profile card-plain">
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
                                  <h4 class="card-title">Finalist | Sales Agent of the Year - Metropolitan </h4>
                                  <p class="text-white">REB Awards 2017</p>
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
