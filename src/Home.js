import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import Chance from 'chance';
import ArticlePreview from './partials/ArticlePreview';
import PageFooter from "./partials/PageFooter";
import Loading from "./partials/Loading";
import TestimonialCardBody from "./partials/TestimonialCardBody";
import {Link} from 'react-router-dom';
import RegularButton from './components/CustomButtons/RegularButton';
import {RichText} from 'prismic-reactjs';
import {Splash} from './components/animation/Splash';
import SplashButton from './components/CustomButtons/SplashButton';
import Slice from './lib/Slice';
import Jump from 'react-reveal/Jump';
import { Link as LinkScroll} from 'react-scroll';
import ImageURL from "./lib/ImageURL";
import Image from "./partials/Image";


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

      props.prismicCtx.api.query([
          Prismic.Predicates.at('document.type', 'article'),
          Prismic.Predicates.at('document.tags', ['Our Community'])
      ], { orderings : '[my.article.date desc]', pageSize : 1  }).then(
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
                <TestimonialCardBody excludeExternalLink={true} truncateLines={2} data={testimonialResults[key].data} truncateHeaderChars={75} />
                <div className={classNames('card-footer', 'pt-2')}>
                    <div className={classNames('card-avatar')}>
                      <Image clazz={'img'} src={testimonialResults[key].data.photo}/>
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

      let slice = new Slice().findSlice(data.body, "rolling_text");
      let slides = []
      slice.items.forEach((item) => { slides.push({
        'topText': item.top_text[0].text,
        'title': item.middle_text[0].text,
        'bottomText': item.bottom_text[0].text
      })})

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
                          <div style={{'textAlign': 'center'}}>
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
              <div id="downArrow">
                <Jump>
                  <LinkScroll to="about" spy={false} smooth={true} duration={1000} delay={300}>
                    <img src="images/down-arrow70X70.png" height="50px" alt="ruma see rest of page"/>
                  </LinkScroll>
                </Jump>
              </div>
              <video autoPlay loop id="video-background" muted plays-inline="true" preload="auto" poster={new ImageURL(data.video_poster_image).getURL()}>
                <source src={data.homepage_video_link.url} type="video/mp4"/>
              </video>
          </div>
        </div>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 4}}  id="about">
            <div className={classNames('cd-section')}>
            <div className={classNames('container')} >
              <div className={classNames('features-3', 'home-about-section')}>
                <div className={classNames('row')}>
                  <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                  <div className={classNames('card', 'card-profile', 'card-plain')}>
                      <div className={classNames('row')}>
                          <div className={classNames('col-md-5')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                <Image clazz={'img'} src={data.about_you_section_image} />
                              </div>
                          </div>
                          <div className={classNames('col-md-6')}>
                              <h2 className={classNames('card-title', 'mobile-padding-home-about-section')}>{data.about_header[0].text}</h2>
                              <div className={classNames('card-body')}>
                                  <div className={classNames('card-description', 'text-black')}>
                                    {RichText.render(data.about_you_text)}
                                  </div>
                                  <Link to="/about">
                                    <RegularButton
                                        color="primary"
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
                                    <h2 className={classNames('card-title', 'mobile-padding-teamruma-section')}>{data.the_team_header[0].text}</h2>
                                    <div className={classNames('card-description')}>
                                      {RichText.render(data.the_team_text)}
                                    </div>
                                    <Link to="/team">
                                      <RegularButton
                                          color="primary"
                                          aria-label="team">
                                          Meet The Team
                                      </RegularButton>
                                    </Link>
                                </div>
                            </div>
                            <div className={classNames('col-md-8')}>
                                <div className={classNames('card-header', 'card-header-image')}>
                                    <Image clazz={'img'} src={data.the_team_image} />
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
                <div className={classNames('container')} >
                      <div className={classNames('row')}>
                            <div className={classNames('col-md-12')}>
                                <h2 className={classNames('title', 'text-center', 'mobile-padding-communityruma-section')}>
                                  {articleResults[0].data.article_title[0].text}
                                </h2>
                            </div>
                      </div>
                      <div className={classNames('card', 'card-profile', 'card-plain')}>
                          <div className={classNames('row')}>
                              <div className={classNames('col-md-8')}>
                                  <div className={classNames('card-header', 'card-header-image')}>
                                  <ArticlePreview data={articleResults[0].data}/>
                                  </div>
                              </div>

                              <div className={classNames('col-md-4')}>
                                  <div className={classNames('card-body', 'pt-0', 'mt-0', 'mobile-home-page-article')}>
                                      <div className={classNames('card-description')}>
                                      {RichText.render(articleResults[0].data.article_text)}
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>

                </div>
            </div>
            <div className={classNames('blogs-4', 'section-image', 'home-client-section', 'pb-5')} style={{'backgroundImage': 'url('+new ImageURL(data.client_section_image).getURL()+')'}}>
                <div className={classNames('container')}>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-12', 'text-center')}>
                            <h2 className={classNames('title', 'text-white', 'text-center')}>{data.client_section_header[0].text}</h2>
                        </div>
                    </div>
                    <div className={classNames('row')}>
                        {this.showTestimonials(testimonialResults)}
                    </div>
                    <div className={classNames('row', 'justify-content-center', 'mt-5')} >
                      <Link to="/testimonials">
                          <RegularButton
                              color="primary"
                              aria-label="testimonials">
                              See More
                          </RegularButton>
                      </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 3}}>
          <PageFooter prismicCtx={this.props.prismicCtx}/>
        </div>
      </div>
    }else{
      return  <Loading/>
    }
  }
}
