import React from 'react';
import classNames from 'classnames';

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

      return  <div className={classNames('col-md-12', 'ml-auto', 'mr-auto', 'mt-4')}>
          <h3 className={classNames('title')}>{tabItem.header}</h3>
          <p className={classNames('description')}>
            {tabItem.desc}
          </p>
        </div>;
  }

  render() {
    let descriptions = this.collectDescription(this.props.articlespageResults);
    return this.renderHeader(descriptions, this.props.tab);
  }
}
