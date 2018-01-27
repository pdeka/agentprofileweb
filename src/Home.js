import React from 'react';
import Prismic from 'prismic-javascript';
import Truncate from 'react-truncate';
import MainNavigation from './MainNavigation';
import FooterLinkedToContactUs from './FooterLinkedToContactUs';
import classNames from 'classnames';
import ArticlePreview from './ArticlePreview';
import FormatDate from './FormatDate';
import PageFooter from "./PageFooter";

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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'testimonial'), { orderings : '[my.testimonial.date desc]', pageSize : 3  }).then(
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

  render() {
    if (this.state.doc && this.state.articles && this.state.testimonials && this.state.contactInfo) {

      let data = this.state.doc.results[0].data;
      let articleResults = this.state.articles.results;
      let testimonialResults = this.state.testimonials.results;
      // let contactInfo = this.state.contactInfo.results[0].data;

      const headerSummaryParagraphs = data.top_level_text_1.map((para, index) => {return <div key={index}>{para.text}</div>})

      return <div class="sections-page  section-white ">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="main">
          <div class="page-header header-filter" data-parallax="true">
              <div class="container">
                  <div class="row">
                      <div class="col-md-8">
                          <h1 class="title">{data.homepage_header[0].text}</h1>
                          <h4 class="hero-text">{headerSummaryParagraphs}</h4>
                      </div>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                            <a class="hero-contact-info-container" href="tel:+61420234234">
                              <i class="fa fa-phone"></i>
                              <span class="hero-contact-info">+61 420 234 234</span>
                            </a>
                            <a class="hero-contact-info-container" href="mailto:name@email.com" target="_blank" rel="noopener noreferrer">
                              <i class="fa fa-envelope"></i>
                              <span class="hero-contact-info">mail</span>
                            </a>
                    </div>
                  </div>
              </div>
              <video autoPlay loop id="video-background" muted plays-inline="true" preload="auto" poster="https://prismic-io.s3.amazonaws.com/rumamundi%2Fe26a6369-65c4-47c4-b6f3-d782cbc937cd_videoposter.png">
                <source src="https://prismic-io.s3.amazonaws.com/rumamundi%2Fcef043a5-a762-48d8-93da-2041424e6c41_test-13-720p-25fps-heavily-compressed.mp4" type="video/mp4"/>
              </video>
          </div>
        </div>
        <div class="main">
            <div class="container" >
              <div class="features-3">
                <div class="row">
                  <div class="col-md-12 ml-auto mr-auto">
                  <div class="card card-profile card-plain">
                      <div class="row">
                          <div class="col-md-7">
                              <div class="card-body">
                                  <h2 class="card-title">Meet Ruma</h2>
                                  <h4 class="card-category text-muted">Founder & Principle Agent</h4>
                                  <p class="card-description">
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                  </p>
                              </div>
                              <div class="card-footer">
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-twitter"></i></a>
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-facebook-square"></i></a>
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-google"></i></a>
                              </div>
                          </div>
                          <div class="col-md-5">
                              <div class="card-header card-header-image">
                                  <a href="#pablo">
                                      <img class="img" src="./vendor/creativetim/img/faces/card-profile1-square.jpg" />
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="cd-section" id="teams">
                <div class="team-5 section-image" style={{'backgroundImage': 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto text-center">
                                <h2 class="title">Her Team</h2>
                                <h5 class="description">This is the paragraph where you can write more details about your team. Keep you user engaged by providing meaningful information.</h5>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card card-profile card-plain">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="card-header card-header-image">
                                                <a href="#pablo">
                                                    <img class="img" src="./vendor/creativetim/img/faces/card-profile1-square.jpg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h4 class="card-title">Alec Thompson</h4>
                                                <h6 class="card-category text-muted">Founder</h6>
                                                <p class="card-description">
                                                    Don't be scared of the truth because we need to restart the human foundation in truth...
                                                </p>
                                            </div>
                                            <div class="card-footer">
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-twitter"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-facebook-square"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-google"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-profile card-plain">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="card-header card-header-image">
                                                <a href="#pablo">
                                                    <img class="img" src="./vendor/creativetim/img/faces/card-profile6-square.jpg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h4 class="card-title">Kendall Andrew</h4>
                                                <h6 class="card-category text-muted">Graphic Designer</h6>
                                                <p class="card-description">
                                                    Don't be scared of the truth because we need to restart the human foundation in truth...
                                                </p>
                                            </div>
                                            <div class="card-footer">
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-linkedin"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-facebook-square"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-dribbble"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-google"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-profile card-plain">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="card-header card-header-image">
                                                <a href="#pablo">
                                                    <img class="img" src="./vendor/creativetim/img/faces/card-profile4-square.jpg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h4 class="card-title">Gina Andrew</h4>
                                                <h6 class="card-category text-muted">Web Designer</h6>
                                                <p class="card-description">
                                                    I love you like Kanye loves Kanye. Don't be scared of the truth.
                                                </p>
                                            </div>
                                            <div class="card-footer">
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-youtube-play"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-twitter"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card card-profile card-plain">
                                    <div class="row">
                                        <div class="col-md-5">
                                            <div class="card-header card-header-image">
                                                <a href="#pablo">
                                                    <img class="img" src="./vendor/creativetim/img/faces/card-profile2-square.jpg" />
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-md-7">
                                            <div class="card-body">
                                                <h4 class="card-title">George West</h4>
                                                <h6 class="card-category text-muted">Backend Hacker</h6>
                                                <p class="card-description">
                                                    I love you like Kanye loves Kanye. Don't be scared of the truth.
                                                </p>
                                            </div>
                                            <div class="card-footer">
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-linkedin"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-facebook-square"></i></a>
                                                <a href="#pablo" class="btn btn-just-icon btn-link btn-white"><i class="fa fa-google"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="blogs-1 no-padding-bottom" id="blogs-1">
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
                                  <h6 class="card-category text-info">{articleResults[0].data.article_tag}</h6>
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
                                    by
                                    <a href="#pablo" class="article-author">
                                      <b>Ruma</b>
                                    </a>,
                                    <FormatDate data={articleResults[0].data.date}/>
                                  </p>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonials-1 section-image" style={{backgroundImage: 'url(./vendor/creativetim/img/dg2.jpg)'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto text-center">
                            <h2 class="title">{data.homepage_testimonials_header[0].text}</h2>
                            <h5 class="description">{data.homepage_testimonials_text[0].text}</h5>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card card-testimonial">
                                <div class="icon">
                                    <i class="material-icons">format_quote</i>
                                </div>
                                <div class="card-body ">
                                    <h5 class="card-description">
                                      <Truncate lines={4} ellipsis={<span>... <a href="#pablo"> Read More </a></span>}>
                                        {testimonialResults[0].data.comment[0].text}
                                      </Truncate>
                                    </h5>
                                </div>
                                <div class="card-footer ">
                                    <h4 class="card-title">{testimonialResults[0].data.full_name[0].text}</h4>
                                    <h6 class="card-category">@{testimonialResults[0].data.full_name[0].text}</h6>
                                    <div class="card-avatar">
                                        <a href="#pablo">
                                            <img class="img" src={testimonialResults[0].data.photo.url} alt="testimonial ruma mundi stanhope gardens sydney"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-testimonial">
                                <div class="icon">
                                    <i class="material-icons">format_quote</i>
                                </div>
                                <div class="card-body ">
                                    <h5 class="card-description">
                                      <Truncate lines={4} ellipsis={<span>... <a href="#pablo"> Read More </a></span>}>
                                        {testimonialResults[1].data.comment[0].text}
                                      </Truncate>
                                    </h5>
                                </div>
                                <div class="card-footer ">
                                    <h4 class="card-title">{testimonialResults[1].data.full_name[0].text}</h4>
                                    <h6 class="card-category">@{testimonialResults[1].data.full_name[0].text}</h6>
                                    <div class="card-avatar">
                                        <a href="#pablo">
                                            <img class="img" src={testimonialResults[1].data.photo.url} alt="testimonial ruma mundi stanhope gardens sydney"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card card-testimonial">
                                <div class="icon">
                                    <i class="material-icons">format_quote</i>
                                </div>
                                <div class="card-body ">
                                    <h5 class="card-description">
                                      <Truncate lines={4} ellipsis={<span>... <a href="#pablo"> Read More </a></span>}>
                                        {testimonialResults[2].data.comment[0].text}
                                      </Truncate>
                                    </h5>
                                </div>
                                <div class="card-footer ">
                                    <h4 class="card-title">{testimonialResults[2].data.full_name[0].text}</h4>
                                    <h6 class="card-category">@{testimonialResults[2].data.full_name[0].text}</h6>
                                    <div class="card-avatar">
                                        <a href="#pablo">
                                            <img class="img" src={testimonialResults[2].data.photo.url} alt="testimonial ruma mundi stanhope gardens sydney"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLinkedToContactUs data={data.footer_content[0].text}/>
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
