import React from 'react';

export default class ArticleTabHeader extends React.Component {

  collectDescription(articlespageResults) {
    let descriptions = {};
    articlespageResults[0].data.body[0].items.map(item => {
      descriptions[item.tab[0].text] = {'header': item.header[0].text, 'desc': item.description[0].text};
    });

    return descriptions;
  }

  renderHeader(descriptions, tab) {
      let tabItem = descriptions[tab];

      return <div class="col-md-12 ml-auto mr-auto">
          <h3 class="title">{tabItem.header}</h3>
          <p class="description">
            {tabItem.desc}
          </p>
      </div>;
  }

  render() {
    let descriptions = this.collectDescription(this.props.articlespageResults);
    return this.renderHeader(descriptions, this.props.tab);
  }
}
