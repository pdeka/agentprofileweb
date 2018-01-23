import React from 'react';
import Prismic from 'prismic-javascript';
import MapContainer from './MapContainer';
import MainNavigation from './MainNavigation';
import './styles/css/ContactUs.css';

export default class ContactUs extends React.Component {

  state = {
    homepageDoc: null,
    contactuspageDoc: null,
    contactInfo: null
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'homepage')).then((homepageDoc) => {
        if (homepageDoc) {
          this.setState({homepageDoc});
        } else {
          this.setState({
            notFound: !homepageDoc
          });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'contactuspage')).then((contactuspageDoc) => {
        if (contactuspageDoc) {
          this.setState({contactuspageDoc});
        } else {
          this.setState({
            notFound: !contactuspageDoc
          });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'contactinformation')).then((contactInfo) => {
        if (contactInfo) {
          this.setState({contactInfo});
        }
      });

      return null;
    }
    return null;
  }

  render() {
    if (this.state.homepageDoc && this.state.contactuspageDoc && this.state.contactInfo) {

      let homepage = this.state.homepageDoc.results[0].data;
      let contactuspage = this.state.contactuspageDoc.results[0].data;
      let contactInfo = this.state.contactInfo.results[0].data;

      return <div class="contact-us ">
        <MainNavigation thisProp={homepage} navBarTransparent={false}/>
        <div id="contactUsMap" class="big-map">
          <MapContainer/>
        </div>
        <div class="main main-raised">
          <div class="contact-content">
            <div class="container">
              <h2 class="title">{contactuspage.header[0].text}</h2>
              <div class="row">
                <div class="col-md-6">
                  <p class="description">{contactuspage.title_text[0].text}
                    <br/>
                    <br/>
                  </p>
                  <form id="contact-form" method="post">
                    <div class="form-group">
                      <label htmlFor="name" class="bmd-label-floating">Your name</label>
                      <input type="text" class="form-control" id="name"/>
                    </div>
                    <div class="form-group">
                      <label htmlFor="exampleInputEmails" class="bmd-label-floating">Email address</label>
                      <input type="email" class="form-control" id="exampleInputEmails"/>
                      <span class="bmd-help">We'll never share your email with anyone else.</span>
                    </div>
                    <div class="form-group">
                      <label htmlFor="phone" class="bmd-label-floating">Phone</label>
                      <input type="text" class="form-control" id="phone"/>
                    </div>
                    <div class="form-group label-floating">
                      <label class="form-control-label bmd-label-floating" htmlFor="message">Your message</label>
                      <textarea class="form-control" rows="6" id="message"></textarea>
                    </div>
                    <div class="submit text-center">
                      <input type="submit" class="btn btn-primary btn-raised btn-round" value="Contact Us"/>
                    </div>
                  </form>
                </div>
                <div class="col-md-4 ml-auto">
                  <div class="info info-horizontal">
                    <div class="icon icon-disabled">
                      <i class="fa fa-location-arrow"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Find us at the office</h4>
                      <p>
                        {contactInfo.address_line_1[0].text}
                        <br/> {contactInfo.address_line_2[0].text}
                        <br/> {contactInfo.address_line_3[0].text}
                      </p>
                    </div>
                  </div>
                  <div class="info info-horizontal">
                    <div class="icon icon-disabled">
                      <i class="fa fa-volume-control-phone"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Give us a ring</h4>
                      <a href="tel:+61420234234">
                        <p>+61 420 234 234</p>
                      </a>
                    </div>
                  </div>
                  <div class="info info-horizontal">
                    <div class="icon icon-disabled icon-smaller-margin">
                      <i class="fa fa-coffee"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Set up a meeting</h4>
                      <a href="https://calendly.com/prabin" target="_blank" rel="noopener noreferrer">
                        <p>Click to set up</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer ">
          <div class="container">
            <nav class="pull-left">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">
                    Creative Tim
                  </a>
                </li>
                <li>
                  <a href="http://presentation.creative-tim.com">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="https://www.creative-tim.com/license">
                    Licenses
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    } else {
      return <div class="sections-page  section-white">
        <div id="spinner-middle">
          <div>
            <i class="fa fa-refresh fa-spin fa-5x fa-fw"></i>
          </div>
        </div>
      </div>

    }
  }
}
