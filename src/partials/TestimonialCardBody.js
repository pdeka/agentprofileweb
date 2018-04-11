import React from 'react';
import Truncate from 'react-truncate';
import classNames from 'classnames';
import onFontFaceLoad from 'fontfaceonload';

import "../styles/css/PageFooter.css";


export default class TestimonialCardBody extends React.Component {

  componentDidMount () {
    onFontFaceLoad("Lora", {
      success: () => {
         this.forceUpdate();
      }
    });
  }

  heroTestimonialQuote(quote, truncateHeaderChars = 75){
    if(!quote) {
      return;
    }

    let quoteHeader = quote.text;
    if (quote.text.length > truncateHeaderChars) {
      quoteHeader = quote.text.substring(0,truncateHeaderChars-1) + "...";
    }

    return <h3>
            <i className={classNames('fa', 'fa-quote-left', 'testimonialpage-quote-format', 'pr-2')}/>
              <span className={classNames('testimonial-card-header')}>
                  {quoteHeader}
              </span>
            <i className={classNames('fa', 'fa-quote-right', 'testimonialpage-quote-format', 'pl-2')}></i>
          </h3>;
  }

  nameWithExternalLink(data, excludeExternalLink) {

    if(!excludeExternalLink) {
      return (<a href={data.external_link.url}>
        <h4 className={classNames('card-title', 'mb-0', 'pb-0')}> - {data.full_name[0].text}</h4>
        <h6 className={classNames('card-category', 'mt-0', 'pt-0')}>@&nbsp;Rate My Agent</h6>
      </a>);
    } else {
      return (<div>
        <h4 className={classNames('card-title', 'mb-0', 'pb-0')}> - {data.full_name[0].text}</h4>
      </div>);
    }
  }

  render() {
    let data = this.props.data;
    let truncateLines = this.props.truncateLines;
    let truncateHeaderChars = this.props.truncateHeaderChars;
    let excludeExternalLink = this.props.excludeExternalLink;

    return (<div className={classNames('card-body')}>
        {this.heroTestimonialQuote(data.quote[0], truncateHeaderChars)}
        <p className={classNames('card-description')}>
          <Truncate lines={truncateLines}
            ellipsis={<span>... <a target="_blank" style={{'fontWeight': 600}} href={data.external_link.url}>Read More</a></span>}>
            {data.comment[0].text}
          </Truncate>
        </p>
        {this.nameWithExternalLink(data, excludeExternalLink)}
    </div>);

  }
}
