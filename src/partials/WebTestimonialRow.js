import React from 'react';
import Truncate from 'react-truncate';

export default class Testimonials extends React.Component {

  heroTestimonialQuote(testimonialResults, index){
    return <span>
            <i class="fa fa-quote-left testimonialpage-quote-format pr-2"/>
            {testimonialResults[index].data.optional_quote[0] && testimonialResults[index].data.optional_quote[0].text}
            <i class="fa fa-quote-right testimonialpage-quote-format pl-2"></i>
          </span>;
  }

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
                  return <span/>;
                }

                return <div key={key} class="col-md-4">
                    <div class="card card-testimonial">
                        <div class="card-header card-header-image">
                                <img class="img img-raised" src={testimonialResults[key].data.photo.url} />
                        </div>
                        <div class="card-body">
                            <p class="card-description">
                              <Truncate lines={7} ellipsis={<span>... <a target="_blank" href={testimonialResults[key].data.external_link.url}>Read More</a></span>}>
                                {testimonialResults[key].data.comment[0].text}
                              </Truncate>
                            </p>
                            <a href={testimonialResults[key].data.external_link.url}>
                              <h4 class="card-title mb-0 pb-0"> - {testimonialResults[key].data.full_name[0].text}</h4>
                              <h6 class="card-category mt-0 pt-0">@&nbsp;Rate My Agent</h6>
                            </a>
                        </div>
                    </div>
                </div>
              }
            )}
            </div>
        </div>
    </div>;
  }

}
