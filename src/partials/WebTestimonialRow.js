import React from 'react';
import Truncate from 'react-truncate';
import TestimonialCardBody from './TestimonialCardBody';

export default class WebTestimonialRow extends React.Component {

  render(){
    let testimonialResults = this.props.testimonialResults;
    let indices = this.props.indices;

    if (!testimonialResults[indices[0]]) {
      return <span/>;
    }

    return <div class="row">
        <div class="col-md-12 ml-auto mr-auto">
            <div class="row">
              {indices.map((key) => {
                if (!testimonialResults[key]) {
                  return <span key={key}/>;
                }

                return <div key={key} class="col-md-4">
                    <div class="card card-testimonial">
                        <div class="card-header card-header-image">
                                <img class="img img-raised" src={testimonialResults[key].data.photo.url} />
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
