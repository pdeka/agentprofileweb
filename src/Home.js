import React from 'react';
import Prismic from 'prismic-javascript';
import Truncate from 'react-truncate';
import MainNavigation from './partials/MainNavigation';
import FooterLinkedToContactUs from './partials/FooterLinkedToContactUs';
import classNames from 'classnames';
import Chance from 'chance';
import ArticlePreview from './partials/ArticlePreview';
import FormatDate from './partials/FormatDate';
import PageFooter from "./partials/PageFooter";
import TestimonialCardBody from "./partials/TestimonialCardBody";
import {Link} from 'react-router-dom';
import RegularButton from './components/CustomButtons/RegularButton';
import {RichText} from 'prismic-reactjs';
import {Splash} from './components/animation/Splash';
import SplashButton from './components/CustomButtons/SplashButton';


import './styles/css/Home.css';


export default class Home extends React.Component {

  state = {
    doc: null,
    articles: null,
    testimonials: null,
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'article'), { orderings : '[my.article.date desc]', pageSize : 2  }).then(
        (articles) => {
          if (articles) {
            this.setState({ articles });
          }
        }
      );

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'testimonial'), { pageSize : 10  }).then(
        (testimonials) => {
          if (testimonials) {
            this.setState({ testimonials });
          }
        }
      );

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

  showTestimonials(testimonialResults) {
    let chance = new Chance();
    let uniques = chance.unique(chance.natural, 3, {min: 0, max: (testimonialResults.length - 1)});
    return uniques.map((key, index) => {
      return <div key={index} className={classNames('col-md-4')}>
            <div className={classNames('card', 'card-testimonial')}>
                <TestimonialCardBody truncateLines={2} data={testimonialResults[key].data} truncateHeaderChars={75} />
                <div className={classNames('card-footer')}>
                    <div className={classNames('card-avatar')}>
                      <a target="_blank" href={testimonialResults[key].data.external_link.url}>
                          <img className={classNames('img')} src={testimonialResults[key].data.photo.url} alt="testimonial ruma mundi stanhope gardens sydney"/>
                      </a>
                    </div>
                </div>
            </div>
        </div>;
    });
  }

  render() {
    if (this.state.doc && this.state.articles && this.state.testimonials && this.state.contactInfo) {

      let data = this.state.doc.results[0].data;
      let articleResults = this.state.articles.results;
      let testimonialResults = this.state.testimonials.results;

      // let contactInfo = this.state.contactInfo.results[0].data;

      let slides= [{title: 'RUMA MUNDI', 'topText': 'Welcome to', 'bottomText': "Real Estate done with Passion"},
                 {title: 'ELITE AGENT', 'topText': 'Award winning', 'bottomText': "Real Estate done with Passion"},
                 {title: 'MARKETING', 'topText': 'Outstanding', 'bottomText': "Real Estate done with Passion"},
                 {title: 'KNOWLEDGE', 'topText': 'Unparalleled', 'bottomText': "Real Estate done with Passion"}];

      return <div className={classNames('sections-page', 'section-white')}>
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div className={classNames('main')}>
          <div className={classNames('page-header', 'header-filter')} data-parallax="true">
              <div className={classNames('container', 'hero-text-margin')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-12')} >
                        <div style={{'height': '150px', 'textAlign': 'center', 'justifyContent':  'center'}}>
                          <Splash slides={slides} />
                        </div>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-12', 'mt-4')}>
                          <div style={{'text-align': 'center'}}>
                            <a href="tel:+61411030202">
                              <SplashButton aria-label="0411 030 202">0411 030 202</SplashButton>
                            </a>
                            &nbsp;
                            &nbsp;
                            <Link to="/about">
                              <SplashButton aria-label="Meet Ruma">Meet Ruma</SplashButton>
                            </Link>
                          </div>
                      </div>
                  </div>
              </div>
              <video autoPlay loop id="video-background" muted plays-inline="true" preload="auto" poster={data.video_poster_image.url}>
                <source src={data.homepage_video_link.url} type="video/mp4"/>
              </video>
          </div>
        </div>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 4}}>
            <div className={classNames('cd-section')}>
            <div className={classNames('container')} >
              <div className={classNames('features-3', 'home-about-section')}>
                <div className={classNames('row')}>
                  <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                  <div className={classNames('card', 'card-profile', 'card-plain')}>
                      <div className={classNames('row')}>
                          <div className={classNames('col-md-5')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                <img className={classNames('img')} src={data.about_you_section_image.url} alt={data.about_you_section_image.alt} />
                              </div>
                          </div>
                          <div className={classNames('col-md-6')}>
                              <div className={classNames('card-body')}>
                                  <h3 className={classNames('card-title')}>{data.about_header[0].text}</h3>
                                  <div className={classNames('card-description', 'text-black')}>
                                    {RichText.render(data.about_you_text)}
                                  </div>
                                  <Link to="/about">
                                    <RegularButton
                                        color="primary"
                                        round
                                        aria-label="Meet Ruma">
                                        Meet Ruma
                                    </RegularButton>
                                  </Link>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <div className={classNames('cd-section', 'section-dark', 'mb-4')}>
              <div className={classNames('container')} >
                <div className={classNames('features-3', 'home-team-section')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                    <div className={classNames('card', 'card-profile', 'card-plain')}>
                        <div className={classNames('row')}>
                            <div className={classNames('col-md-4')}>
                                <div className={classNames('card-body', 'pt-0', 'mt-0', 'pb-5')}>
                                    <h3 className={classNames('card-title')}>{data.the_team_header[0].text}</h3>
                                    <div className={classNames('card-description')}>
                                      {RichText.render(data.the_team_text)}
                                    </div>
                                    <Link to="/team">
                                      <RegularButton
                                          color="primary"
                                          round
                                          aria-label="team">
                                          Meet The Team
                                      </RegularButton>
                                    </Link>
                                </div>
                            </div>
                            <div className={classNames('col-md-8')}>
                                <div className={classNames('card-header', 'card-header-image')}>
                                        <img className={classNames('img')} src={data.the_team_image.url} alt={data.the_team_image.alt} />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames('blogs-4', 'home-article-section', 'pb-4')}>
                <div className={classNames('container')}>
                  <div className={classNames('row')}>
                        <div className={classNames('col-md-2')}>
                        </div>
                        <div className={classNames('col-md-8', 'pl-1')}>
                            <h3 className={classNames('card-title', 'home-article-desktop-title', 'text-center', 'mt-0', 'pt-0')}>
                              {articleResults[0].data.article_title[0].text}
                              <span className={classNames('author')} style={{'fontStyle': 'italic', 'fontSize': '18px', 'paddingLeft': '21px'}}>
                                - <b>Ruma</b>,&nbsp;
                                <FormatDate data={articleResults[0].data.date}/>
                              </span>
                            </h3>
                            <h3 className={classNames('card-title', 'home-article-mobile-title', 'text-center')}>
                              Monthly Wrap-up
                              <span className={classNames('author')} style={{'fontStyle': 'italic', 'fontSize': '18px', 'paddingLeft': '21px'}}>
                                - <b>Ruma</b>,&nbsp;
                                <FormatDate data={articleResults[0].data.date}/>
                              </span>
                            </h3>
                        </div>
                  </div>
                  <div className={classNames('card', 'card-plain', 'card-blog', 'mt-5')}>
                    <div className={classNames('row')}>
                      <div className={classNames('col-md-12', 'pl-1')}>
                        <ArticlePreview data={articleResults[0].data}/>
                      </div>
                    </div>
                    <div className={classNames('row')}>
                      <div className={classNames('col-md-12', 'pl-1')}>
                        <div className={classNames('card-body', 'mt-4')}>
                          <div className={classNames('card-description-blog')}>
                            {RichText.render(articleResults[0].data.article_text)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className={classNames('testimonials-1', 'section-image', 'home-client-section', 'pb-5')} style={{'backgroundImage': 'url('+data.client_section_image.url+')'}}>
                <div className={classNames('container')}>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-12', 'text-center')}>
                            <h3 className={classNames('card-title', 'text-white', 'text-center')}>{data.client_section_header[0].text}</h3>
                            <div className={classNames('card-description', 'text-white')}>
                              {RichText.render(data.client_section_text)}
                            </div>
                        </div>
                    </div>
                    <div className={classNames('row')}>
                        {this.showTestimonials(testimonialResults)}
                    </div>
                    <div className={classNames('row', 'justify-content-center', 'mt-5')} >
                      <Link to="/testimonials">
                          <RegularButton
                              color="primary"
                              round
                              aria-label="testimonials">
                              See More
                          </RegularButton>
                      </Link>
                    </div>
                </div>
            </div>
            <FooterLinkedToContactUs data={data.footer_remark[0].text}/>
        </div>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 3}}>
          <PageFooter prismicCtx={this.props.prismicCtx}/>
        </div>
      </div>
    }else{
      return   <div className={classNames('sections-page',  'section-white')}>
        <div id="spinner-middle">
          <div>
              <i className={classNames('fa', 'fa-refresh', 'fa-spin', 'fa-5x', 'fa-fw')}></i>
          </div>
        </div>
      </div>

    }
  }
}


// <div className={classNames('card-footer', 'pb-0', 'pt-0')}>
//     <a href={data.facebook_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-facebook')} target="_blank">
//         <i className={classNames('fa', 'fa-facebook', 'fa-inverse')}></i>
//     </a>
//     <a href={data.instagram_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-instagram')} target="_blank">
//         <i className={classNames('fa', 'fa-instagram', 'fa-inverse')}></i>
//     </a>
//     <a href={data.youtube_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-youtube')} target="_blank">
//         <i className={classNames('fa', 'fa-youtube', 'fa-inverse')}></i>
//     </a>
//     <a href={data.linkedin_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-linkedin')} target="_blank">
//         <i className={classNames('fa', 'fa-linkedin', 'fa-inverse')}></i>
//     </a>
//     <a href={data.rate_my_agent_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link')} target="_blank">
//       <div style={{'marginBottom': '-1px'}}>
//         <i className={classNames('fa', 'icon-ratemyagent', 'fa-inverse')} style={{'fontSize': '17px'}}></i>
//       </div>
//     </a>
//     <a className={classNames('btn', 'btn-just-icon', 'btn-link')} href="mailto:name@email.com" target="_blank" rel="noopener noreferrer">
//       <i className={classNames('fa', 'fa-envelope', 'fa-inverse')}/>
//     </a>
// </div>
