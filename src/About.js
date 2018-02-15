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
      // let aboutpageResults = this.state.aboutpage.results;

      return <div className={classNames('sections-page')}>
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div className={classNames('page-header', 'header-medium', 'header-filter')} data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F33169785-8d7d-4fc4-a605-8efe80901fc1_133+ridgeline+drv+the+ponds.jpg)'}}>
          <div className={classNames('container', 'hero-text-margin')}>
                <div className={classNames('row')}>
                  <div className={classNames('col-md-6')}>
                    <div className={classNames('iframe-container')}>
                        <iframe title="about ruma mundi stanhope garden sydney" height="300" src="https://www.youtube.com/embed/FVZ0OB4WkPs" frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true"></iframe>
                    </div>
                  </div>
                  <div className={classNames('col-md-3')}>
                  </div>
                  <div className={classNames('col-md-3')}>
                  </div>
                </div>
          </div>
        </div>
        <div className={classNames('main', 'main-raised')}>
          <div className={classNames('cd-section')}>
            <div className={classNames('container', 'pt-5')}>
              <div className={classNames('row')}>
                <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                <div className={classNames('card', 'card-profile', 'card-plain')}>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-12', 'testimonialpage-first-video')}>
                          <div className={classNames('card-header', 'card-header-image', 'card-raised')}>
                            <div>
                              <div className={classNames('embed-responsive', 'embed-responsive-16by9')}>
                                <iframe title="video ruma mundi stanhope garden sydney" id={'iframe-rounded-corner'} src={"https://www.youtube.com/embed/FVZ0OB4WkPs"} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true"></iframe>"
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
          <div className={classNames('features-1', 'pt-5', 'pb-3')}>
            <div className={classNames('container')}>
              <div className={classNames('row')}>
                  <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                      <h3 className={classNames('title')}>Serving you with love and care</h3>
                      <p className={classNames('description')}  >
                      Ruma Mundi's name has become synonymous with real estate in the Hills District. During her dynamic career spanning close to 20 years, Ruma has succeeded in bringing about a positive and refreshing change to customer service in the real estate industry, not just in the North West of Sydney, but in the country as a whole. She has earned her place in an elite group of agents, through highly effective negotiating strategies that time and again have produced exceptional sale prices for her clients. Her integrity and professionalism has earned her respect not just among her peers, but with the community as a whole. Behind her personable manner and respectful approach is a sharp and strategic thinker with exemplary sales skills. Displaying absolute integrity  Ruma’s dedication to each individual campaign is reflected in the consistency of her results.
                      </p>
                      <p className={classNames('description')}  >
                      She is a hard working mom of 2 beautiful daughters, Samara and Safira. Being a mom gives her a perspective on what a growing family needs. Nick, her husband helps her out between his work as an executive at Woolworths, and making time for the family. Ruma is keenly aware of the juggles of everyday life in the North West of Sydney, and the pressures families today have to work with to live happy and stay healthy.
                      </p>

                      <p className={classNames('description')}  >

                      Principal of First National Hills Direct, Ruma is a hard-working director who has an unwavering dedication for her Agency and her staff. With an Master’s degree in business administration and a bachelor’s degree in commerce, she has the education to back her up. Ruma and her team's success are driven by a strong market knowledge of the Hills District and a passion for people, coupled with care and integrity in all their dealings.
                      </p>
                      <div className={classNames('icon')}>
                        <i className={classNames('material-icons')}>format_quote</i>
                      </div>
                      <blockquote className={classNames('blockquote', 'text-center')}>
                        <p className={classNames('mb-0')}>
                          I have been selling real estate in Sydney’s Hills District for nearly 20 years. A major portion of the homes that I sell are either past clients, or referrals. My passion and motivation is continually driven forward by the satisfaction I receive when I secure an exceptional outcome for my clients.
                        </p>
                        <footer className={classNames('blockquote-footer')}>Ruma Mundi</footer>
                      </blockquote>
                  </div>
              </div>
            </div>
          </div>
          <div className={classNames('team-2', 'section-image', 'pt-5', 'pb-3')} id="team-5" style={{'backgroundImage': 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F2e8fb7d4-1748-440e-ac17-ffc5ee9ce986_23+fantail+lane+the+ponds.jpg)'}}>
              <div className={classNames('container')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                          <h3 className={classNames('title')}>Awards and Recognitions</h3>
                          <blockquote className={classNames('blockquote-without-left-line', 'text-center', 'text-white')}>
                            <p className={classNames('mb-0')}>
                              While it is an honour&nbsp;to be recognised both nationally and globally, my true reward comes from the satisfaction that I gain from a good result for my clients.&nbsp;
                            </p>
                            <footer className={classNames('blockquote-footer', 'text-white')}>Ruma</footer>
                          </blockquote>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>#4 | Top Salesperson</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                     GEM Awards
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>Diamond Award</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                    Residental Commission, FN, 2016
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>#4 | Top Salesperson</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                    FN Real Estate, 2016
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>Grand Centurion</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                    Top 1% Producer Globally, 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>Silver Auction Certificate</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                    3rd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>Top Principal (GCC) NSW</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                    2nd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>Grand Centurion</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                    Top 1% Producer Globally, 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>Silver Auction Certificate</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                    3rd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('info', 'info-horizontal')} style={{'padding': 0}}>
                              <div className={classNames('icon', 'icon-default')}>
                                  <i className={classNames('fa', 'fa-trophy', 'fa-inverse')}></i>
                              </div>
                              <div className={classNames('description')}>
                                  <h4 className={classNames('info-title', 'text-white')}>Top Principal (GCC) NSW</h4>
                                  <p className={classNames('text-white', 'awards-para')}>
                                    2nd Quarter 2015
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={classNames('row', 'awards-image-section')}>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain')}>

                              <div className={classNames('card-header', 'card-header-image', 'mb-0')} style={{'height': '166px'}}>
                                  <a href="#pablo">
                                      <img className={classNames('img')} src="./images/REB-top-50.png" style={{'height': '166px'}} alt="REB top 50 Ruma Mundi North West Sydney"/>
                                  </a>
                              </div>
                              <div className={classNames('card-body')}>
                                  <h4 className={classNames('card-title')}>#29 | REB Awards, 2017</h4>
                              </div>

                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain', 'mb-0')}>
                              <div className={classNames('card-header', 'card-header-image')} style={{'height': '166px'}}>
                                  <a href="#pablo">
                                      <img className={classNames('img')} src="./images/First-National-Real-Estate-SEQA-441x269.png" style={{'height': '166px'}} alt="First National Real Estate Ruma Mundi Sydney"/>
                                  </a>
                              </div>
                              <div className={classNames('card-body')}>
                                  <h4 className={classNames('card-title')}>#2 | Combined Highest Gross Sales</h4>
                                  <p className={classNames('text-white')}>First National Real Estate NSW Network</p>
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain')}>
                              <div className={classNames('card-header', 'card-header-image')} style={{'height': '166px'}}>
                                  <a href="#pablo">
                                      <img className={classNames('img')} src="./images/REBsalesagentoftheyear.jpeg" style={{'height': '166px'}} alt="REB sales agent of the year Ruma Mundi Sydney"/>
                                  </a>
                              </div>
                              <div className={classNames('card-body')}>
                                  <h4 className={classNames('card-title')}>Finalist | Sales Agent of the Year</h4>
                                  <p className={classNames('text-white')}>REB Awards 2017 (Metropolitan)</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={classNames('team-3', 'pt-5', 'pb-0')}>
              <div className={classNames('container')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                          <h3 className={classNames('title')}>Ruma in the community</h3>
                          <p className={classNames('description')}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          </p>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                      <Link to="/community" className={classNames('nav-link')}>
                        <button className={classNames('btn', 'btn-primary', 'btn-round')}>
                          Read More
                          <div className={classNames('ripple-container')}></div>
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
