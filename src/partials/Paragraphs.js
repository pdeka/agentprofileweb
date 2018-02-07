import React from 'react';
import classNames from 'classnames';

export default class Paragraphs extends React.Component {

  renderParagraphs(paragraphs, clazz) {
    return paragraphs.map((para, index) => {
      return <p className={classNames(clazz ,  'mb-4', 'mt-4')} key={index}>{para.text}</p>
    });
  }

  render() {
    let paragraphs = this.props.paragraphs;
    let clazz = this.props.clazz || "";

    return <span >
            {this.renderParagraphs(paragraphs, clazz)}
      </span>;
  }
}
