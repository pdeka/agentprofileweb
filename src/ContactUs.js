import React from 'react';
import NotFound from './NotFound';
import PrismicReact from 'prismic-reactjs';
import PrismicConfig from './prismic-configuration';
import Prismic from 'prismic-javascript';
import MapContainer from './MapContainer';
import ArticlePreview from './ArticlePreview';
import Truncate from 'react-truncate';
import FormatDate from './FormatDate';

export default class ContactUs extends React.Component {

  state = {
    homepageDoc: null,
    contactuspageDoc: null,
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
      props.prismicCtx.api.getByUID('homepage', PrismicConfig.homepage_uid, {}, (err, homepageDoc) => {
        if (homepageDoc) {
          this.setState({ homepageDoc });
        } else {
          this.setState({ notFound: !homepageDoc });
        }
      });
      props.prismicCtx.api.getByUID('contactuspage', PrismicConfig.contactuspage_uid, {}, (err, contactuspageDoc) => {
        if (contactuspageDoc) {
          this.setState({ contactuspageDoc });
        } else {
          this.setState({ notFound: !contactuspageDoc });
        }
      });
      return null;
    }
    return null;
  }

  render() {
    if (this.state.homepageDoc && this.state.contactuspageDoc) {
      let homepage = this.state.homepageDoc.data;
      let contactuspage = this.state.contactuspageDoc.data;
      console.log("Here is the document: " + JSON.stringify(contactuspage));
      return <div class="contact-us ">
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
                        <form role="form" id="contact-form" method="post">
                            <div class="form-group">
                                <label for="name" class="bmd-label-floating">Your name</label>
                                <input type="text" class="form-control" id="name"/>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmails" class="bmd-label-floating">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmails"/>
                                <span class="bmd-help">We'll never share your email with anyone else.</span>
                            </div>
                            <div class="form-group">
                                <label for="phone" class="bmd-label-floating">Phone</label>
                                <input type="text" class="form-control" id="phone"/>
                            </div>
                            <div class="form-group label-floating">
                                <label class="form-control-label bmd-label-floating" for="message">Your message</label>
                                <textarea class="form-control" rows="6" id="message"></textarea>
                            </div>
                            <div class="submit text-center">
                                <input type="submit" class="btn btn-primary btn-raised btn-round" value="Contact Us"/>
                            </div>
                        </form>
                    </div>
                    <div class="col-md-4 ml-auto">
                        <div class="info info-horizontal">
                            <div class="icon icon-primary">
                                <i class="material-icons">pin_drop</i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Find us at the office</h4>
                                <p> {homepage.address_line_1[0].text}
                                    <br/> {homepage.address_line_2[0].text}
                                    <br/> {homepage.address_line_3[0].text}
                                </p>
                            </div>
                        </div>
                        <div class="info info-horizontal">
                            <div class="icon icon-primary">
                                <i class="material-icons">phone</i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Give us a ring</h4>
                                <p> {homepage.phone[0].text}
                                    <br/> {homepage.office_opening_hours[0].text}
                                </p>
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
