import React from 'react';
import {RichText, Date} from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import Truncate from 'react-truncate';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import Chance from 'chance';
import PageFooter from "./partials/PageFooter";
import Paragraphs from "./partials/Paragraphs";
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

      console.log("Here is the doc:" + JSON.stringify(data));

      return <div className={classNames('sections-page', 'section-white')}>
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div className={classNames('main')}>
          <div className={classNames('page-header', 'header-medium-large', 'header-filter', 'home-background')} data-parallax="true">
              <div className={classNames('container')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-12', 'text-center')}>
                          <h1 className={classNames('title', 'home-heading')}>{data.hero_text[0].text}</h1>
                          <h2 className={classNames('text-white', 'sub-heading')}>
                            {data.hero_quote[0].text}
                          </h2>
                          <br/>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 4}}>
            <div className={classNames('cd-section', 'home-background')} id="about">
              <div className={classNames('container')}>
                <div className={classNames('features-1', 'home-about-section', 'pt-5', 'pb-0')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                      <h1 className={classNames('caption-text')}>{data.about_us_caption[0].text}</h1>
                    </div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                        <h1 className={classNames('title', 'mt-5')}>{data.about_us_header[0].text}</h1>
                        {RichText.render(data.about_us_text)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames('cd-section', 'home-background')} id="services">
              <div className={classNames('container')} >
                <div className={classNames('features-1', 'pt-5', 'pb-4')}>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                            <h1 className={classNames('title')}>{data.services_header[0].text}</h1>
                            {RichText.render(data.services_description)}
                        </div>
                    </div>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-1')}>
                        </div>
                        <div className={classNames('col-md-5')}>
                            <div className={classNames('card', 'card-raised')}>
                                <div className={classNames('card-title', 'mt-5')}>
                                    <i style={{'fontSize': 73, 'color': 'darkgray'}} className={classNames('material-icons')}>explore</i>
                                </div>
                                <div className={classNames('row')}>
                                  <div className={classNames('col-md-1')}>
                                  </div>
                                  <div className={classNames('col-md-10')}>
                                    <h2 className={classNames('card-title', 'text-center', 'caption-text', 'mb-5')}>{data.service_header_1[0].text}</h2>
                                  </div>
                                  <div className={classNames('col-md-1')}>
                                  </div>
                                </div>
                                <div className={classNames('mb-5', 'service-description')}>
                                  {RichText.render(data.service_description_1)}
                                </div>
                            </div>
                        </div>
                        <div className={classNames('col-md-5')}>
                            <div className={classNames('card', 'card-raised')}>
                                <div className={classNames('card-title', 'mt-5')}>
                                    <i style={{'fontSize': 73, 'color': 'darkgray'}} className={classNames('material-icons')}>devices</i>
                                </div>
                                <div className={classNames('row')}>
                                  <div className={classNames('col-md-1')}>
                                  </div>
                                  <div className={classNames('col-md-10')}>
                                    <h2 className={classNames('card-title', 'text-center', 'caption-text', 'mb-5')}>{data.service_header_2[0].text}</h2>
                                  </div>
                                  <div className={classNames('col-md-1')}>
                                  </div>
                                </div>
                                <div className={classNames('mb-5', 'service-description')}>
                                  {RichText.render(data.service_description_2)}
                                </div>
                            </div>
                        </div>
                        <div className={classNames('col-md-1')}>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <div className={classNames('cd-section', 'home-background')} id="contact">
              <div className={classNames('container')} >
                <div className={classNames('features-1', 'home-about-section', 'pt-2', 'pb-5')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-12', 'ml-auto', 'mr-auto', 'mb-3')}>
                        <h1 className={classNames('title')}>Contact Us</h1>
                    </div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-2')}></div>
                    <div className={classNames('col-md-3')}>
                      <div className={classNames('card', 'card-collapse', 'mt-1')}>
                                <div className={classNames('card-title', 'mb-0', 'pb-0')}>
                                  <p className={classNames('mb-0', 'pb-2', 'text-center')}>Nick</p>
                                </div>
                                <div className={classNames('card-body', 'mt-0', 'pt-0')}>
                                    <a href="tel:+61411030202" className={classNames('btn', 'btn-inverse', 'btn-round', 'text-white')} style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                      <i className={classNames('fa', 'fa-phone', 'fa-inverse')} />
                                      &nbsp;0411 030 202
                                      <div className={classNames('ripple-container')}></div>
                                    </a>
                                </div>
                                <div className={classNames('card-footer', 'mt-o', 'pt-0')}>
                                </div>
                            </div>
                    </div>
                    <div className={classNames('col-md-2')}></div>
                    <div className={classNames('col-md-3')}>
                      <div className={classNames('card', 'card-collapse', 'mt-1')}>
                                <div className={classNames('card-title', 'mb-0', 'pb-0')}>
                                  <p className={classNames('mb-0', 'pb-2', 'text-center')}>Prabin</p>
                                </div>
                                <div className={classNames('card-body', 'mt-o', 'pt-0')}>
                                      <a href="tel:+610420984257" className={classNames('btn', 'btn-inverse', 'btn-round', 'text-white', 'text-center')} style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                        <i className={classNames('fa', 'fa-phone', 'fa-inverse')} />
                                        &nbsp;0420 984 257
                                        <div className={classNames('ripple-container')}></div>
                                      </a>
                                </div>
                            </div>
                    </div>
                    <div className={classNames('col-md-2')}></div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-12', 'ml-auto', 'mr-auto', 'mb-0', 'mt-4')}>
                      <a href="mailto:info@kenekt.com.au" target="_blank" rel="noopener noreferrer">
                        <button className={classNames('btn', 'btn-just-icon', 'btn-round', 'btn-default')}>
                            <i className={classNames('fa', 'fa-envelope')}></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 3}}>
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
