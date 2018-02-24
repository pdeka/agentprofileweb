import React from 'react';
import ArticlePreview from './ArticlePreview';
import FormatDate from "./FormatDate";
import classNames from 'classnames';
import FormFactor from "../lib/FormFactor"

export default class ArticleTabCards extends React.Component {

  isEven(num) {
    return !(num % 2);
  }

  renderPreview(article) {
    return <div className={classNames('col-md-6')}>
      <ArticlePreview data={article.data}/>
    </div>;

  }

  renderSummary(article) {
    return <div className={classNames('col-md-6', 'text-left')}>
        <div className={classNames('col-md-10', 'text-left')}>
          <h3 className={classNames('card-title')}>
            {article.data.article_title[0].text}
          </h3>
          <p className={classNames('card-description')}>
            {article.data.article_summary[0].text}
          </p>
          <p className={classNames('author')}>
            by
            <b>Ruma</b>,&nbsp;
            <FormatDate data={article.data.date}/>
          </p>
      </div>
    </div>;
  }

  renderCards(articles, tab) {
    if (articles.length === 0) {
      return <div key="0" className={classNames('card', 'card-plain', 'card-blog')}>
        <div className={classNames('card-body')}>
          <h3 className={classNames('card-title')}>
            Sorry, Ruma has no '{tab}' content at the moment.
            <br/>
            Watch this space!
          </h3>
        </div>
      </div>;
    }
    return articles.map((article, index) => {

      if(index === 0){ return <span key="0"/>;}

      if (new FormFactor().isMobile() || this.isEven(index)) {
        return <div className={classNames('row')}>
          <div className={classNames('card', 'card-plain', 'card-blog')} key={index}>
            <div className={classNames('row')}>
              {this.renderPreview(article)}
              {this.renderSummary(article)}
            </div>
          </div>
        </div>
      } else {
        return <div className={classNames('row')}>
          <div className={classNames('card', 'card-plain', 'card-blog')} key={index}>
            <div className={classNames('row')}>
              {this.renderSummary(article)}
              {this.renderPreview(article)}
            </div>
          </div>
        </div>
      }
    });
  }

  render() {
    return this.renderCards(this.props.articleResults, this.props.tab);
  }
}
