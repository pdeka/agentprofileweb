import React from 'react';
import classNames from 'classnames';
import ImageURL from '../lib/ImageURL'

export default class Image extends React.Component {

  render() {
    let image = new ImageURL(this.props.src);
    let clazz = this.props.clazz;
    return (<img className={classNames(clazz)} src={image.getURL()} alt={image.getAlt()}/>);
  }
}
