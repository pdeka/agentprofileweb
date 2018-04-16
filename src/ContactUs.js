import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import PageFooter from "./partials/PageFooter";
import classNames from 'classnames';
import Loading from "./partials/Loading";
import RegularButton from './components/CustomButtons/RegularButton';
import ContactForm from './partials/ContactForm';
import {RichText} from 'prismic-reactjs';
import ImageURL from "./lib/ImageURL";

import './styles/css/ContactUs.css';

export default class ContactUs extends React.Component {

  state = {
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

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  fetchPage(props) {
    if (props.prismicCtx) {

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
    if (this.state.contactuspageDoc && this.state.contactInfo) {

      let contactuspage = this.state.contactuspageDoc.results[0].data;
      let contactInfo = this.state.contactInfo.results[0].data;

      return (<div className={classNames('contact-us')}>
        <MainNavigation navBarTransparent={true}/>
        <div className={classNames('page-header', 'header-filter-3', 'header-medium')} data-parallax="true" style={{backgroundImage: "url(" + new ImageURL(contactuspage.header_background_image).getURL() +")"}}>
          <div className={classNames('container')}>
              <div className={classNames('row')}>
                <div className={classNames('col-md-12')}>
                  <h1 className={classNames('title', 'text-center', 'page-header-text', 'desktop-display')}>{contactuspage.header[0].text}</h1>
                  <div className={classNames('title', 'text-center', 'page-header-text', 'mobile-display')}>
                    <h1 className={classNames('title', 'text-center', 'mobile-display')}>We</h1>
                    <h2 className={classNames('title', 'text-center', 'mobile-display')}>Look Forward to</h2>
                    <h1 className={classNames('title', 'text-center', 'mobile-display')}>Meeting You</h1>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className={classNames('main', 'main-raised')}>
        <div className={classNames('cd-section')} id="contactus">
          <div className={classNames('contactus-1')} >
                  <div className={classNames('container')}>
                      <div className={classNames('row')}>
                          <div className={classNames('col-md-1')}>
                          </div>
                          <div className={classNames('col-md-5')}>
                              <h2 className={classNames('title')}>{contactuspage.second_level_header[0].text}</h2>
                              <div className={classNames('description')}>{RichText.render(contactuspage.second_level_content)}</div>
                              <div className={classNames('info', 'info-horizontal')}>
                                  <div className={classNames('icon', 'icon-primary', 'text-black')}>
                                      <i className={classNames('material-icons', 'text-black')}>phone</i>
                                  </div>
                                  <div className={classNames('description', 'text-black')}>
                                      <h4 className={classNames('info-title', 'text-black')}>{contactuspage.phone_header[0].text}</h4>
                                      <a href={"tel:" + contactInfo.phone[0].text}>
                                        <RegularButton
                                            color="primary"
                                            aria-label="phone1">
                                            {contactInfo.phone_display_text[0].text}
                                        </RegularButton>
                                      </a>
                                      <br/>
                                      <a href={"tel:" + contactInfo.second_phone[0].text} >
                                        <RegularButton
                                            color="primary"
                                            aria-label="phone2">
                                            {contactInfo.second_phone_display_text[0].text}&nbsp;
                                        </RegularButton>
                                      </a>
                                      <br/>
                                      <a href={"tel:" + contactInfo.third_phone[0].text} >
                                        <RegularButton
                                            color="primary"
                                            aria-label="phone3">
                                            {contactInfo.third_phone_display_text[0].text}&nbsp;&nbsp;&nbsp;&nbsp;
                                        </RegularButton>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className={classNames('col-md-5', 'ml-auto', 'mobile-gap-contact-us-section')}>
                              <div className={classNames('card', 'card-contact')}>
                                <ContactForm toEmail={contactInfo.admin_email[0].text}/>
                              </div>
                          </div>
                          <div className={classNames('col-md-1')}>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <PageFooter prismicCtx={this.props.prismicCtx}/>
      </div>);
    } else {
      return  (<Loading/>);
    }
  }
}
