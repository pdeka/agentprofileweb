import React from 'react';
import moment from 'moment';

export default class FormatDate extends React.Component {

  formatDate(dateUnformatted){
    return moment(dateUnformatted, 'YYYY-MM-DD').fromNow();
  }
  render() {
    return <span>{this.formatDate(this.props.data)}</span>
  }
}
