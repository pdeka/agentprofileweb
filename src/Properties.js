import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import PageFooter from "./partials/PageFooter";
import ArticleTabCards from "./partials/ArticleTabCards";
import ArticlePreview from "./partials/ArticlePreview";
import FormatDate from "./partials/FormatDate";
import {RichText} from 'prismic-reactjs';
import Loading from "./partials/Loading";
import RegularButton from './components/CustomButtons/RegularButton';
import ImageURL from "./lib/ImageURL";

import './styles/css/About.css';

export default class Properties extends React.Component {

  state = {
    propertiespage: null,
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

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  fetchPage(props) {
    if (props.prismicCtx) {

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'propertiespage')).then((propertiespage) => {
        if (propertiespage) {
          this.setState({propertiespage});
        } else {
          this.setState({
            notFound: !propertiespage
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
    if (this.state.propertiespage && this.state.articles) {

      let propertiespage = this.state.propertiespage.results[0].data;
      let articleResults = this.state.articles.results;

      return <div className={classNames('sections-page')}>
        <MainNavigation navBarTransparent={true}/>
        <div className={classNames('page-header', 'header-medium', 'header-filter')} data-parallax="true" style={{backgroundImage: "url(" +new ImageURL(propertiespage.header_background_image).getURL() +")"}}>
        <div className={classNames('container')}>
              <div className={classNames('row', 'justify-content-center')}>
                <h1 className={classNames('title', 'text-center', 'desktop-display')}>{propertiespage.header[0].text}</h1>
                <div className={classNames('title', 'text-center', 'mobile-display')}>
                  <h1 className={classNames('title', 'text-center', 'mobile-display')}>Because</h1>
                  <h2 className={classNames('title', 'text-center', 'mobile-display')}>There Truely is no Place</h2>
                  <h1 className={classNames('title', 'text-center', 'mobile-display')}>Like Home</h1>
                </div>
              </div>
        </div>

        </div>
        <div className={classNames('main', 'main-raised')}>
          <div className={classNames('features-1', 'pt-5', 'pb-3')}>
            <div className={classNames('container')}>
              <div className={classNames('row')}>
                  <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                      <h2 className={classNames('title')}>{propertiespage.second_level_header[0].text}</h2>
                      <div className={classNames('description')}  >
                        {RichText.render(propertiespage.properties_summary)}
                      </div>
                      <a href={propertiespage.properties_external_link.url} target="_blank">
                        <RegularButton
                            color="primary"
                            aria-label="Our Properties">
                            Our Properties
                        </RegularButton>
                      </a>
                  </div>
              </div>
            </div>
          </div>
          <div className={classNames('cd-section', 'section-dark')}>
            <div className={classNames('container')} >
                <div className={classNames('row')}>
                  <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                    <div className={classNames('card', 'card-plain', 'card-profile', 'mt-5', 'mb-0')}>
                          <ArticlePreview data={articleResults[0].data}/>

                          <div className={classNames('card-body')}>
                                <h3 className={classNames('card-title')}>
                                  {articleResults[0].data.article_title[0].text}
                                </h3>
                                <div className={classNames('card-description-white')}>
                                  {RichText.render(articleResults[0].data.article_text)}
                                </div>
                                <p className={classNames('author', 'text-white')}>
                                  by &nbsp;<b>Ruma</b>,&nbsp;
                                  <FormatDate data={articleResults[0].data.date}/>
                                </p>
                          </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className={classNames('cd-section')}>
            <div className={classNames('features-1', 'articlepage-tabs')}>
              <div className={classNames('container')}>
                <div className={classNames('row')}>
                  <div className={classNames('container')}>
                      <ArticleTabCards articleResults={articleResults} tab={"Properties"} />
                  </div>
                </div>
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
