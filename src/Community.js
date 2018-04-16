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
import Image from "./partials/Image";
import ImageURL from "./lib/ImageURL";

import './styles/css/Community.css';

export default class Community extends React.Component {

  state = {
    communitypage: null,
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'communitypage')).then((communitypage) => {
        if (communitypage) {
          this.setState({communitypage});
        } else {
          this.setState({
            notFound: !communitypage
          });
        }
      });

      props.prismicCtx.api.query([
        Prismic.Predicates.at('document.tags', ['Our Community']),
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
    if (this.state.communitypage && this.state.articles) {

      let communitypage = this.state.communitypage.results[0].data;
      let articleResults = this.state.articles.results;

      return <div className={classNames('sections-page')}>
        <MainNavigation navBarTransparent={true}/>
        <div className={classNames('page-header', 'header-medium', 'header-filter-3')} data-parallax="true" style={{backgroundImage: "url(" +new ImageURL(communitypage.header_background_image).getURL()+")"}}>
        <div className={classNames('container')}>
              <div className={classNames('row', 'justify-content-center')}>
                <Image src={communitypage.header_foreground_image} />
              </div>
        </div>

        </div>
        <div className={classNames('main', 'main-raised')}>
          <div className={classNames('features-1', 'pt-5', 'pb-3')}>
            <div className={classNames('container')}>
              <div className={classNames('row')}>
                  <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                      <h2 className={classNames('title')}>{communitypage.second_level_header[0].text}</h2>
                      <div className={classNames('description')}  >
                          {RichText.render(communitypage.community_summary)}
                      </div>
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
                      <ArticleTabCards key= "0" articleResults={articleResults} tab={"My Community"} />
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
