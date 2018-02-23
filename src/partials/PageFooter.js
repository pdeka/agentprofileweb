import React from 'react';
import Prismic from 'prismic-javascript';
import classNames from 'classnames';

import "../styles/css/PageFooter.css";

export default class PageFooter extends React.Component {

  state = {
    contactinformation: null
  }

  componentWillMount() {
    this.fetchPage(this.props);
  }

  componentWillReceiveProps(props) {
    this.fetchPage(props);
  }

  fetchPage(props) {
    if (props.prismicCtx) {
      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'contactinformation')).then((contactinformation) => {
        if (contactinformation) {
          this.setState({contactinformation});
        }
      });
    }
    return null;
  }

  render() {
    if(!this.state.contactinformation){
      return <div/>
    }

    let contactinformation = this.state.contactinformation.results[0].data;

    return <footer className={classNames('footer','footer-white')}>
          <div className={classNames('container')}>
              <ul className={classNames('social-buttons')}>
                  <li>
                      <a href={contactinformation.facebook_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-facebook')}  target="_blank">
                          <i className={classNames('fa', 'fa-facebook-square')}  style={{'fontSize': '24px'}}></i>
                      </a>
                  </li>
                  <li>
                      <a href={contactinformation.linkedin_link.url}  className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-linkedin')}  target="_blank">
                          <i className={classNames('fa', 'fa-linkedin')}  style={{'fontSize': '24px'}}></i>
                      </a>
                  </li>
                  <li>
                      <a href={contactinformation.instagram_link.url}  className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-instagram')}  target="_blank">
                          <i className={classNames('fa', 'fa-instagram')}  style={{'fontSize': '24px'}}></i>
                      </a>
                  </li>
                  <li>
                      <a href={contactinformation.youtube_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-youtube')}  target="_blank">
                          <i className={classNames('fa', 'fa-youtube-play')}  style={{'fontSize': '24px'}}></i>
                      </a>
                  </li>
                  <li>
                      <a href={contactinformation.rate_my_agent_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-youtube')}  target="_blank">
                          <i className={classNames('fa', 'icon-ratemyagent')}  style={{'fontSize': '18px', 'color': '#37474f'}}></i>
                      </a>
                  </li>
              </ul>
              <div className={classNames('copyright', 'pull-center')}>
                &copy; 2018, made with &nbsp;
                <i className={classNames('material-icons')}>favorite</i>
                &nbsp; by &nbsp;
                <a href="https://www.kenekt.com.au" target="_blank" rel="noopener noreferrer">Kenekt</a>
              </div>
          </div>
      </footer>;

  }
}
