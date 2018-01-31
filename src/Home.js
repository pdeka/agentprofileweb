import React from 'react';
import Prismic from 'prismic-javascript';
import Truncate from 'react-truncate';
import MainNavigation from './MainNavigation';
import FooterLinkedToContactUs from './FooterLinkedToContactUs';
import classNames from 'classnames';
import Chance from 'chance';
import ArticlePreview from './ArticlePreview';
import FormatDate from './FormatDate';
import PageFooter from "./PageFooter";
import {Link} from 'react-router-dom';

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
    let uniques = chance.unique(chance.natural, 3, {min: 0, max: 3});
    return uniques.map((key, index) => {
      return <div key={index} class="col-md-4">
            <div class="card card-testimonial">
                <div class="icon">
                    <i class="material-icons">format_quote</i>
                </div>
                <div class="card-body ">
                    <h5 class="card-description pb-1 mb-1 mt-1">
                      <Truncate lines={7} ellipsis={<span>... <a target="_blank" href={testimonialResults[key].data.external_link.url}>Read More</a></span>}>
                        {testimonialResults[key].data.comment[0].text}
                      </Truncate>
                    </h5>
                </div>
                <div class="card-footer ">
                    <h4 class="card-title">{testimonialResults[key].data.full_name[0].text}</h4>
                    <h6 class="card-category" style={{'textTransform': 'none'}}>@&nbsp;<a target="_blank" href={testimonialResults[key].data.external_link.url}>Rate My Agent</a></h6>
                    <div class="card-avatar">
                        <a target="_blank" href={testimonialResults[key].data.external_link.url}>
                            <img class="img" src={testimonialResults[key].data.photo.url} alt="testimonial ruma mundi stanhope gardens sydney"/>
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

      return <div class="sections-page  section-white ">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="main">
          <div class="page-header header-filter" data-parallax="true">
              <div class="container">
                  <div class="row">
                      <div class="col-md-8">
                          <h2 class="title">Real estate, done differently</h2>
                          <h5 class="text-white" style={{'fontWeight': 400, 'fontSize': '18px'}}>Ruma’s professional approach has led to unparalleled results for her clients.
                            She invests in long term relationships with her clients, being deeply aware that selling or buying a house
                            is a significant decision, that extends far beyond a financial transaction
                          </h5>
                          <br/>
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-md-7">
                      <div class="card card-profile card-plain mt-1">
                          <div class="row">
                              <div class="col-md-7  pl-0 ml-0">
                                  <div class="card-footer pb-0 pt-0" style={{'paddingLeft': '14px'}}>
                                      <a href="tel:+61411030202" class="btn btn-inverse btn-round text-white" style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
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
              <video autoPlay loop id="video-background" muted plays-inline="true" preload="auto" poster="https://prismic-io.s3.amazonaws.com/rumamundi%2Fe26a6369-65c4-47c4-b6f3-d782cbc937cd_videoposter.png">
                <source src="https://prismic-io.s3.amazonaws.com/rumamundi%2Fcef043a5-a762-48d8-93da-2041424e6c41_test-13-720p-25fps-heavily-compressed.mp4" type="video/mp4"/>
              </video>
          </div>
        </div>
        <div class="main">
            <div class="cd-section">
            <div class="container" >
              <div class="features-3">
                <div class="row">
                  <div class="col-md-12 ml-auto mr-auto">
                  <div class="card card-profile card-plain">
                      <div class="row">
                          <div class="col-md-5">
                              <div class="card-header card-header-image">
                                  <a href="#pablo">
                                      <img class="img" src="./images/180131_NKnight_Ruma_0017.jpg" alt="please fill" />
                                  </a>
                              </div>
                          </div>
                          <div class="col-md-7">
                              <div class="card-body">
                                  <h3 class="card-title">Passion, integrity and care</h3>
                                  <p class="card-description text-black">
                                    Ruma's name is synonymous with the real estate industry in the Hills District. She is a director, a small business owner, one of the top-50 real estate agents in the country,  but above all a mother of 2 beautiful daughters, Samara and Safira, and a person renowned in the community for her dedication, her integrity and her compassion.
                                  </p>
                                  <Link to="/about" style={{'marginLeft' : '25px'}} class="nav-link">
                                    <button class="btn btn-primary btn-round">
                                      Meet Ruma
                                      <div class="ripple-container"></div>
                                    </button>
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
            <div class="cd-section section-dark">
              <div class="container" >
                <div class="features-3">
                  <div class="row">
                    <div class="col-md-12 ml-auto mr-auto">
                    <div class="card card-profile card-plain">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="card-body pt-0 mt-0">
                                    <h2 class="card-title">The Team</h2>
                                    <p class="card-description">
                                      People rarely achieve much without a good supportive team around them. We truely believe that we have the best team in the North West of Sydney. Our extensive experience, local knowledge, attention to details and determination to do the best for all our clients, has been the bed rock of our success. However, our true strength is in our positivity and humility. We pride ourselves with the that fact that we have managed to preserve the sense of approachability and hospitality, with a deep understanding that being the agent you can trust and seek advice from, has been a core competency of our endeavour so far.
                                    </p>
                                    <Link to="/team" style={{'marginLeft' : '25px'}}>
                                        <button class="btn btn-primary btn-round">
                                          Meet The Team
                                          <div class="ripple-container"></div>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <div class="col-md-8">
                                <div class="card-header card-header-image">
                                        <img class="img" src="https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg" alt="please fill" />
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="blogs-1" id="blogs-1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 ml-auto mr-auto">
                            <h2 class="title">{data.homepage_articles_header[0].text}</h2>
                            <br/>
                            <div class="card card-plain card-blog">
                              <div class="row">
                                <div class="col-md-8">
                                  <ArticlePreview data={articleResults[0].data}/>
                                </div>
                                <div class="col-md-4">
                                  <h3 class="card-title">
                                    <a href="#pablo">{articleResults[0].data.article_title[0].text}</a>
                                  </h3>
                                  <p class="card-description">
                                    <Truncate lines={3} ellipsis={< span > ...<a href="#pablo">
                                      Read More
                                    </a> < /span>}>
                                      {articleResults[0].data.article_summary[0].text}
                                    </Truncate>
                                  </p>
                                  <p class="author">
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
            <div class="testimonials-1 section-image" style={{'backgroundImage': 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto text-center">
                            <h2 class="title">{data.homepage_testimonials_header[0].text}</h2>
                            <h5 class="description text-white">
                              What our clients say is a testament to the value and quality of our service. We enthusiastically gather feedback, and endeavour to continously improve our services based on what they tell us.
                            </h5>
                        </div>
                    </div>
                    <div class="row">
                        {this.showTestimonials(testimonialResults)}
                    </div>
                </div>
            </div>
            <FooterLinkedToContactUs data={"We would love to have a coffee with you."}/>
        </div>
        <div class="main footer-container">
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
