import React from 'react';
import {RichText} from 'prismic-reactjs';
import Prismic from 'prismic-javascript';
import MainNavigation from './partials/MainNavigation';
import classNames from 'classnames';
import PageFooter from "./partials/PageFooter";
import Terminal from 'terminal-in-react';
import sleep from 'sleep-promise';

import './styles/css/Home.css';

export default class Home extends React.Component {

  state = {
    doc: null,
    contactInfo: null,
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

  componentDidMount () {
    window.scrollTo(0, 0);
  }

  fetchPage(props) {
    if (props.prismicCtx) {

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'homepage')).then((doc) => {
        if (doc) {
          this.setState({ doc });
        } else {
          this.setState({ notFound: !doc });
        }
      });

      props.prismicCtx.api.query(Prismic.Predicates.at('document.type', 'contactinformation')).then(
        (contactInfo) => {
          if (contactInfo) {
            this.setState({ contactInfo });
          }
        }
      );

      return null;

    }
    return null;
  }

  render() {
    if (this.state.doc && this.state.contactInfo) {


      let data = this.state.doc.results[0].data;
      let textDelay=2000;

      return <div className={classNames('sections-page', 'section-white')}>
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <header className='main' id="home">
          <div className={classNames('page-header', 'header-medium-large', 'header-filter', 'home-background')} data-parallax="true">
              <div className={classNames('container')} style={{'paddingTop': '100px'}}>
                  <div className={classNames('row')}>
                      <div className={classNames('col-md-6')}>
                        <Terminal
                            color='#3C4858'
                            backgroundColor='transparent'
                            barColor='#3C4858'
                            prompt='#3C4858'
                            style={{ fontWeight: "bold", fontSize: "1.2em" }}
                            showActions={true}
                            hideTopBar={false}
                            watchConsoleLogging={false}
                            allowTabs={false}
                            promptSymbol= 'kenekt via ⬢ v9.3.0 >'
                            commandPassThrough={cmd => `${cmd}: Computer says no...`}
                            commands={{
                              "start": (args, print, runCommand) => {
                                sleep(1000)
                                    .then(() => print('Hello! I am Kenekt'))
                                    .then(sleep(textDelay))
                                    .then(() => print('I make hard things simple'))
                                    .then(sleep(textDelay))
                                    .then(() => print('I know a great user experience, leads to success'))
                                    .then(sleep(textDelay))
                                    .then(() => print('I provide advice'))
                                    .then(sleep(textDelay))
                                    .then(() => print('...and help implement them too'))
                                    .then(sleep(textDelay))
                                    .then(() => runCommand(`clear`))
                                    .then(sleep(textDelay))
                                    .then(() => print('I have 40 years of experience in digital'))
                                    .then(sleep(textDelay))
                                    .then(() => print('I know real estate'))
                                    .then(sleep(textDelay))
                                    .then(() => print('...and retail, gaming, healthcare, insurance too'))
                                    .then(sleep(textDelay))
                                    .then(() => runCommand(`clear`))
                                    .then(sleep(textDelay))
                                    .then(() => print("Type 'help' to explore more"))
                              },
                              "profile": (args, print, runCommand) => {
                                if(args[1] === 'prabin') {
                                  window.open('https://www.prabindeka.com.au/', '_blank');
                                } else if(args[1] === 'nick') {
                                  window.open('https://www.linkedin.com/in/nickmundi/', '_blank');
                                } else {
                                  print(args[1] + ': Computer says no...');
                                }
                              },
                              "services": () => {window.scrollTo(0, 500)},
                              "phone": (args, print, runCommand) => print('Nick:0420984257   Prabin:0420984257'),
                              "email": (args, print, runCommand) => print('info@kenekt.com.au')
                            }}
                            descriptions={{
                              color: false,
                              show: false,
                              clear: "'clear' clears the screen",
                              help: "'help' shows more commands",
                              start: "'start' to start again",
                              profile: "'profile <nick or prabin>' to see profiles",
                              services: "'services' to see services",
                              phone: "'phone' to see phone numbers",
                              email: "'email' to see emails"
                            }}
                            msg="Type 'start' to explore Kenekt"
                          />
                      </div>
                      <div className={classNames('col-md-6')}>
                        <div className={classNames('row')}>
                          <div className={classNames('col-md-2')}>
                          </div>
                          <div className={classNames('col-md-8', 'text-center')}>
                            <div className={classNames('card', 'card-profile', 'card-plain mt-0')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                <a href="#pablo">
                                  <img className="img" src="./images/ruma.png" alt="fill me"/>
                                </a>
                                <div className="colored-shadow" style={{'backgroundImage': 'url(./images/orange-background.png)', 'opacity': '50'}}>
                                </div>
                              </div>
                              <div className="card-body ">
                                  <h4 className="card-title" style={{'fontSize': '12px'}}>Designing an online brand for a REB top 50 agent</h4>
                              </div>
                            </div>
                          </div>
                          <div className={classNames('col-md-2')}>
                          </div>
                        </div>
                        <div className={classNames('row')}>
                          <div className={classNames('col-md-2')}>
                          </div>
                          <div className={classNames('col-md-8', 'text-center')}>
                            <div className={classNames('card', 'card-profile', 'card-plain mt-0')}>
                              <div className={classNames('card-header', 'card-header-image')}>
                                <a href="#pablo">
                                  <img className={classNames('img')} src="./images/slide.png" alt="fill me"/>
                                </a>
                                <div className="colored-shadow" style={{'backgroundImage': 'url(./images/orange-background.png)', 'opacity': '50'}}>
                                </div>
                              </div>
                              <div className="card-body ">
                                  <h4 className="card-title" style={{'fontSize': '12px'}}>Roadmap for a large groceries retailer</h4>
                              </div>
                            </div>
                          </div>
                          <div className={classNames('col-md-2')}>
                          </div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        </header>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 4}}>
            <section className={classNames('cd-section', 'home-background')} id="about">
              <div className={classNames('container')}>
                <div className={classNames('features-1', 'home-about-section', 'pt-5', 'pb-0')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-12', 'ml-auto', 'mr-auto')}>
                      <h1 className={classNames('caption-text')}>{data.about_us_caption[0].text}</h1>
                    </div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                        <h1 className={classNames('title', 'mt-5')}>{data.about_us_header[0].text}</h1>
                        {RichText.render(data.about_us_text)}
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={classNames('cd-section', 'home-background')} id="services">
              <div className={classNames('container')} >
                <div className={classNames('features-1', 'pt-5', 'pb-4')}>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-8', 'ml-auto', 'mr-auto')}>
                            <h1 className={classNames('title')}>{data.services_header[0].text}</h1>
                            {RichText.render(data.services_description)}
                        </div>
                    </div>
                    <div className={classNames('row')}>
                        <div className={classNames('col-md-1')}>
                        </div>
                        <div className={classNames('col-md-5')}>
                            <div className={classNames('card', 'card-raised')}>
                                <div className={classNames('card-title', 'mt-5')}>
                                    <i style={{'fontSize': 73, 'color': 'darkgray'}} className={classNames('material-icons')}>explore</i>
                                </div>
                                <div className={classNames('row')}>
                                  <div className={classNames('col-md-1')}>
                                  </div>
                                  <div className={classNames('col-md-10')}>
                                    <h2 className={classNames('card-title', 'text-center', 'caption-text', 'mb-5')}>{data.service_header_1[0].text}</h2>
                                  </div>
                                  <div className={classNames('col-md-1')}>
                                  </div>
                                </div>
                                <div className={classNames('mb-5', 'service-description')}>
                                  {RichText.render(data.service_description_1)}
                                </div>
                            </div>
                        </div>
                        <div className={classNames('col-md-5')}>
                            <div className={classNames('card', 'card-raised')}>
                                <div className={classNames('card-title', 'mt-5')}>
                                    <i style={{'fontSize': 73, 'color': 'darkgray'}} className={classNames('material-icons')}>devices</i>
                                </div>
                                <div className={classNames('row')}>
                                  <div className={classNames('col-md-1')}>
                                  </div>
                                  <div className={classNames('col-md-10')}>
                                    <h2 className={classNames('card-title', 'text-center', 'caption-text', 'mb-5')}>{data.service_header_2[0].text}</h2>
                                  </div>
                                  <div className={classNames('col-md-1')}>
                                  </div>
                                </div>
                                <div className={classNames('mb-5', 'service-description')}>
                                  {RichText.render(data.service_description_2)}
                                </div>
                            </div>
                        </div>
                        <div className={classNames('col-md-1')}>
                        </div>
                    </div>
                </div>
              </div>
            </section>
            <section className={classNames('cd-section', 'home-background')} id="contact">
              <div className={classNames('container')} >
                <div className={classNames('features-1', 'home-about-section', 'pt-2', 'pb-5')}>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-12', 'ml-auto', 'mr-auto', 'mb-3')}>
                        <h1 className={classNames('title')}>Contact Us</h1>
                    </div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-2')}></div>
                    <div className={classNames('col-md-3')}>
                      <div className={classNames('card', 'card-collapse', 'mt-1')}>
                                <div className={classNames('card-title', 'mb-0', 'pb-0')}>
                                  <p className={classNames('mb-0', 'pb-2', 'text-center')}>Nick</p>
                                </div>
                                <div className={classNames('card-body', 'mt-0', 'pt-0')}>
                                    <a href="tel:+61411030202" className={classNames('btn', 'btn-inverse', 'btn-round', 'text-white')} style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                      <i className={classNames('fa', 'fa-phone', 'fa-inverse')} />
                                      &nbsp;0411 030 202
                                      <div className={classNames('ripple-container')}></div>
                                    </a>
                                </div>
                                <div className={classNames('card-footer', 'mt-o', 'pt-0')}>
                                </div>
                            </div>
                    </div>
                    <div className={classNames('col-md-2')}></div>
                    <div className={classNames('col-md-3')}>
                      <div className={classNames('card', 'card-collapse', 'mt-1')}>
                                <div className={classNames('card-title', 'mb-0', 'pb-0')}>
                                  <p className={classNames('mb-0', 'pb-2', 'text-center')}>Prabin</p>
                                </div>
                                <div className={classNames('card-body', 'mt-o', 'pt-0')}>
                                      <a href="tel:+610420984257" className={classNames('btn', 'btn-inverse', 'btn-round', 'text-white', 'text-center')} style={{'fontSize': '16px', 'fontWeight': '900', 'textTransform': 'none'}}>
                                        <i className={classNames('fa', 'fa-phone', 'fa-inverse')} />
                                        &nbsp;0420 984 257
                                        <div className={classNames('ripple-container')}></div>
                                      </a>
                                </div>
                            </div>
                    </div>
                    <div className={classNames('col-md-2')}></div>
                  </div>
                  <div className={classNames('row')}>
                    <div className={classNames('col-md-12', 'ml-auto', 'mr-auto', 'mb-0', 'mt-4')}>
                      <a href="mailto:info@kenekt.com.au" target="_blank" rel="noopener noreferrer">
                        <button className={classNames('btn', 'btn-just-icon', 'btn-round', 'btn-default')}>
                            <i className={classNames('fa', 'fa-envelope')}></i>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
        <div className={classNames('main', 'main-raised-for-home')} style={{'zIndex': 3}}>
          <PageFooter />
        </div>
      </div>;
    }else{
      return   <div className={classNames('sections-page',  'section-white')}>
        <div id="spinner-middle">
          <div>
              <i className={classNames('fa', 'fa-refresh', 'fa-spin', 'fa-5x', 'fa-fw')}></i>
          </div>
        </div>
      </div>;

    }
  }
}
