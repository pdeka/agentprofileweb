import React from 'react';
import Prismic from 'prismic-javascript';
import MainNavigation from './MainNavigation';
import classNames from 'classnames';
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
      // let teampageResults = this.state.teampage.results;

      return <div class="sections-page">
        <MainNavigation thisProp={data} navBarTransparent={true}/>
        <div class="page-header header-filter header-small" data-parallax="true" style={{backgroundImage: 'url(https://prismic-io.s3.amazonaws.com/rumamundi%2F299afe9b-2b94-4fe8-a7c1-99dbeabee565_ruma-in-group.jpg)'}}>
          <div class="container">
              <div class="row">
                  <div class="col-md-8">
                      <h2 class="title pb-0 mb-0" >The Team</h2>
                  </div>
              </div>
              <div class="row">
                <div class="col-md-7">
                  <div class="card card-profile card-plain mt-1">
                      <div class="row">
                          <div class="col-md-7  pl-0 ml-0">
                              <div class="card-footer pb-0 pt-0" style={{'paddingLeft': '14px'}}>
                                  <a href="tel:+61411030202" class="btn btn-inverse btn-round" style={{'fontSize': '16px', 'fontWeight': '900', 'color': 'white', 'textTransform': 'none'}}>
                                    <i class="fa fa-phone fa-inverse" />
                                    &nbsp;0411 030 202
                                    <div class="ripple-container"></div>
                                  </a>
                              </div>
                              <div class="card-footer pb-0 pt-0">
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-facebook" target="_blank">
                                      <i class="fa fa-facebook fa-inverse"></i>
                                  </a>
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-instagram" target="_blank">
                                      <i class="fa fa-instagram fa-inverse"></i>
                                  </a>
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-youtube" target="_blank">
                                      <i class="fa fa-youtube fa-inverse"></i>
                                  </a>
                                  <a href="#pablo" class="btn btn-just-icon btn-link btn-linkedin" target="_blank">
                                      <i class="fa fa-linkedin fa-inverse"></i>
                                  </a>
                                  <a href={data.rate_my_agent_link.url} class="btn btn-just-icon btn-link" target="_blank">
                                    <div style={{'marginBottom': '-1px'}}>
                                      <i class="fa icon-ratemyagent fa-inverse" style={{'fontSize': '17px'}}></i>
                                    </div>
                                  </a>
                                  <a class="btn btn-just-icon btn-link" href="mailto:name@email.com" target="_blank" rel="noopener noreferrer">
                                    <i class="fa fa-envelope fa-inverse"/>
                                  </a>
                              </div>
                          </div>
                      </div>
                  </div>
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
                                    <h2 class="card-title">Brad Norrie</h2>
                                    <h4 class="card-category text-muted">Sales Executive</h4>
                                    <p class="card-description">
                                    As a fully licensed real estate agent and local resident with over 15 years’ experience in the real estate industry, Brad is committed to exceeding expectations. An invaluable asset to Brad’s success is his years of knowledge and practice, his attention to detail and his drive and determination to achieve nothing less than the best for all of his clients. Brad believes that above all else the vendors and buyers deserve his undivided attention, which is exactly what they receive.
                                    </p>

                                    <p class="card-description">

                                    Brad thrives on the dynamic nature of the business overall and has a positive attitude which is received by his clients. His communication and relationship building abilities are matched by outstanding local area knowledge and exceptional attention to detail.
                                    </p>

                                    <p class="card-description">

                                    Brad has an outstanding ability to understand each client’s goals and priorities. He has brought enthusiasm, organizational skills and a natural ability to communicate, into the world of real estate.
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
                                        <img class="img" src="./images/bradnorrie.jpeg" alt="please fill"/>
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
                                        <img class="img" src="./images/baileyabela.jpeg" alt="please fill"/>
                                    </a>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="card-body">
                                    <h2 class="card-title">Bailey Abela</h2>
                                    <h4 class="card-category text-muted">PA to Ruma Mundi</h4>
                                    <p class="card-description">
                                    Having started his real estate career at the beginning of 2017, Bailey joins the team here at First National Hills Direct looking to take his development in the industry to the next level. Being a proud Hills resident for his entire life Bailey has a strong grasp on the growth of the area as well as the residents who call it home. Bailey likes to pride himself on being a young, highly motivated and professional individual with strong ethics, an eagerness to succeed and maturity beyond his years. Always with a bright and contagious smile on his face, Bailey loves connecting with anyone he comes by.
                                    </p>

                                    <p class="card-description">

                                    Bailey understands the importance of knowledge and keeping up to date with the dynamic marketplace, which sees him undertaking constant professional and personal training. Working closely next to Ruma and Brad, Bailey thoroughly enjoys any challenge that is set out for him to achieve. Without any hesitation, Bailey is always glad to help with his 'can-do' attitude which is so rarely seen of someone of his age.
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
                                    <h2 class="card-title">Ian Williamson</h2>
                                    <h4 class="card-category text-muted">Sales Executive</h4>
                                    <p class="card-description">
                                    To achieve a positive and impressive sale result Ian focuses on correctly pricing a property based on thorough research and recent sales. He believes that marketing the property in a strategic manner and employing a smart sale method that best suits your property will appeal to a wider range of potential buyers.
                                    </p>

                                    <p class="card-description">
                                    Ian places an importance on training, ongoing professional development and mentoring, he is always adapting to the changing real estate world. Ian ongoing knowledge and training have only helped him acquire the correct approach to all client’s needs. Ian ensures that he has the best foundation possible to service his clients. Ian has the knowledge and experience that buyers and sellers need in a market that requires an agent who knows the market and has the most effective tools at his fingertips.
                                    </p>

                                    <p class="card-description">

                                    Ian sets fourth groundwork for excellence which allows him to provide a level of service rarely seen in the real estate world, that is why he loves his work. Ian takes pride in his achievements and finds enjoyment in working with all of his clients to provide a selling or purchasing experience unsurpassed by any other agent.
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
                                        <img class="img" src="./images/ianwilliamson.jpeg" alt="please fill"/>
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
