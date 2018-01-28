import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './MainNavigation';
import classNames from 'classnames';
import ArticlePreview from './ArticlePreview';
import FooterLinkedToContactUs from "./FooterLinkedToContactUs";
import PageFooter from "./PageFooter";

import './styles/css/Team.css';

export default class Team extends React.Component {

  state = {
    doc: null,
    teampage: null,
    notFound: false
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

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'homepage')).then((doc) => {
        if (doc) {
          this.setState({doc});
        } else {
          this.setState({
            notFound: !doc
          });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'teampage')).then((teampage) => {
        if (teampage) {
          this.setState({teampage});
        }
      });

      return null;

    }
    return null;
  }

  render() {
    if (this.state.doc && this.state.teampage) {

      let data = this.state.doc.results[0].data;
      let teampageResults = this.state.teampage.results;

      return <div class="sections-page">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
              </div>
            </div>
          </div>
        </div>
        <div class="main main-raised">
          <div class="container">
              <div class="features-1 no-padding-bottom">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto">
                          <h2 class="title">Meet Ruma</h2>
                          <h5 class="description">
                            Behind Ruma’s personable manner and respectful approach is a sharp and strategic thinker with exemplary sales skills. With nearly 20 years’ experience in the real estate industry, Ruma has honed many highly effective negotiating strategies that time and again have produced exceptional sale prices for her clients. Displaying absolute integrity and professionalism, Ruma’s dedication to each individual campaign is reflected in the consistency of her results.
                          </h5>
                          <div class="icon">
                            <i class="material-icons">format_quote</i>
                          </div>
                          <blockquote class="blockquote text-center">
                            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                            <footer class="blockquote-footer">Ruma Mundi</footer>
                          </blockquote>
                      </div>
                  </div>
              </div>
          </div>
          <div class="team-2" id="team-2">
              <div class="container">
                  <div class="row">
                      <div class="col-md-8 ml-auto mr-auto text-center">
                          <h2 class="title">Awards and Recognitions</h2>
                          <h5 class="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                          </h5>
                      </div>
                  </div>
              </div>
          </div>
          <FooterLinkedToContactUs data={teampageResults[0].data.footer_content[0].text}/>
        </div>
        <PageFooter />
      </div>;

    } else {
      return <div className={classNames('sections-page', 'section-white')}>
        <div id="spinner-middle">
          <div>
            <i className={classNames('fa', 'fa-refresh', 'fa-spin', 'fa-5x', 'fa-fw')}></i>
          </div>
        </div>
      </div>;

    }
  }
}
