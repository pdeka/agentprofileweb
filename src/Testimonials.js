import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import FooterLinkedToContactUs from "./partials/FooterLinkedToContactUs";
import PageFooter from "./partials/PageFooter";
import YoutubeURL from './lib/YoutubeURL';
import WebTestimonialRow from './partials/WebTestimonialRow';
import TestimonialCardBody from "./partials/TestimonialCardBody";

import './styles/css/Testimonials.css';

export default class Testimonials extends React.Component {

  state = {
    doc: null,
    testimonialpage: null,
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'testimonialspage')).then((testimonialpage) => {
        if (testimonialpage) {
          this.setState({testimonialpage});
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'testimonial'), { orderings : '[my.testimonial.sort_order desc]',pageSize : 10  }).then(
        (testimonials) => {
          if (testimonials) {
            this.setState({ testimonials });
          }
        }
      );

      return null;

    }
    return null;
  }

  getFormattedEmbedUrl(embedUrl) {
    return new YoutubeURL().getFormattedEmbedUrl(embedUrl);
  }

  render() {
    if (this.state.doc && this.state.testimonialpage && this.state.testimonials ) {

      let data = this.state.doc.results[0].data;
      let testimonialResults = this.state.testimonials.results;

      let testimonialpageResults = this.state.testimonialpage.results;

      return <div class="sections-page">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
          <div class="container hero-text-margin">
              <div class="row">
                  <div class="col-md-12 ">
                    <h2 class="title mb-0">Stories from our clients</h2>
                    <h5 class="text-white hero-paragraph-text mt-0">Feedback is important. Here are some we have got
                    </h5>
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
            <div class="cd-section">
              <div class="container pt-5">
                <div class="row">
                  <div class="col-md-12 ml-auto mr-auto">
                  <div class="card card-profile card-plain">
                      <div class="row">
                          <div class="col-md-6 testimonialpage-first-video">
                            <div className={classNames('card-header', 'card-header-image', 'card-raised')}>
                              <div>
                                <div className={classNames('embed-responsive', 'embed-responsive-16by9')}>
                                  <iframe title="video ruma mundi stanhope garden sydney" id={'iframe-rounded-corner'} src={this.getFormattedEmbedUrl(testimonialpageResults[0].data.video_1.url)} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true"></iframe>"
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div className={classNames('card-header', 'card-header-image', 'card-raised')}>
                              <div>
                                <div className={classNames('embed-responsive', 'embed-responsive-16by9')}>
                                  <iframe title="video ruma mundi stanhope garden sydney" id={'iframe-rounded-corner'} src={this.getFormattedEmbedUrl(testimonialpageResults[0].data.video_2.url)} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true"></iframe>"
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
            <div class="cd-section" >
                <div class="container pt-3">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="container">
                          <div class="row">
                              <div class="card card-testimonial">
                                  <div class="card-header card-header-image">
                                      <img class="img img-raised" src={testimonialResults[0].data.photo.url} />
                                  </div>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[0].data} />
                              </div>
                          </div>
                          <div class="row">
                              <div class="card card-testimonial">
                                  <div class="card-header card-header-image">
                                      <img class="img img-raised" src={testimonialResults[3].data.photo.url} />
                                  </div>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[3].data} />
                              </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="container">
                          <div class="row">
                              <div class="card card-testimonial">
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[1].data} />
                                  <div class="card-header card-header-image  mt-2 mb-4">
                                      <img class="img img-raised" src={testimonialResults[1].data.photo.url} />
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="card card-testimonial">
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[4].data} />
                                  <div class="card-header card-header-image  mt-2 mb-4">
                                      <img class="img img-raised" src={testimonialResults[4].data.photo.url} />
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="container">
                          <div class="row">
                              <div class="card card-testimonial">
                                  <div class="card-header card-header-image">
                                      <img class="img img-raised" src={testimonialResults[2].data.photo.url} />
                                  </div>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[2].data} />
                              </div>
                          </div>
                          <div class="row">
                              <div class="card card-testimonial">
                                  <div class="card-header card-header-image">
                                      <img class="img img-raised" src={testimonialResults[5].data.photo.url} />
                                  </div>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[5].data} />
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="cd-section section-image" style={{'backgroundImage': 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
              <div class="blogs-2" id="blogs-2">
                  <div class="container mb-5">
                      <div class="row">
                          <div class="col-md-8 ml-auto mr-auto text-center">
                              <h2 class="title">Feedback across the web does matter</h2>
                              <h5 class="description text-white">
                                One generally forgets to ask people for feedback. But feedback across social media does matter, and helps us improve ourselves.
                              </h5>
                          </div>
                      </div>
                  </div>
                  <div class="container">
                      <WebTestimonialRow testimonialResults={testimonialResults} indices={[6,7,8]} />
                      <WebTestimonialRow testimonialResults={testimonialResults} indices={[9,10,11]} />
                      <WebTestimonialRow testimonialResults={testimonialResults} indices={[12,13,14]} />
                  </div>
              </div>
            </div>
            <FooterLinkedToContactUs data={data.footer_content[0].text}/>
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
