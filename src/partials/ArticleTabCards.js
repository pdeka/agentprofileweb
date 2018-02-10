import React from 'react';
import ArticlePreview from './ArticlePreview';
import FormatDate from "./FormatDate";
import classNames from 'classnames';

export default class ArticleTabCards extends React.Component {

  isOdd(num) {
    return num % 2;
  }

  renderPreview(article) {
    return <div className={classNames('col-md-4')}>
      <ArticlePreview data={article.data}/>
    </div>;

  }

  renderSummary(article) {
    return <div className={classNames('col-md-8')}>
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

      if (this.isOdd(index)) {
        return <div className={classNames('card', 'card-plain', 'card-blog')} key={index}>
          <div className={classNames('row')}>
            {this.renderSummary(article)}
            {this.renderPreview(article)}
          </div>
        </div>
      } else {
        return <div className={classNames('card', 'card-plain', 'card-blog')} key={index}>
          <div className={classNames('row')}>
            {this.renderPreview(article)}
            {this.renderSummary(article)}
          </div>
        </div>
      }
    });
  }

  render() {
    return this.renderCards(this.props.articleResults, this.props.tab);
  }
}
