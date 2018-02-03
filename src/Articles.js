import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import ArticlePreview from './partials/ArticlePreview';
import FooterLinkedToContactUs from "./partials/FooterLinkedToContactUs";
import PageFooter from "./partials/PageFooter";
import FormatDate from "./partials/FormatDate";

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
                  <div class="row">
                      <div class="col-md-4">
                        <ArticlePreview data={article.data} />
                      </div>
                      <div class="col-md-8">
                        <h3 class="card-title" style={{marginTop: 0}}>
                          {article.data.article_title[0].text}
                        </h3>
                        <p class="card-description">
                          {article.data.article_summary[0].text}
                        </p>
                        <p class="author">
                          by <b>Ruma</b>,&nbsp;
                          <FormatDate data={article.data.date}/>
                        </p>
                      </div>
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

      return <div class="sections-page">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
          <div class="container">
              <div class="row">
                  <div class="col-md-8">
                      <h2 class="title pb-0 mb-0" >News & Advice</h2>
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
          <div class="container">
            <div class="section">
              <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                  <ul class="nav nav-pills nav-pills-primary">
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
                <div class="blogs-3" id="blogs-3">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-10 ml-auto mr-auto">
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
          <FooterLinkedToContactUs data={articlespageResults[0].data.footer_content[0].text}/>
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
