import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import PageFooter from "./partials/PageFooter";
import {RichText} from 'prismic-reactjs';
import YoutubeURL from './lib/YoutubeURL';
import Loading from "./partials/Loading";

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
        <div className={classNames('page-header', 'header-medium-large', 'header-filter')} data-parallax="true" style={{backgroundImage: 'url('+aboutpage.header_background_image.url+')'}}>
          <div className={classNames('container', 'about-video-text-margin')}>
                <div className={classNames('row')}>
                  <div className={classNames('col-md-10')}>
                    <div className={classNames('iframe-container', 'embed-responsive', 'embed-responsive-16by9')}>
                        <iframe title="about ruma mundi stanhope garden sydney" height="300" src={new YoutubeURL().getFormattedEmbedUrl(aboutpage.about_video_link.url, true)} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true" id="iframe-rounded-corner"></iframe>
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
                      <h2 className={classNames('title')}>{aboutpage.header[0].text}</h2>
                      <div className={classNames('description')}  >
                        {RichText.render(aboutpage.about_text)}
                      </div>
                  </div>
              </div>
            </div>
          </div>
          <div className={classNames('team-2', 'section-image', 'pt-5', 'pb-3')} id="team-5" style={{'backgroundImage': 'url('+aboutpage.awards_background_image.url+')'}}>
              <div className={classNames('container')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                          <h2 className={classNames('title')}>{aboutpage.awards_header[0].text}</h2>
                          <div className={classNames('description', 'max-font-weight')}  >
                            {RichText.render(aboutpage.awards_text)}
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
                                  <h4 className={classNames('info-title', 'text-white')}>#29 | Top 50 Women in the Real Estate</h4>
                                  <p className={classNames('text-white', 'nothing')}>
                                     REB Awards
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
                                  <h4 className={classNames('info-title', 'text-white')}>#2 | Combined Highest Gross Sales</h4>
                                  <p className={classNames('text-white', 'nothing')}>
                                    First National Real Estate NSW Network
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
                                  <h4 className={classNames('info-title', 'text-white')}>#3 | Combined Highest Gross Sales</h4>
                                  <p className={classNames('text-white', 'nothing')}>
                                    First National Real Estate Network (AUS & NZ)
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
                                  <h4 className={classNames('info-title', 'text-white')}>#3 | Top Salesperson - Residental</h4>
                                  <p className={classNames('text-white', 'nothing')}>
                                    GEM Awards - First National Real Estate - 2016 & 2017
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
                                  <h4 className={classNames('info-title', 'text-white')}>Diamond Award - Residental Commission</h4>
                                  <p className={classNames('text-white', 'nothing')}>
                                    First National Real Estate (NSW) - 2016 & 2017
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
                                  <h4 className={classNames('info-title', 'text-white')}>Grand Centurion – 2015</h4>
                                  <p className={classNames('text-white', 'nothing')}>
                                    Top 1% Producer Globally - Century 21
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
                                  <h4 className={classNames('info-title', 'text-white')}>Double Centurion Award 2014</h4>
                                  <p className={classNames('text-white', 'nothing')}>

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
                                  <h4 className={classNames('info-title', 'text-white')}>Grand Centurion Producer</h4>
                                  <p className={classNames('text-white', 'nothing')}>
                                    Top 1% Producer Globally - 2013
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
                                  <h4 className={classNames('info-title', 'text-white')}>Centurion Producer</h4>
                                  <p className={classNames('text-white', 'nothing')}>
                                    Top 2% Producer Globally - 2009, 2010, 2011 & 2012
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                        <h2 className={classNames('title')}>{aboutpage.pro_bono_header[0].text}</h2>
                        <div className={classNames('description', 'max-font-weight')}  >
                          {RichText.render(aboutpage.pro_bono_text)}
                        </div>
                    </div>
                  </div>

              </div>
          </div>
        </div>
        <PageFooter prismicCtx={this.props.prismicCtx}/>
      </div>;

    } else {
      return  <Loading/>
    }
  }
}

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
