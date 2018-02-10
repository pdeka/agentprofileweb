import React from 'react';
import Truncate from 'react-truncate';
import classNames from 'classnames';

import "../styles/css/PageFooter.css";


export default class TestimonialCardBody extends React.Component {

  heroTestimonialQuote(data, index){
    return <span>
            <i className={classNames('fa', 'fa-quote-left', 'testimonialpage-quote-format', 'pr-2')}/>
            {data.quote[0] && data.quote[0].text}
            <i className={classNames('fa', 'fa-quote-right', 'testimonialpage-quote-format', 'pl-2')}></i>
          </span>;
  }

  render() {
    let data = this.props.data;
    let truncateLines = this.props.truncateLines;

    return <div className={classNames('card-body')}>
        <h2>
          {this.heroTestimonialQuote(data, 3)}
        </h2>
        <p className={classNames('card-description')}>
          <Truncate lines={truncateLines}
            ellipsis={<span>... <a target="_blank" style={{'fontWeight': 600}} href={data.external_link.url}>Read More</a></span>}>
            {data.comment[0].text}
          </Truncate>
        </p>
        <a href={data.external_link.url}>
          <h4 className={classNames('card-title', 'mb-0', 'pb-0')}> - {data.full_name[0].text}</h4>
          <h6 className={classNames('card-category', 'mt-0', 'pt-0')}>@&nbsp;Rate My Agent</h6>
        </a>
    </div>

  }
}
