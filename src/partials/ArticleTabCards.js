import React from 'react';
import ArticlePreview from './ArticlePreview';
import FormatDate from "./FormatDate";

export default class ArticleTabCards extends React.Component {

  selectArticles(tab, articleResults) {
    return articleResults.filter((article) => {
      if (article.data.article_tag === tab)
        return article;
      }
    );
  }

  isOdd(num) {
    return num % 2;
  }

  renderPreview(article) {
    return <div class="col-md-4">
      <ArticlePreview data={article.data}/>
    </div>;

  }

  renderSummary(article) {
    return <div class="col-md-8">
      <h3 class="card-title">
        {article.data.article_title[0].text}
      </h3>
      <p class="card-description">
        {article.data.article_summary[0].text}
      </p>
      <p class="author">
        by
        <b>Ruma</b>,&nbsp;
        <FormatDate data={article.data.date}/>
      </p>
    </div>;
  }

  renderCards(articles, tab) {
    if (articles.length === 0) {
      return <div class="card card-plain card-blog">
        <div class="card-body">
          <h3 class="card-title">
            Sorry, Ruma has no '{tab}' content at the moment.
            <br/>
            Watch this space!
          </h3>
        </div>
      </div>;
    }
    return articles.map((article, index) => {

      if(index === 0){ return;}

      if (this.isOdd(index)) {
        return <div class="card card-plain card-blog" key={index}>
          <div class="row">
            {this.renderSummary(article)}
            {this.renderPreview(article)}
          </div>
        </div>
      } else {
        return <div class="card card-plain card-blog" key={index}>
          <div class="row">
            {this.renderPreview(article)}
            {this.renderSummary(article)}
          </div>
        </div>
      }
    });
  }

  render() {
    let articles = this.selectArticles(this.props.tab, this.props.articleResults);

    return this.renderCards(articles, this.props.tab);
  }
}
