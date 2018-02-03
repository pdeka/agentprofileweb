import React from 'react';
import ArticlePreview from './ArticlePreview';
import FormatDate from "./FormatDate";


export default class ArticleTabCards extends React.Component {

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
                </div>;
      });
    }
  }

  render() {
    let articles = this.selectArticles(this.props.tab, this.props.articleResults);

    return this.renderCards(articles, this.props.tab);
  }
}
