import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './MainNavigation';
import classNames from 'classnames';
import ArticlePreview from './ArticlePreview';

import './styles/css/Articles.css';

export default class Articles extends React.Component {

  state = {
    doc: null,
    articles: null,
    articlespage: null,
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
        orderings: '[my.article.date desc]'
      }).then((articles) => {
        if (articles) {
          this.setState({articles});
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'articlespage')).then((articlespage) => {
        if (articlespage) {
          this.setState({articlespage});
        }
      });

      return null;

    }
    return null;
  }

  filterTabs(articlespageResults){
    return articlespageResults[0].data.filters[0].text.split(',').map((item)=> {return item.trim()});
  }

  replaceSpace(tab){
    return tab.replace(' ','-');
  }

  selectArticles(tab, articleResults){
    return articleResults.filter((article) => {
      if (article.data.article_tag === tab) return article;
    });
  }

  renderCards(articles, tab) {
    if (articles.length === 0){
      return <div class="card card-plain card-blog">
            <div class="card-body">
              <h3 class="card-title">
                Sorry, Ruma has no '{tab}' content at the moment.
                <br/>
                Watch this space!
              </h3>
            </div>
        </div>;
    } else{
      return articles.map((article, childIndex) => {
        return <div class="card card-plain card-blog" key={childIndex}>
              <ArticlePreview data={article.data} />
              <div class="card-body">
                  <h6 class="card-category text-info">{tab}</h6>
                  <h3 class="card-title">
                      <a href="#pablo">{article.data.article_title[0].text}</a>
                  </h3>
                  <h5 class="card-description">
                    {article.data.article_summary[0].text}
                  </h5>
              </div>
          </div>
      });
    }
  }

  render() {
    if (this.state.doc && this.state.articles && this.state.articlespage) {

      let data = this.state.doc.results[0].data;
      let articleResults = this.state.articles.results;
      let articlespageResults = this.state.articlespage.results;


      let tabs = this.filterTabs(articlespageResults);

      return <div class="blog-posts ">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url(./vendor/creativetim/img/bg10.jpg)'}}>
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">{articlespageResults[0].data.header[0].text}</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="main main-raised">
          <div class="container">
            <div class="section">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                  <ul class="nav nav-pills nav-pills-warning">
                    {tabs.map((tab, index) => {
                      let aClasses = (index === 0)? {'nav-link': true, 'active': true}: {'nav-link': true, 'active': false};
                      return <li key={index} class="nav-item">
                        <a className={classNames(aClasses)} href={'#' + this.replaceSpace(tab)} data-toggle="tab">{tab}</a>
                      </li>;
                    })}
                  </ul>
                </div>
              </div>
              <div class="row">
                <div class="blogs-4" id="blogs-4">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-8 ml-auto mr-auto">
                              <div class="tab-content">
                                {tabs.map((tab, index) => {
                                  let divClasses = (index === 0)? {'tab-pane': true, 'active': true}: {'tab-pane': true, 'active': false};
                                  let articles = this.selectArticles(tab, articleResults);
                                  return <div key={index} className={classNames(divClasses)} id={this.replaceSpace(tab)}>
                                    {this.renderCards(articles, tab)}
                                  </div>
                                })}
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
                  <h3 class="title">{articlespageResults[0].data.footer_content[0].text}</h3>
                </div>
                <div class="col-md-6">
                  <div class="card card-plain card-form-horizontal">
                    <div class="card-body">
                      <div class="row">
                        <div class="col-md-4">
                          <a href="/contactus">
                            <button type="button" class="btn btn-warning btn-round btn-block">Contact Us</button>
                          </a>
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
              <a href="https://www.creative-tim.com" target="_blank" rel="noopener noreferrer">Creative Tim</a>
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
