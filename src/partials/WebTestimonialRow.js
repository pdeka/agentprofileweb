import React from 'react';
import TestimonialCardBody from './TestimonialCardBody';
import classNames from 'classnames';

export default class WebTestimonialRow extends React.Component {

  render(){
    let testimonialResults = this.props.testimonialResults;
    let indices = this.props.indices;

    if (!testimonialResults[indices[0]]) {
      return <span/>;
    }

    return <div className={classNames('row')}>
        <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
            <div className={classNames('row')}>
              {indices.map((key) => {
                if (!testimonialResults[key]) {
                  return <span key={key}/>;
                }

                return <div key={key} className={classNames('col-md-4')}>
                    <div className={classNames('card', 'card-testimonial')}>
                        <div className={classNames('card-header', 'card-header-image')}>
                                <img className={classNames('img', 'img-raised')} src={testimonialResults[key].data.photo.url} alt=""/>
                        </div>
                        <TestimonialCardBody truncateLines={7} data={testimonialResults[key].data} />
                    </div>
                </div>
              }
            )}
            </div>
        </div>
    </div>;
  }

}
