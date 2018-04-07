import React from 'react';
import Prismic from 'prismic-javascript';
import MapContainer from './partials/MapContainer';
import MainNavigation from './partials/MainNavigation';
import PageFooter from "./partials/PageFooter";
import classNames from 'classnames';
import Loading from "./partials/Loading";
import RegularButton from './components/CustomButtons/RegularButton';
import ContactForm from './partials/ContactForm';
import {RichText} from 'prismic-reactjs';

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

      console.log(JSON.stringify(contactuspage));
      console.log(JSON.stringify(contactInfo));

      return (<div className={classNames('contact-us')}>
        <MainNavigation navBarTransparent={true}/>
        <div className={classNames('page-header', 'header-filter', 'header-medium')} data-parallax="true" style={{backgroundImage: "url(" +contactuspage.header_background_image.url+")"}}>
          <div className={classNames('container')}>
              <div className={classNames('row')}>
                <div className={classNames('col-md-12')}>
                  <h2 className={classNames('title', 'text-center')}>{contactuspage.header[0].text}</h2>
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
                              <p className={classNames('description')}>{RichText.render(contactuspage.second_level_content)}</p>
                              <div className={classNames('info', 'info-horizontal')}>
                                  <div className={classNames('icon', 'icon-primary', 'text-black')}>
                                      <i className={classNames('material-icons', 'text-black')}>phone</i>
                                  </div>
                                  <div className={classNames('description', 'text-black')}>
                                      <h4 className={classNames('info-title', 'text-black')}>{contactuspage.phone_header[0].text}</h4>
                                      <a href={"tel:" + contactInfo.phone[0].text}>
                                        <RegularButton
                                            color="primary"
                                            aria-label="Meet Ruma">
                                            {contactInfo.phone_display_text[0].text}
                                        </RegularButton>
                                      </a>
                                      <br/>
                                      <a href={"tel:" + contactInfo.second_phone[0].text} >
                                        <RegularButton
                                            color="primary"
                                            aria-label="Meet Ruma">
                                            {contactInfo.second_phone_display_text[0].text}
                                        </RegularButton>
                                      </a>
                                      <br/>
                                      <a href={"tel:" + contactInfo.third_phone[0].text} >
                                        <RegularButton
                                            color="primary"
                                            aria-label="Meet Ruma">
                                            {contactInfo.third_phone_display_text[0].text}&nbsp;
                                        </RegularButton>
                                      </a>
                                  </div>
                              </div>
                          </div>
                          <div className={classNames('col-md-5', 'ml-auto')}>
                              <div className={classNames('card', 'card-contact')}>
                                <ContactForm />
                              </div>
                          </div>
                          <div className={classNames('col-md-1')}>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
        <PageFooter />
      </div>);
    } else {
      return  (<Loading/>);
    }
  }
}
