import React from 'react';
import Prismic from 'prismic-javascript';
import Truncate from 'react-truncate';
import MainNavigation from './MainNavigation';
import FooterLinkedToContactUs from './FooterLinkedToContactUs';
import classNames from 'classnames';
import ArticlePreview from './ArticlePreview';
import FormatDate from './FormatDate';

import './styles/css/Articles.css';

export default class Articles extends React.Component {

  state = {
    doc: null,
    articles: null,
    testimonials: null,
    contactInfo: null,
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'article'), {
        orderings: '[my.article.date desc]',
        pageSize: 2
      }).then((articles) => {
        if (articles) {
          this.setState({articles});
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'testimonial'), {
        orderings: '[my.testimonial.date desc]',
        pageSize: 3
      }).then((testimonials) => {
        if (testimonials) {
          this.setState({testimonials});
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'contactinformation')).then((contactInfo) => {
        if (contactInfo) {
          this.setState({contactInfo});
        }
      });

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

      const headerSummaryParagraphs = data.top_level_text_1.map((para) => {
        return <div key={Math.random(1, 9)}>{para.text}</div>
      })

      return <div class="blog-posts ">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url(./vendor/creativetim/img/bg10.jpg)'}}>
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">A Place for Entrepreneurs to Share and Discover New Stories</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="main main-raised">
          <div class="container">
            <div class="section">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                  <ul class="nav nav-pills nav-pills-primary">
                    <li class="nav-item">
                      <a class="nav-link active" href="#pill2" data-toggle="tab">My Community</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#pill3" data-toggle="tab">Advice</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#pill3" data-toggle="tab">Market Wrap-ups</a>
                    </li>
                  </ul>
                  <div class="tab-content">
                    <div class="tab-pane active" id="pill1"></div>
                    <div class="tab-pane" id="pill2"></div>
                    <div class="tab-pane" id="pill3"></div>
                    <div class="tab-pane" id="pill4"></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="blogs-4" id="blogs-4">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 ml-auto mr-auto">
                                <div class="card card-plain card-blog">
                                    <div class="card-header card-header-image">
                                        <a href="#pablo">
                                            <img class="img img-raised" src="./vendor/creativetim/img/bg5.jpg"/>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-category text-info">Fashion</h6>
                                        <h3 class="card-title">
                                            <a href="#pablo">Autodesk looks to future of 3D</a>
                                        </h3>
                                        <h5 class="card-description">
                                            Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out that it’s the first album to go number 1 off of streaming...
                                        </h5>
                                    </div>
                                </div>
                                <div class="card card-plain card-blog">
                                    <div class="card-header card-header-image">
                                        <a href="#pablo">
                                            <img class="img img-raised" src="./vendor/creativetim/img/bg5.jpg"/>
                                        </a>
                                    </div>
                                    <div class="card-body">
                                        <h6 class="card-category text-success">Lifestyle</h6>
                                        <h3 class="card-title">
                                            <a href="#pablo">We will breathe clean air and exercise</a>
                                        </h3>
                                        <h5 class="card-description">
                                            Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out that it’s the first album to go number 1 off of streaming...
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div class="subscribe-line">
            <div class="container">
              <div class="row">
                <div class="col-md-6">
                  <h3 class="title">Get Tips &amp; Tricks every Week!</h3>
                  <p class="description">
                    Join our newsletter and get news in your inbox every week! We hate spam too, so no worries about this.
                  </p>
                </div>
                <div class="col-md-6">
                  <div class="card card-plain card-form-horizontal">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-4">
                          <button type="button" class="btn btn-primary btn-round btn-block">Subscribe</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer ">
          <div class="container">
            <nav class="pull-left">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a href="http://presentation.creative-tim.com">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license">
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
            <div class="copyright pull-right">
              &copy; 2018, made with
              <i class="material-icons">favorite</i>
              by
              <a href="https://www.creative-tim.com" target="_blank">Creative Tim</a>
              for a better web.
            </div>
          </div>
        </footer>
      </div>

    } else {
      return <div className={classNames('sections-page', 'section-white')}>
        <div id="spinner-middle">
          <div>
            <i className={classNames('fa', 'fa-refresh', 'fa-spin', 'fa-5x', 'fa-fw')}></i>
          </div>
        </div>
      </div>

    }
  }
}
