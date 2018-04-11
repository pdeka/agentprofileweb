import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import PageFooter from "./partials/PageFooter";
import {RichText} from 'prismic-reactjs';
import Loading from "./partials/Loading";
import ImageURL from "./lib/ImageURL";
import Image from "./partials/Image";

import './styles/css/Team.css';

export default class Team extends React.Component {

  state = {
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

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  fetchPage(props) {
    if (props.prismicCtx) {

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
    if (this.state.teampage) {

      let teampage = this.state.teampage.results[0].data;

      return <div className={classNames('sections-page')}>
        <MainNavigation navBarTransparent={true}/>
        <div className={classNames('page-header', 'header-filter', 'header-medium')} data-parallax="true" style={{backgroundImage: "url(" + new ImageURL(teampage.header_background_image).getURL()+")"}}>
          <div className={classNames('container')}>
              <div className={classNames('row')}>
                  <div className={classNames('col-md-12')}>
                      <h1 className={classNames('title', 'text-center', 'desktop-display')}>{teampage.header[0].text}</h1>
                      <div className={classNames('title', 'text-center', 'mobile-display')}>
                        <h1 className={classNames('title', 'text-center', 'mobile-display')}>Hard Work</h1>
                        <h2 className={classNames('title', 'text-center', 'mobile-display')}>Integrity & Honesty is</h2>
                        <h1 className={classNames('title', 'text-center', 'mobile-display')}>Our Strength</h1>
                      </div>
                  </div>
              </div>
          </div>

        </div>
        <div className={classNames('main', 'main-raised')}>
              <div className={classNames('container', 'pt-5', 'pb-0')}>
                  <div className={classNames('features-1', 'mb-0', 'pt-0', 'pb-0', 'teampage-container')}>
                    <div className={classNames('row')}>
                      <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                        <div className={classNames('card', 'card-profile', 'card-plain')}>
                            <div className={classNames('row')}>
                                <div className={classNames('col-md-7')}>
                                    <div className={classNames('card-body')}>
                                        <h3 className={classNames('card-title')}>{teampage.body[0].items[0].full_name[0].text}</h3>
                                        <h4 className={classNames('card-category', 'text-muted')}>{teampage.body[0].items[0].job[0].text}</h4>
                                        <div className={classNames('card-description')}>
                                          {RichText.render(teampage.body[0].items[0].profile_summary)}
                                        </div>
                                    </div>
                                    <div className={classNames('card-footer', 'justify-content-center', 'mb-0', 'pb-0')}>
                                        <a href={teampage.body[0].items[0].twitter.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-default')}><i className={classNames('fa', 'fa-twitter')}></i></a>
                                        <a href={teampage.body[0].items[0].facebook_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-default')}><i className={classNames('fa', 'fa-facebook-square')}></i></a>
                                        <a href={teampage.body[0].items[0].instagram.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-default')}><i className={classNames('fa', 'fa-instagram')}></i></a>
                                    </div>
                                </div>
                                <div className={classNames('col-md-5')}>
                                    <div className={classNames('card-header', 'card-header-image')}>
                                      <Image clazz={'img'} src={teampage.body[0].items[0].photo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className={classNames('row')}>
                      <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                        <div className={classNames('card', 'card-profile', 'card-plain')}>
                            <div className={classNames('row')}>
                                <div className={classNames('col-md-5', 'desktop-display')}>
                                    <div className={classNames('card-header', 'card-header-image')}>
                                      <Image clazz={'img'} src={teampage.body[0].items[1].photo} />
                                    </div>
                                </div>
                                <div className={classNames('col-md-7')}>
                                    <div className={classNames('card-body')}>
                                        <h3 className={classNames('card-title')}>{teampage.body[0].items[1].full_name[0].text}</h3>
                                        <h4 className={classNames('card-category', 'text-muted')}>{teampage.body[0].items[1].job[0].text}</h4>
                                        <div className={classNames('card-description')}>
                                          {RichText.render(teampage.body[0].items[1].profile_summary)}
                                        </div>
                                    </div>
                                    <div className={classNames('card-footer', 'justify-content-center', 'mb-0', 'pb-0')}>
                                      <a href={teampage.body[0].items[1].facebook_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-default')}><i className={classNames('fa', 'fa-facebook-square')}></i></a>
                                      <a href={teampage.body[0].items[1].instagram.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-default')}><i className={classNames('fa', 'fa-instagram')}></i></a>
                                    </div>
                                </div>
                                <div className={classNames('col-md-5', 'mobile-display')}>
                                    <div className={classNames('card-header', 'card-header-image')}>
                                      <Image clazz={'img'} src={teampage.body[0].items[1].photo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <div className={classNames('row')}>
                      <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                        <div className={classNames('card', 'card-profile', 'card-plain')}>
                            <div className={classNames('row')}>
                                <div className={classNames('col-md-7')}>
                                    <div className={classNames('card-body')}>
                                        <h3 className={classNames('card-title')}>{teampage.body[0].items[2].full_name[0].text}</h3>
                                        <h4 className={classNames('card-category', 'text-muted')}>{teampage.body[0].items[2].job[0].text}</h4>
                                        <div className={classNames('card-description')}>
                                          {RichText.render(teampage.body[0].items[2].profile_summary)}
                                        </div>
                                    </div>
                                    <div className={classNames('card-footer', 'justify-content-center', 'mb-0', 'pb-0')}>
                                      <a href={teampage.body[0].items[2].facebook_link.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-default')}><i className={classNames('fa', 'fa-facebook-square')}></i></a>
                                      <a href={teampage.body[0].items[2].instagram.url} className={classNames('btn', 'btn-just-icon', 'btn-link', 'btn-default')}><i className={classNames('fa', 'fa-instagram')}></i></a>
                                    </div>
                                </div>
                                <div className={classNames('col-md-5')}>
                                    <div className={classNames('card-header', 'card-header-image')}>
                                      <Image clazz={'img'} src={teampage.body[0].items[2].photo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                      </div>
                    </div>
                    <br/>
                    <br/>
                  </div>
              </div>
        </div>
        <PageFooter prismicCtx={this.props.prismicCtx}/>
      </div>;

    } else {
      return  <Loading/>
    }
  }
}
