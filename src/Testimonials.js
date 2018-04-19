import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import PageFooter from "./partials/PageFooter";
import YoutubeURL from './lib/YoutubeURL';
import WebTestimonialRow from './partials/WebTestimonialRow';
import TestimonialCardBody from "./partials/TestimonialCardBody";
import Loading from "./partials/Loading";
import ImageURL from "./lib/ImageURL";


import './styles/css/Testimonials.css';

export default class Testimonials extends React.Component {

  state = {
    testimonialspage: null,
    testimonials: null,
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'testimonialspage')).then((testimonialspage) => {
        if (testimonialspage) {
          this.setState({testimonialspage});
        } else {
          this.setState({
            notFound: !testimonialspage
          });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'testimonial'), { orderings : '[my.testimonial.sort_order desc]',pageSize : 12  }).then(
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
    if (this.state.testimonialspage && this.state.testimonials ) {

      let testimonialspage = this.state.testimonialspage.results[0].data;
      let testimonialResults = this.state.testimonials.results;

      return <div className={classNames('sections-page')}>
        <MainNavigation navBarTransparent={true}/>
        <div className={classNames('page-header',  'header-medium', 'header-filter-4')} data-parallax="true" style={{backgroundImage: "url(" +new ImageURL(testimonialspage.header_background_image).getURL()+")"}}>
          <div className={classNames('container')}>
              <div className={classNames('row', 'justify-content-center')}>
                  <div className={classNames('col-md-12')}>
                    <h1 className={classNames('title', 'text-center')}></h1>
                    <h1 className={classNames('title', 'text-center', 'page-header-text', 'desktop-display')}>{testimonialspage.header[0].text}</h1>
                    <div className={classNames('title', 'text-center', 'page-header-text', 'mobile-display')}>
                      <h1 className={classNames('title', 'text-center', 'mobile-display')}>Your </h1>
                      <h2 className={classNames('title', 'text-center', 'mobile-display')}>Perception is </h2>
                      <h1 className={classNames('title', 'text-center', 'mobile-display')}>Our Reality</h1>
                    </div>
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
                          <div className={classNames('col-md-6')}>
                            <div className={classNames('card-header', 'card-header-image', 'card-raised')}>
                              <div>
                                <div className={classNames('embed-responsive', 'embed-responsive-16by9')}>
                                  <iframe title="video ruma mundi stanhope garden sydney" id={'iframe-rounded-corner'} src={this.getFormattedEmbedUrl(testimonialspage.video1.url)} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true"></iframe>"
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={classNames('col-md-6', 'mobile-gap-testimonial-page-video')}>
                            <div className={classNames('card-header', 'card-header-image', 'card-raised')}>
                              <div>
                                <div className={classNames('embed-responsive', 'embed-responsive-16by9')}>
                                  <iframe title="video ruma mundi stanhope garden sydney" id={'iframe-rounded-corner'} src={this.getFormattedEmbedUrl(testimonialspage.video2.url)} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true"></iframe>"
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
            <div className={classNames('cd-section')} >
                <div className={classNames('container', 'pt-3')}>
                    <div className={classNames('row')}>
                      <div className={classNames('col-md-4')}>
                        <div className={classNames('container')}>
                          <div className={classNames('row')}>
                              <div className={classNames('card', 'card-testimonial')}>
                                  <div className={classNames('card-header', 'card-header-image')}>
                                      <img className={classNames('img', 'img-raised')} src={testimonialResults[0].data.photo.url} alt={testimonialResults[0].data.photo.alt}/>
                                  </div>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[0].data} excludeExternalLink={true}/>
                              </div>
                          </div>
                          <div className={classNames('row')}>
                              <div className={classNames('card', 'card-testimonial')}>
                                  <div className={classNames('card-header', 'card-header-image')}>
                                      <img className={classNames('img', 'img-raised')} src={testimonialResults[3].data.photo.url} alt={testimonialResults[3].data.photo.alt}/>
                                  </div>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[3].data}  excludeExternalLink={true}/>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                        <div className={classNames('container')}>
                          <div className={classNames('row')}>
                              <div className={classNames('card', 'card-testimonial')}>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[1].data}  excludeExternalLink={true}/>
                                  <div className={classNames('card-header', 'card-header-image', 'mt-2', 'mb-4')}>
                                      <img className={classNames('img', 'img-raised')} src={testimonialResults[1].data.photo.url} alt={testimonialResults[1].data.photo.alt}/>
                                  </div>
                              </div>
                          </div>
                          <div className={classNames('row')}>
                              <div className={classNames('card', 'card-testimonial')}>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[4].data}  excludeExternalLink={true}/>
                                  <div className={classNames('card-header', 'card-header-image', 'mt-2', 'mb-4')}>
                                      <img className={classNames('img', 'img-raised')} src={testimonialResults[4].data.photo.url} alt={testimonialResults[4].data.photo.alt}/>
                                  </div>
                              </div>
                          </div>
                        </div>
                      </div>
                      <div className={classNames('col-md-4')}>
                        <div className={classNames('container')}>
                          <div className={classNames('row')}>
                              <div className={classNames('card', 'card-testimonial')}>
                                  <div className={classNames('card-header', 'card-header-image')}>
                                      <img className={classNames('img', 'img-raised')} src={testimonialResults[2].data.photo.url} alt={testimonialResults[2].data.photo.alt}/>
                                  </div>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[2].data} excludeExternalLink={true}/>
                              </div>
                          </div>
                          <div className={classNames('row')}>
                              <div className={classNames('card', 'card-testimonial')}>
                                  <div className={classNames('card-header', 'card-header-image')}>
                                      <img className={classNames('img', 'img-raised')} src={testimonialResults[5].data.photo.url} alt={testimonialResults[5].data.photo.alt}/>
                                  </div>
                                  <TestimonialCardBody truncateLines={20} data={testimonialResults[5].data} excludeExternalLink={true}/>
                              </div>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            <div className={classNames('cd-section', 'section-image')} style={{backgroundImage: "url(" +new ImageURL(testimonialspage.web_testimonial_header_background_image).getURL()+")"}}>
              <div className={classNames('blogs-2')} id="blogs-2">
                  <div className={classNames('container', 'mb-5')}>
                      <div className={classNames('row')}>
                          <div className={classNames('col-md-8', 'ml-auto', 'mr-auto', 'text-center')}>
                              <h2 className={classNames('title')}>{testimonialspage.web_testimonial_header[0].text}</h2>
                          </div>
                      </div>
                  </div>
                  <div className={classNames('container')}>
                      <WebTestimonialRow testimonialResults={testimonialResults} indices={[6,7,8]} />
                      <WebTestimonialRow testimonialResults={testimonialResults} indices={[9,10,11]} />
                      <WebTestimonialRow testimonialResults={testimonialResults} indices={[12,13,14]} />
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
