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
// import $ from 'jquery';
// import bootstrapMaterialDesign from './vendor/js/BootstrapMaterialDesign';
// import materialKit from './vendor/js/MaterialKit';

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
                <TestimonialCardBody truncateLines={9} data={testimonialResults[key].data} />
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

      // const headerSummaryParagraphs = data.top_level_text_1.map((para, index) => {return <div key={index}>{para.text}</div>})

      return <div className={classNames('sections-page', 'section-white')}>
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div className={classNames('main')}>
          <div className={classNames('page-header', 'header-filter')} data-parallax="true">
              <div className={classNames('container', 'hero-text-margin')}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-8')}>
                          <h2 className={classNames('title')}>Real estate, done differently</h2>
                          <h5 className={classNames('text-white', 'hero-paragraph-text')}>Ruma’s professional approach has led to unparalleled results for her clients.
                            She invests in long term relationships with her clients, being deeply aware that selling or buying a house
                            is a significant decision, that extends far beyond a financial transaction
                          </h5>
                          <br/>
                      </div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-7')}>
                      <div className={classNames('card', 'card-profile', 'card-plain', 'mt-1')}>
                          <div className={classNames('row')}>
                              <div className={classNames('col-md-7', 'pl-0', 'ml-0')}>
                                  <div className={classNames('card-footer', 'pb-0', 'pt-0')} style={{'paddingLeft': '14px'}}>
                                      <a href="tel:+61411030202" className={classNames('btn', 'btn-inverse', 'btn-round', 'text-white')} style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                        <i className={classNames('fa', 'fa-phone', 'fa-inverse')} />
                                        &nbsp;0411 030 202
                                        <div className={classNames('ripple-container')}></div>
                                      </a>
                                  </div>
                                  <div className={classNames('card-footer', 'pb-0', 'pt-0')}>
                                      <a href="#pablo" className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-facebook')} target="_blank">
                                          <i className={classNames('fa', 'fa-facebook', 'fa-inverse')}></i>
                                      </a>
                                      <a href="#pablo" className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-instagram')} target="_blank">
                                          <i className={classNames('fa', 'fa-instagram', 'fa-inverse')}></i>
                                      </a>
                                      <a href="#pablo" className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-youtube')} target="_blank">
                                          <i className={classNames('fa', 'fa-youtube', 'fa-inverse')}></i>
                                      </a>
                                      <a href="#pablo" className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-linkedin')} target="_blank">
                                          <i className={classNames('fa', 'fa-linkedin', 'fa-inverse')}></i>
                                      </a>
                                      <a href={data.rate_my_agent_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link')} target="_blank">
                                        <div style={{'marginBottom': '-1px'}}>
                                          <i className={classNames('fa', 'icon-ratemyagent', 'fa-inverse')} style={{'fontSize': '17px'}}></i>
                                        </div>
                                      </a>
                                      <a className={classNames('btn', 'btn-just-icon', 'btn-link')} href="mailto:name@email.com" target="_blank" rel="noopener noreferrer">
                                        <i className={classNames('fa', 'fa-envelope', 'fa-inverse')}/>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
              <video autoPlay loop id="video-background" muted plays-inline="true" preload="auto" poster="https://prismic-io.s3.amazonaws.com/rumamundi%2F311dd30e-7826-4c90-ae05-4cf3141ecff6_videoversion2-poster.png">
                <source src="https://prismic-io.s3.amazonaws.com/rumamundi%2Ffafbff33-efae-411d-8bb4-01ed574cb22f_ruma+website+video+v2.mp4" type="video/mp4"/>
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
                                  <a href="#pablo">
                                      <img className={classNames('img')} src="./images/180131_NKnight_Ruma_0017.jpg" alt="please fill" />
                                  </a>
                              </div>
                          </div>
                          <div className={classNames('col-md-7')}>
                              <div className={classNames('card-body')}>
                                  <h3 className={classNames('card-title')}>Passion Integrity Care</h3>
                                  <p className={classNames('card-description', 'text-black')}>
                                    Ruma's name is synonymous with the real estate industry in the Hills District.
                                    She is among the REB top 50, a director, a business owner, but above all a mother of 2 beautiful daughters, Samara and Safira, and a person renowned in the community for her dedication, her integrity and her compassion.
                                  </p>
                                  <Link to="/about" style={{'marginLeft' : '25px'}} className={classNames('nav-link')}>
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
            <div className={classNames('cd-section', 'section-dark')}>
              <div className={classNames('container')} >
                <div className={classNames('features-3', 'home-team-section')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                    <div className={classNames('card', 'card-profile', 'card-plain')}>
                        <div className={classNames('row')}>
                            <div className={classNames('col-md-4')}>
                                <div className={classNames('card-body', 'pt-0', 'mt-0', 'pb-5')}>
                                    <h3 className={classNames('card-title')}>The Team</h3>
                                    <p className={classNames('card-description')}>
                                      People rarely achieve much without a good supportive team around them. We truely believe that we have the best team in the North West of Sydney.
                                      Our extensive experience, local knowledge, attention to details and determination to do the best for our clients, has been the bed rock of our success.
                                      However, our true strength is in our positivity and humility.
                                      We pride ourselves with the fact that we have managed to preserve a sense of approachability and hospitality,
                                      with a deep understanding that being the agent you can trust and seek advice from, has been a core competency of our endeavour so far.
                                    </p>
                                    <Link to="/team" style={{'marginLeft' : '25px'}}>
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
                                        <img className={classNames('img')} src="https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg" alt="please fill" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classNames('blogs-1', 'home-article-section')} id="blogs-1">
                <div className={classNames('container')}>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                            <h3 className={classNames('card-title', 'home-article-desktop-title')}>{data.homepage_articles_header[0].text}</h3>
                            <h3 className={classNames('card-title', 'home-article-mobile-title')}>Monthly Wrap-up</h3>
                            <p className={classNames('card-description')}>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <div className={classNames('card', 'card-plain', 'card-blog')}>
                              <div className={classNames('row')}>
                                <div className={classNames('col-md-8')}>
                                  <ArticlePreview data={articleResults[0].data}/>
                                </div>
                                <div className={classNames('col-md-4', 'pt-4')}>
                                  <h3 className={classNames('card-title')}>
                                    <a href="#pablo">{articleResults[0].data.article_title[0].text}</a>
                                  </h3>
                                  <p className={classNames('card-description')}>
                                    <Truncate lines={3} ellipsis={< span > ...<a href="#pablo">
                                      Read More
                                    </a> < /span>}>
                                      {articleResults[0].data.article_summary[0].text}
                                    </Truncate>
                                  </p>
                                  <p className={classNames('author')}>
                                    by <b>Ruma</b>,&nbsp;
                                    <FormatDate data={articleResults[0].data.date}/>
                                  </p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classNames('testimonials-1', 'section-image', 'home-client-section', 'pb-5')} style={{'backgroundImage': 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
                <div className={classNames('container')}>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-6', 'ml-auto', 'mr-auto', 'text-center')}>
                            <h3 className={classNames('title')}>{data.homepage_testimonials_header[0].text}</h3>
                            <p className={classNames('description', 'text-white')}>
                              What our clients say is a testament to the value and quality of our service. We enthusiastically gather feedback, and endeavour to continously improve our services based on what they tell us.
                            </p>
                        </div>
                    </div>
                    <div className={classNames('row')}>
                        {this.showTestimonials(testimonialResults)}
                    </div>
                    <div className={classNames('row', 'justify-content-center', 'mt-5')} >
                      <Link to="/testimonials" style={{'marginLeft' : '25px'}}>
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
            <FooterLinkedToContactUs data={"We would love to have a coffee with you."}/>
        </div>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 3}}>
          <PageFooter />
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
