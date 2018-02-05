import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import FooterLinkedToContactUs from "./partials/FooterLinkedToContactUs";
import PageFooter from "./partials/PageFooter";
import ArticleTabCards from "./partials/ArticleTabCards";
import ArticlePreview from "./partials/ArticlePreview";
import FormatDate from "./partials/FormatDate";
import {Link} from 'react-router-dom';

import './styles/css/About.css';

export default class Properties extends React.Component {

  state = {
    doc: null,
    aboutpage: null,
    notFound: false,
    articles: null
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'aboutpage')).then((aboutpage) => {
        if (aboutpage) {
          this.setState({aboutpage});
        }
      });

      props.prismicCtx.api.query([
        Prismic.Predicates.at('document.tags', ['Properties']),
        Prismic.Predicates.at('document.type', 'article')
      ], {orderings: '[my.article.date desc]'}
      ).then((articles) => {
        if (articles) {
          this.setState({articles});
        }
      });

      return null;

    }
    return null;
  }

  render() {
    if (this.state.doc && this.state.aboutpage && this.state.articles) {

      let data = this.state.doc.results[0].data;
      let aboutpageResults = this.state.aboutpage.results;

      let articleResults = this.state.articles.results;


      return <div class="sections-page">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="page-header header-small header-filter" data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F52219df8-9af5-4681-a719-be9132fbf5c1_photo-collage-vector-background.jpg)'}}>
        <div class="container hero-text-margin">
              <div class="row justify-content-center mt-5">
                <h2 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing</h2>
              </div>
        </div>

        </div>
        <div class="main main-raised">
          <div class="features-1 pt-5 pb-3">
            <div class="container">
              <div class="row">
                  <div class="col-md-8 ml-auto mr-auto">
                      <h3 class="title">Lorem ipsum dolor sit amet</h3>
                      <p class="description"  >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <p class="description"  >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <div class="icon">
                        <i class="material-icons">format_quote</i>
                      </div>
                      <blockquote class="blockquote text-center">
                        <p class="mb-0">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <footer class="blockquote-footer">Ruma</footer>
                      </blockquote>
                      <a href={data.properties_link.url} target="_blank" >
                        <button class="btn btn-primary btn-round">Our Properties<div class="ripple-container"></div>
                        </button>
                      </a>
                  </div>
              </div>
            </div>
          </div>
          <div class="cd-section section-dark">
            <div class="container" >
                <div class="row">
                  <div class="col-md-8 ml-auto mr-auto">
                    <div class="card card-plain card-profile mt-5 mb-0">
                          <ArticlePreview data={articleResults[0].data}/>

                          <div class="card-body">
                                <h3 class="card-title">
                                  {articleResults[0].data.article_title[0].text}
                                </h3>
                                <p class="card-description">
                                  {articleResults[0].data.article_summary[0].text}
                                </p>
                                <p class="author text-white">
                                  by &nbsp;<b>Ruma</b>,&nbsp;
                                  <FormatDate data={articleResults[0].data.date}/>
                                </p>
                          </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div class="cd-section">
            <div class="features-1 articlepage-tabs">
              <div class="container">
                <div class="row">
                  <div class="container">
                      <div class="row">
                          <ArticleTabCards articleResults={articleResults} tab={"Properties"} />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterLinkedToContactUs data={"Contact Ruma for a market appraisal"}/>
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
