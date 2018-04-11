import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import PageFooter from "./partials/PageFooter";
import {RichText} from 'prismic-reactjs';
import YoutubeURL from './lib/YoutubeURL';
import Loading from "./partials/Loading";
import ImageURL from "./lib/ImageURL";
import Image from "./partials/Image";


import './styles/css/About.css';

export default class About extends React.Component {

  state = {
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
    if (this.state.aboutpage) {

      let aboutpage = this.state.aboutpage.results[0].data;

      return <div className={classNames('sections-page')}>
        <MainNavigation navBarTransparent={true}/>
        <div className={classNames('page-header', 'header-medium-large', 'header-filter')} data-parallax="true" style={{backgroundImage: 'url('+ new ImageURL(aboutpage.header_background_image).getURL()+')'}}>
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
          <div className={classNames('features-1', 'pt-5')}>
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
          <div className={classNames('features-5')} style={{'backgroundImage': 'url('+ new ImageURL(aboutpage.awards_background_image).getURL() +')'}}>
              <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                  <h2 className={classNames('title')}>Awards</h2>
              </div>
              <div className={classNames('container')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-sm-4')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                  <span  className={classNames('award-number')}>29<sup>th</sup></span>
                              </div>
                              <h4 className={classNames('info-title')}>Top 50 Women in the Real Estate</h4>
                              <p>REB Awards - Real Estate Network for Australia</p>
                          </div>
                      </div>
                      <div className={classNames('col-sm-4')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                <span  className={classNames('award-number')}>2<sup>nd</sup></span>
                              </div>
                              <h4 className={classNames('info-title')}>Combined Highest Gross Sales</h4>
                              <p>First National Real Estate NSW Network</p>
                          </div>
                      </div>
                      <div className={classNames('col-sm-4')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                <span  className={classNames('award-number')}>3<sup>rd</sup></span>
                              </div>
                              <h4 className={classNames('info-title')}>Combined Highest Gross Sales</h4>
                              <p>First National Real Estate Network (AUS & NZ)</p>
                          </div>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                      <div className={classNames('col-sm-4')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                <span className={classNames('award-number')}>3<sup>rd</sup></span>
                              </div>
                              <h4 className={classNames('info-title')}>Top Salesperson - Residental</h4>
                              <p>GEM Awards - First National Real Estate Australia - 2016 & 2017</p>
                          </div>
                      </div>
                      <div className={classNames('col-sm-4')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                <span className={classNames('icon-laurel')} ></span>
                              </div>
                              <h4 className={classNames('info-title')}>Diamond Award</h4>
                              <p>Residental Commission - First National Real Estate (NSW) - 2016 & 2017</p>
                          </div>
                      </div>
                      <div className={classNames('col-sm-4')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                <span className={classNames('icon-laurel')} ></span>
                              </div>
                              <h4 className={classNames('info-title')}>Grand Centurion</h4>
                              <p>Top 1% Producer Globally – 2015 – Century 21</p>
                          </div>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                      <div className={classNames('col-sm-4')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                <span className={classNames('icon-laurel')} ></span>
                              </div>
                              <h4 className={classNames('info-title')}>Double Centurion 2014</h4>
                              <p></p>
                          </div>
                      </div>
                      <div className={classNames('col-sm-4')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                <span className={classNames('icon-laurel')} ></span>
                              </div>
                              <h4 className={classNames('info-title')}>Grand Centurion Producer</h4>
                              <p>Top 1% Producer Globally - 2013</p>
                          </div>
                      </div>
                      <div className={classNames('col-sm-4', 'mobile-last-item')}>
                          <div className={classNames('info')}>
                              <div className={classNames('icon')}>
                                <span className={classNames('icon-laurel')} ></span>
                              </div>
                              <h4 className={classNames('info-title')}>Centurion Producer</h4>
                              <p>(Top 2% Producer Globally) 2009, 2010, 2011 & 2012</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className={classNames('team-2')} id="team-2">
              <div className={classNames('container')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                          <h2 className={classNames('title')}>{aboutpage.sponsorships_header[0].text}</h2>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                      <Image clazz={'img'} src={aboutpage.logo_1} />
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                  <Image clazz={'img'} src={aboutpage.logo_2} />
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                <Image clazz={'img'} src={aboutpage.logo_3} />
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                <Image clazz={'img'} src={aboutpage.logo_4} />
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                <Image clazz={'img'} src={aboutpage.logo_5} />
                              </div>
                          </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                          <div className={classNames('card', 'card-profile', 'card-plain')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                <Image clazz={'img'} src={aboutpage.logo_6} />
                              </div>
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
