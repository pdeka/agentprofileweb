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
            <div class="container" >
              <div class="features-3">
                <div class="row">
                  <div class="col-md-12 ml-auto mr-auto">
                    <div class="card card-profile card-plain">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h2 class="card-title">Alex Cross</h2>
                                    <h4 class="card-category text-muted">Founder & Principle Agent</h4>
                                    <p class="card-description">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div class="card-footer justify-content-center">
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-twitter"></i></a>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-facebook-square"></i></a>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-google"></i></a>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="card-header card-header-image">
                                    <a href="#pablo">
                                        <img class="img" src="./vendor/creativetim/img/faces/card-profile1-square.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 ml-auto mr-auto">
                    <div class="card card-profile card-plain">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="card-header card-header-image">
                                    <a href="#pablo">
                                        <img class="img" src="./vendor/creativetim/img/faces/card-profile1-square.jpg" />
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h2 class="card-title">Alex Cross</h2>
                                    <h4 class="card-category text-muted">Founder & Principle Agent</h4>
                                    <p class="card-description">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div class="card-footer justify-content-center">
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-twitter"></i></a>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-facebook-square"></i></a>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-google"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 ml-auto mr-auto">
                    <div class="card card-profile card-plain">
                        <div class="row">
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h2 class="card-title">Alex Cross</h2>
                                    <h4 class="card-category text-muted">Founder & Principle Agent</h4>
                                    <p class="card-description">
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </p>
                                </div>
                                <div class="card-footer justify-content-center">
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-twitter"></i></a>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-facebook-square"></i></a>
                                    <a href="#pablo" class="btn btn-just-icon btn-link btn-default"><i class="fa fa-google"></i></a>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="card-header card-header-image">
                                    <a href="#pablo">
                                        <img class="img" src="./vendor/creativetim/img/faces/card-profile1-square.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <FooterLinkedToContactUs data={data.footer_content[0].text}/>
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
