import React from 'react';
import $ from "jquery";
import axios from 'axios';
import classNames from 'classnames';

export default class ContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            send: false,
            email: '',
            phone: '',
            purpose: '',
            text: '',
            to: 'prabin@kenekt.com.au',
            subject: 'Mail Form From Website'
        };
    }

    updateEmail (evt) {
        this.setState({
            email: evt.target.value
        });
    }

    updatePhone (evt) {
        this.setState({
            phone: evt.target.value
        });
    }

    updatePurpose (evt) {
        this.setState({
            purpose: evt.target.value
        });
    }

    updateContent (evt) {
        this.setState({
            text: evt.target.value
        });
    }

    isARobotChecked() {

        if ($('#robotCheck')[0].checked === true) {
          return true;
        } else {
          $('#robotCheckContent').addClass('has-danger')
          return false;
        }
    }

    isPurposeSelected() {
        if ($('input[name=purpose]:checked').val()) {
          return true;
        } else {
          $('#purposeContent').addClass('has-danger')
          return false;
        }
    }

    isMessageValid() {

      if(this.state.text && this.state.text.trim() !== ""){
        return true;
      } else {
        $('#emailContent').addClass('has-danger');
        return false;
      }
    }

    isEmailValid() {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(this.state.email)) {
          return true;
        } else {
          $('#emailId').addClass('has-danger');
          return false;
        }
    }

    isPhoneValid() {
        if (this.state.phone && this.state.phone.match(/\d/g) && this.state.phone.match(/\d/g).length === 10) {
          return true;
        } else {
          $('#phoneContent').addClass('has-danger');
          return false;
        }
    }


    _handleSubmit(event)  {
        event.preventDefault();

        if (this.isEmailValid() && this.isPhoneValid()  && this.isMessageValid() && this.isPurposeSelected() && this.isARobotChecked() ) {
            $('#emailId').removeClass('has-danger').addClass('has-success');
            $('#robotCheckContent').removeClass('has-danger').addClass('has-success')
            $('#emailContent').removeClass('has-danger').addClass('has-success');
            $('#phoneContent').removeClass('has-danger').addClass('has-success');
            $('#purposeContent').removeClass('has-danger').addClass('has-success');
            $('#success').addClass('form-control-feedback');
            $('#submitButton').attr('disabled', 'true');
            console.log("sending message!: " + JSON.stringify(this.state));
            this.sendMail(this.state);
        }
      }

    sendMail(mailData){
      axios({
        method: 'post',
        url: `https://kroxy.herokuapp.com/mail`,
        data: mailData
      }).then(
        response => {
          console.log(response)
        },
        reject => {
          console.log(reject)
        }
      );
    }

    inputFocus(selector) {
      $(selector).removeClass('bmd-label-placeholder');
      $(selector).addClass('bmd-label-static');
    }

    render() {
        return (
          <form id="contact-form" method="post">
              <div className={classNames('card-header', 'card-header-raised', 'card-header-primary', 'text-center')}>
                  <h4 className={classNames('card-title')}>Contact Us</h4>
              </div>
              <div className={classNames('card-body')}>
                  <div id="emailId" className={classNames('form-group', 'label-floating', 'is-empty', 'bmd-form-group')}>
                      <label htmlFor="email" className={classNames('bmd-label-placeholder')} id="email-label" >Your Email</label>
                      <input id="email" type="email" value={this.state.email} onChange={this.updateEmail.bind(this)} className={classNames('form-control')}
                        onFocus={this.inputFocus("#email-label")} />
                      <span className={classNames('material-input')}></span>
                  </div>
                  <div id="phoneContent" className={classNames('form-group', 'label-floating', 'is-empty', 'bmd-form-group')}>
                      <label htmlFor="phone" className={classNames('bmd-label-placeholder')} id="phone-label" >Your Phone (10 Digits)</label>
                      <input id="phone" type="phone" value={this.state.phone} onChange={this.updatePhone.bind(this)} className={classNames('form-control')}
                        onFocus={this.inputFocus("#phone-label")} />
                      <span className={classNames('material-input')}></span>
                  </div>
                  <div id="emailContent" className={classNames('form-group', 'label-floating', 'is-empty', 'bmd-form-group')}>
                      <label htmlFor="exampleMessage1" className={classNames('bmd-label-placeholder')} id="message-label" >Your Message</label>
                      <textarea id="emailtext" name="emailtext" className={classNames('form-control')} rows="6" value={this.state.text} onChange={this.updateContent.bind(this)}
                              onFocus={this.inputFocus("#message-label")}>
                      </textarea>
                      <span className={classNames('material-input')}></span>
                  </div>
                  <div id="purposeContent" className={classNames('form-group', 'label-floating', 'is-empty', 'bmd-form-group')}>
                      <label htmlFor="purposeContent" className={classNames('bmd-label-static')} id="radio-label" >What is this About?</label>
                      <div class="form-check">
                          <div class="row">
                            <div class="col-md-4">
                              <label class="form-check-label">
                                  <input class="form-check-input" type="radio" name="purpose" id="radio1" value="Buying" onChange={this.updatePurpose.bind(this)} />Buying
                                  <span class="circle">
                                      <span class="check"></span>
                                  </span>
                              </label>
                            </div>
                            <div class="col-md-4">
                              <label class="form-check-label">
                                  <input class="form-check-input" type="radio" name="purpose" id="radio2" value="Selling" onChange={this.updatePurpose.bind(this)} />Selling
                                  <span class="circle">
                                      <span class="check"></span>
                                  </span>
                              </label>
                            </div>
                            <div class="col-md-4">
                              <label class="form-check-label">
                                  <input class="form-check-input" type="radio" name="purpose" id="radio3" value="Renting" onChange={this.updatePurpose.bind(this)} />Renting
                                  <span class="circle">
                                      <span class="check"></span>
                                  </span>
                              </label>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={classNames('card-footer', 'justify-content-between')}>
                  <div className={classNames('form-check')} id="robotCheckContent">
                      <label className={classNames('form-check-label bmd-label-static')}>
                          <input className={classNames('form-check-input form-control')} type="checkbox" value="true" id="robotCheck"/> I'm not a robot
                          <span className={classNames('form-check-sign')}>
                              <span className={classNames('check')}></span>
                          </span>
                      </label>
                  </div>
                  <button type="submit" className={classNames('btn', 'btn-primary', 'pull-right')} onClick={this._handleSubmit.bind(this)} id="submitButton">Send Message</button>
              </div>
          </form>
        );
    }
}


// <div class="btn-group bootstrap-select">
//   <button type="button" class="btn dropdown-toggle bs-placeholder select-with-transition" data-toggle="dropdown" role="button" title="Single Select" aria-expanded="false">
//     <span class="filter-option pull-left" style={{textTransform: 'none', fontSize: '14px', color: '#999999'}}>What is this about?</span>&nbsp;<span class="bs-caret"><span class="caret"></span></span>
//   </button>
//   <div class="dropdown-menu open" role="combobox" x-placement="bottom-start" style={{position: 'absolute', top: '41px', left: '0px', willChange: 'top, left'}}>
//     <ul class="dropdown-menu inner" role="listbox" aria-expanded="false">
//       <li data-original-index="1">
//         <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
//           <span class="text">General Enquiry</span>
//           <span class="material-icons  check-mark"> done </span>
//         </a>
//       </li>
//       <li data-original-index="2">
//         <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
//           <span class="text">Selling your home with Ruma</span><span class="material-icons  check-mark"> done </span>
//         </a>
//       </li>
//       <li data-original-index="3">
//         <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
//           <span class="text">Buying property</span><span class="material-icons  check-mark"> done </span>
//         </a>
//       </li>
//       <li data-original-index="4">
//         <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
//           <span class="text">Renting your property</span><span class="material-icons  check-mark"> done </span>
//         </a>
//       </li>
//       <li data-original-index="5">
//         <a tabindex="0" class="" data-tokens="null" role="option" aria-disabled="false" aria-selected="false">
//           <span class="text">Looking for rentals</span><span class="material-icons  check-mark"> done </span>
//         </a>
//       </li>
//     </ul>
//   </div>
//   <select class="selectpicker" data-style="select-with-transition" title="Single Select" data-size="7" tabindex="-98">
//     <option class="bs-title-option" value="">What is this about?</option>
//     <option value="1">General enquiry</option>
//     <option value="2">Selling your home with Ruma</option>
//     <option value="3">Buying property</option>
//     <option value="4">Renting your property</option>
//     <option value="5">Looking for rentals</option>
//   </select>
// </div>
