import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import './Home.css';


// Declare your component
export default class Home extends React.Component {

  state = {
    doc: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    // this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      // We are using the function to get a document by its uid
      return props.prismicCtx.api.getByUID('<your-custom-type-id>', props.match.params.uid, {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });
    }
    return null;
  }

  render() {
    return <div class="main">
      <div class="cd-section" id="headers">
          <div class="header-1">
              <nav class="navbar navbar-transparent navbar-absolute navbar-expand-lg">
                  <div class="container">
                      <div class="navbar-translate">
                          <a class="navbar-brand" href="#">Ruma Mundi Logo</a>
                          <button type="button" class="ml-auto navbar-toggler" data-toggle="collapse" data-target="#navigation-example4">
                              <span class="sr-only">Toggle navigation</span>
                              <span class="navbar-toggler-icon"></span>
                              <span class="navbar-toggler-icon"></span>
                              <span class="navbar-toggler-icon"></span>
                          </button>
                      </div>
                      <div class="collapse navbar-collapse" id="navigation-example4">
                          <ul class="navbar-nav navbar-center ml-auto">
                              <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                      Home
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                      My Community
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                      Articles & Videos
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                      Success Stories
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                      Properties
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="#pablo" class="nav-link">
                                      Partners
                                  </a>
                              </li>
                          </ul>
                          <ul class="navbar-nav ml-auto">
                              <li class="nav-item">
                                  <a href="https://www.facebook.com/ruma.mundi" class="nav-link" target="_blank">
                                      <i class="fa fa-facebook-square"></i>
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="https://www.instagram.com/rumamundi/" class="nav-link" target="_blank">
                                      <i class="fa fa-instagram"></i>
                                  </a>
                              </li>
                              <li class="nav-item">
                                  <a href="https://www.youtube.com/channel/UCyKhjcW2Ca57SooI5zAcIgg" class="nav-link" target="_blank">
                                      <i class="fa fa-youtube"></i>
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </nav>
              <div class="page-header header-filter" >
                  <div class="container">
                      <div class="row">
                          <div class="col-md-6">
                              <h1 class="title">Ruma Mundi</h1>
                              <h4>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                              </h4>
                              <br/>
                              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="btn btn-danger btn-lg">
                                  Success Stories
                              </a>
                          </div>
                      </div>
                  </div>
                  <video autoPlay loop id="video-background" muted plays-inline preload="auto" poster="./images/poster.png">
                    <source src="https://luxuryp.s3.amazonaws.com/ecd307c1d17f6c44dd6779a538a6779d.m4v" type="video/mp4"/>
                  </video>
              </div>
          </div>
      </div>
      <div class="cd-section" id="features" style={{background: 'white'}}>
          <div class="container">
              <div class="features-1">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto">
                          <h2 class="title">Why are we different?</h2>
                          <h5 class="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</h5>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="info">
                              <div class="icon icon-info">
                                  <i class="material-icons">chat</i>
                              </div>
                              <h4 class="info-title">Free Chat</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info">
                              <div class="icon icon-success">
                                  <i class="material-icons">verified_user</i>
                              </div>
                              <h4 class="info-title">Verified Users</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="info">
                              <div class="icon icon-danger">
                                  <i class="material-icons">fingerprint</i>
                              </div>
                              <h4 class="info-title">Fingerprint</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="cd-section" id="blogs" style={{background: 'white'}}>
          <div class="blogs-1" id="blogs-1">
              <div class="container">
                  <div class="row">
                      <div class="col-md-10 ml-auto mr-auto">
                          <h2 class="title">Videos of the Week</h2>
                          <br/>
                          <div class="card card-plain card-blog">
                              <div class="row">
                                  <div class="col-md-5">
                                      <div class="card-header card-header-image">
                                          <a href="#pablito">
                                              <img class="img" src="./vendor/creativetim/img/examples/card-blog4.jpg"/>
                                          </a>
                                      </div>
                                  </div>
                                  <div class="col-md-7">
                                      <h6 class="card-category text-info">Enterprise</h6>
                                      <h3 class="card-title">
                                          <a href="#pablo">Autodesk looks to future of 3D printing with Project Escher</a>
                                      </h3>
                                      <p class="card-description">
                                          Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own business model disruption is only part of the story — and…
                                          <a href="#pablo"> Read More </a>
                                      </p>
                                      <p class="author">
                                          by
                                          <a href="#pablo">
                                              <b>Ruma</b>
                                          </a>, 2 days ago
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div class="card card-plain card-blog">
                              <div class="row">
                                  <div class="col-md-7">
                                      <h6 class="card-category text-danger">
                                          <i class="material-icons">trending_up</i> Trending
                                      </h6>
                                      <h3 class="card-title">
                                          <a href="#pablo">6 insights into the French Fashion landscape</a>
                                      </h3>
                                      <p class="card-description">
                                          Like so many organizations these days, Autodesk is a company in transition. It was until recently a traditional boxed software company selling licenses. Today, it’s moving to a subscription model. Yet its own business model disruption is only part of the story — and…
                                          <a href="#pablo"> Read More </a>
                                      </p>
                                      <p class="author">
                                          by
                                          <a href="#pablo">
                                              <b>Ruma</b>
                                          </a>, 2 days ago
                                      </p>
                                  </div>
                                  <div class="col-md-5">
                                      <div class="card-header card-header-image">
                                          <img class="img img-raised" src="./vendor/creativetim/img/office2.jpg"/>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="cd-section" id="testimonials">
          <div class="testimonials-1 section-image" style={{backgroundImage: 'url(' + './vendor/creativetim/img/dg2.jpg' + ')'}}>
              <div class="container">
                  <div class="row">
                      <div class="col-md-6 ml-auto mr-auto text-center">
                          <h2 class="title">Our Clients Love Us</h2>
                          <h5 class="description">You need more information? Check what other people are saying.</h5>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-md-4">
                          <div class="card card-testimonial">
                              <div class="icon">
                                  <i class="material-icons">format_quote</i>
                              </div>
                              <div class="card-body ">
                                  <h5 class="card-description">
                                    Ruma and her fantastic team recently sold our property in Quakers Hill. You get what you pay for.
                                  </h5>
                              </div>
                              <div class="card-footer ">
                                  <h4 class="card-title">Alec Thompson</h4>
                                  <h6 class="card-category">@alecthompson</h6>
                                  <div class="card-avatar">
                                      <a href="#pablo">
                                          <img class="img" src="./vendor/creativetim/img/faces/card-profile1-square.jpg"/>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="card card-testimonial">
                              <div class="icon">
                                  <i class="material-icons">format_quote</i>
                              </div>
                              <div class="card-body ">
                                  <h5 class="card-description">
                                      &quot;Don&apos;t be scared of the truth because we need to restart the human foundation in truth. That&apos;s why I love you like Kanye loves Kanye I love Rick Owens&#x2019; bed design but the back is not so attractive&quot;
                                  </h5>
                              </div>
                              <div class="card-footer ">
                                  <h4 class="card-title">Gina Andrew</h4>
                                  <h6 class="card-category">@ginaandrew</h6>
                                  <div class="card-avatar">
                                      <a href="#pablo">
                                          <img class="img" src="./vendor/creativetim/img/faces/card-profile4-square.jpg"/>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="card card-testimonial">
                              <div class="icon">
                                  <i class="material-icons">format_quote</i>
                              </div>
                              <div class="card-body ">
                                  <h5 class="card-description">
                                      &quot;Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!&quot;
                                  </h5>
                              </div>
                              <div class="card-footer ">
                                  <h4 class="card-title">George West</h4>
                                  <h6 class="card-category">@georgewest</h6>
                                  <div class="card-avatar">
                                      <a href="#pablo">
                                          <img class="img" src="./vendor/creativetim/img/faces/card-profile2-square.jpg"/>
                                      </a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="cd-section" id="contactus">
          <div class="contactus-2">
              <div id="contactUs2Map" class="map"></div>
              <div class="col-md-6">
                  <div class="card card-contact card-raised">
                      <form id="contact-form2" method="post">
                          <div class="card-header card-header-rose text-center">
                              <h4 class="card-title">Contact Us</h4>
                          </div>
                          <div class="card-body">
                              <div class="row">
                                  <div class="col-md-6">
                                      <div class="info info-horizontal">
                                          <div class="icon icon-rose">
                                              <i class="material-icons">phone</i>
                                          </div>
                                          <div class="description">
                                              <h5 class="info-title">Give us a ring</h5>
                                              <p> Ruma Mundi
                                                  <br/> +61 9876 1234
                                                  <br/> Mon - Fri, 9:00-15:00
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                                  <div class="col-md-6">
                                      <div class="info info-horizontal">
                                          <div class="icon icon-rose">
                                              <i class="material-icons">pin_drop</i>
                                          </div>
                                          <div class="description">
                                              <h5 class="info-title">Find us at the office</h5>
                                              <p> Shop 64-65/2 Sentry Dr,
                                                  <br/> Stanhope Gardens,
                                                  <br/> NSW 2768
                                              </p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
    </div>;
  }
}
