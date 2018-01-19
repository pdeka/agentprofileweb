import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import './Home.css';
import PrismicConfig from './prismic-configuration';
import Prismic from 'prismic-javascript';
import MapContainer from './MapContainer';
import ArticlePreview from './ArticlePreview';

export default class Home extends React.Component {

  state = {
    doc: null,
    articles: null,
    testimonials: null,
    notFound: false,
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  componentDidUpdate() {
    this.props.prismicCtx.toolbar();
  }

  fetchPage(props) {
    if (props.prismicCtx) {

      // We are using the function to get a document by its uid
      props.prismicCtx.api.getByUID('homepage', PrismicConfig.homepage_uid, {}, (err, doc) => {
        if (doc) {
          // We put the retrieved content in the state as a doc variable
          this.setState({ doc });
        } else {
          // We changed the state to display error not found if no matched doc
          this.setState({ notFound: !doc });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'article'), { orderings : '[my.article.date desc]', pageSize : 2  }).then(
        (articles) => {
          if (articles) {
            // We put the retrieved content in the state as a doc variable
            this.setState({ articles });
          }
        }
      );

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'testimonial'), { orderings : '[my.testimonial.date desc]', pageSize : 3  }).then(
        (testimonials) => {
          if (testimonials) {
            // We put the retrieved content in the state as a doc variable
            this.setState({ testimonials });
          }
        }
      );

      return null;

    }
    return null;
  }

  render() {
    if (this.state.doc && this.state.articles && this.state.testimonials) {
      let data = this.state.doc.data;
      let articleResults = this.state.articles.results;
      let testimonialResults = this.state.testimonials.results;
      // console.log("Here is the document: " + JSON.stringify(articleResults));

      const headerSummaryParagraphs = data.top_level_text_1.map((para) => {return <div key={Math.random(1,9)}>{para.text}</div>})

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
                                        Articles & Videos
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#pablo" class="nav-link">
                                        Success Stories
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href={data.properties_link.url} class="nav-link" target="_blank">
                                        Properties
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#pablo" class="nav-link">
                                        Partners
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#pablo" class="nav-link">
                                        Contact Us
                                    </a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a href={data.facebook_link.url} class="nav-link" target="_blank">
                                        <i class="fa fa-facebook-square"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href={data.instagram_link.url} class="nav-link" target="_blank">
                                        <i class="fa fa-instagram"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href={data.youtube_link.url} class="nav-link" target="_blank">
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
                                <h1 class="title">{data.homepage_header[0].text}</h1>
                                <h4 class="hero-text">{headerSummaryParagraphs}</h4>
                            </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                                  <span class="hero-contact-info-container">
                                    <i class="fa fa-phone"></i>
                                    <span class="hero-contact-info">+61 420 234 234</span>
                                  </span>
                                  <span class="hero-contact-info-container">
                                    <i class="fa fa-envelope"></i>
                                    <span class="hero-contact-info">mail</span>
                                  </span>
                                  <span class="hero-contact-info-container">
                                    <i class="fa fa-handshake-o"></i>
                                    <span class="hero-contact-info">meet</span>
                                  </span>
                          </div>
                        </div>
                    </div>
                    <video autoPlay loop id="video-background" muted plays-inline="true" preload="auto" poster="./images/poster.png">
                      <source src="https://luxuryp.s3.amazonaws.com/ecd307c1d17f6c44dd6779a538a6779d.m4v" type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
        <div class="cd-section" id="features" style={{background: 'white'}}>
            <div class="container">
                <div class="features-1 no-padding-bottom">
                    <div class="row">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h2 class="title">{data.our_difference_header[0].text}</h2>
                            <h5 class="description">{data.our_difference_text[0].text}</h5>
                            <div class="icon">
                              <i class="material-icons">format_quote</i>
                            </div>
                            <blockquote class="blockquote text-center">
                              <p class="mb-0">{data.our_difference_quotation[0].text}</p>
                              <footer class="blockquote-footer">{data.quotation_by[0].text}</footer>
                            </blockquote>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-disabled">
                                    <i class="material-icons">home</i>
                                </div>
                                <h4 class="info-title">300 houses sold</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-disabled">
                                    <i class="material-icons">gavel</i>
                                </div>
                                <h4 class="info-title">90% auction clearance rate</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="info">
                                <div class="icon icon-disabled">
                                    <i class="material-icons">star</i>
                                </div>
                                <h4 class="info-title">Top 10 agent</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cd-section" id="blogs" style={{background: 'white'}}>
            <div class="blogs-1 no-padding-bottom" id="blogs-1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 ml-auto mr-auto">
                            <h2 class="title">{data.homepage_articles_header[0].text}</h2>
                            <br/>
                            <div class="card card-plain card-blog">
                                <div class="row">
                                    <div class="col-md-5">
                                      <ArticlePreview data={articleResults[0].data} />
                                    </div>
                                    <div class="col-md-7">
                                        <h6 class="card-category text-info">{articleResults[0].data.article_tag}</h6>
                                        <h3 class="card-title">
                                            <a href="#pablo">{articleResults[0].data.article_title[0].text}</a>
                                        </h3>
                                        <p class="card-description">
                                            {articleResults[0].data.article_summary[0].text}
                                            <a href="#pablo"> Read More </a>
                                        </p>
                                        <p class="author">
                                            by
                                            <a href="#pablo">
                                                <b>Ruma</b>
                                            </a>, {articleResults[0].data.date}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="card card-plain card-blog">
                                <div class="row">
                                    <div class="col-md-7">
                                        <h6 class="card-category text-danger">
                                            <i class="material-icons">trending_up</i> {articleResults[1].data.article_tag}
                                        </h6>
                                        <h3 class="card-title">
                                            <a href="#pablo">{articleResults[1].data.article_title[0].text}</a>
                                        </h3>
                                        <p class="card-description">
                                            {articleResults[1].data.article_summary[0].text}
                                            <a href="#pablo"> Read More </a>
                                        </p>
                                        <p class="author">
                                            by
                                            <a href="#pablo">
                                                <b>Ruma</b>
                                            </a>, {articleResults[1].data.date}
                                        </p>
                                    </div>
                                    <div class="col-md-5">
                                      <ArticlePreview data={articleResults[1].data} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cd-section" id="testimonials">
            <div class="testimonials-1 section-image no-padding-bottom" style={{backgroundImage: 'url(' + './vendor/creativetim/img/dg2.jpg' + ')'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 ml-auto mr-auto text-center">
                            <h2 class="title">{data.homepage_testimonials_header[0].text}</h2>
                            <h5 class="description">{data.homepage_testimonials_text[0].text}</h5>
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
                                     {testimonialResults[0].data.comment[0].text}
                                    </h5>
                                </div>
                                <div class="card-footer ">
                                    <h4 class="card-title">{testimonialResults[0].data.full_name[0].text}</h4>
                                    <h6 class="card-category">@{testimonialResults[0].data.full_name[0].text}</h6>
                                    <div class="card-avatar">
                                        <a href="#pablo">
                                            <img class="img" src={testimonialResults[0].data.photo.url}/>
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
                                      {testimonialResults[1].data.comment[0].text}
                                    </h5>
                                </div>
                                <div class="card-footer ">
                                    <h4 class="card-title">{testimonialResults[1].data.full_name[0].text}</h4>
                                    <h6 class="card-category">@{testimonialResults[1].data.full_name[0].text}</h6>
                                    <div class="card-avatar">
                                        <a href="#pablo">
                                            <img class="img" src={testimonialResults[1].data.photo.url}/>
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
                                      {testimonialResults[2].data.comment[0].text}
                                    </h5>
                                </div>
                                <div class="card-footer ">
                                    <h4 class="card-title">{testimonialResults[2].data.full_name[0].text}</h4>
                                    <h6 class="card-category">@{testimonialResults[2].data.full_name[0].text}</h6>
                                    <div class="card-avatar">
                                        <a href="#pablo">
                                            <img class="img" src={testimonialResults[2].data.photo.url}/>
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
                <div class="map">
                  <MapContainer />
                </div>
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
                                                <p> {data.contact_us_name[0].text}
                                                    <br/> {data.phone[0].text}
                                                    <br/> {data.office_opening_hours[0].text}
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
                                                <p> {data.address_line_1[0].text}
                                                    <br/> {data.address_line_2[0].text}
                                                    <br/> {data.address_line_3[0].text}
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
      </div>
    }else{
      return   <div class="sections-page  section-white">
        <div id="spinner-middle">
          <div>
              <i class="fa fa-refresh fa-spin fa-5x fa-fw"></i>
          </div>
        </div>
      </div>

    }
  }
}
