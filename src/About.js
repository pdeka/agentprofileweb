import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import FooterLinkedToContactUs from "./partials/FooterLinkedToContactUs";
import PageFooter from "./partials/PageFooter";
import {Link} from 'react-router-dom';
import RegularButton from './components/CustomButtons/RegularButton';
import {RichText} from 'prismic-reactjs';
import YoutubeURL from './lib/YoutubeURL';


import './styles/css/About.css';

export default class About extends React.Component {

  state = {
    homepage: null,
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'homepage')).then((homepage) => {
        if (homepage) {
          this.setState({homepage});
        } else {
          this.setState({
            notFound: !homepage
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
    if (this.state.homepage && this.state.aboutpage) {

      let homepage = this.state.homepage.results[0].data;
      let aboutpage = this.state.aboutpage.results[0].data;

      return <div className={classNames('sections-page')}>
        <MainNavigation thisProp={homepage} navBarTransparent={true}/>
        <div className={classNames('page-header', 'header-medium', 'header-filter')} data-parallax="true" style={{backgroundImage: 'url('+aboutpage.header_background_image.url+')'}}>
          <div className={classNames('container', 'about-video-text-margin')}>
                <div className={classNames('row')}>
                  <div className={classNames('col-md-10')}>
                    <div className={classNames('iframe-container', 'embed-responsive', 'embed-responsive-16by9')}>
                        <iframe title="about ruma mundi stanhope garden sydney" height="300" src={new YoutubeURL().getFormattedEmbedUrl(aboutpage.about_video_link.url)} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true" id="iframe-rounded-corner"></iframe>
                    </div>
                  </div>
                  <div className={classNames('col-md-2')}>
                  </div>
                </div>
          </div>
        </div>
        <div className={classNames('main', 'main-raised')}>
          <div className={classNames('features-1', 'pt-5', 'pb-3')}>
            <div className={classNames('container')}>
              <div className={classNames('row')}>
                  <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                      <h3 className={classNames('title')}>{aboutpage.header[0].text}</h3>
                      <div className={classNames('description')}  >
                        {RichText.render(aboutpage.about_text)}
                      </div>
                      <div className={classNames('icon')}>
                        <i className={classNames('material-icons')}>format_quote</i>
                      </div>
                      <blockquote className={classNames('blockquote', 'text-center')}>
                        <p className={classNames('mb-0')}>
                          {aboutpage.quotation[0].text}
                        </p>
                        <footer className={classNames('blockquote-footer')}>{aboutpage.quotation_author[0].text}</footer>
                      </blockquote>
                  </div>
              </div>
            </div>
          </div>
          <div className={classNames('team-2', 'section-image', 'pt-5', 'pb-3')} id="team-5" style={{'backgroundImage': 'url('+aboutpage.awards_background.url+')'}}>
              <div className={classNames('container')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                          <h3 className={classNames('title')}>{aboutpage.awards_header[0].text}</h3>
                            <p className={classNames('mb-0', 'text-white')}>
                              {aboutpage.awards_quotation[0].text}
                            </p>
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
          <FooterLinkedToContactUs data={aboutpage.footer_remark[0].text}/>
        </div>
        <PageFooter prismicCtx={this.props.prismicCtx}/>
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


// <div className={classNames('cd-section')}>
//   <div className={classNames('container', 'pt-5')}>
//     <div className={classNames('row')}>
//       <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
//       <div className={classNames('card', 'card-profile', 'card-plain')}>
//           <div className={classNames('row')}>
//               <div className={classNames('col-md-12', 'testimonialpage-first-video')}>
//                 <div className={classNames('card-header', 'card-header-image', 'card-raised')}>
//                   <div>
//                     <div className={classNames('embed-responsive', 'embed-responsive-16by9')}>
//                       <iframe title="video ruma mundi stanhope garden sydney" id={'iframe-rounded-corner'} src={"https://www.youtube.com/embed/FVZ0OB4WkPs"} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true"></iframe>"
//                     </div>
//                   </div>
//                 </div>
//               </div>
//           </div>
//       </div>
//       </div>
//     </div>
//   </div>
// </div>

//
// <div className={classNames('team-3', 'pt-5', 'pb-0')}>
//     <div className={classNames('container')}>
//         <div className={classNames('row')}>
//             <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
//                 <h3 className={classNames('title')}>Ruma in the community</h3>
//                 <p className={classNames('description')}>
//                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                 </p>
//             </div>
//         </div>
//         <div className={classNames('row')}>
//           <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
//             <Link to="/community" className={classNames('nav-link')}>
//               <RegularButton
//                   color="primary"
//                   round
//                   aria-label="community">
//                   Read More
//               </RegularButton>
//             </Link>
//           </div>
//         </div>
//     </div>
// </div>
