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


    _handleSubmit(event)  {
        event.preventDefault();

        if (this.isEmailValid() && this.isARobotChecked() && this.isMessageValid()) {
            $('#emailId').removeClass('has-danger').addClass('has-success');
            $('#robotCheckContent').removeClass('has-danger').addClass('has-success')
            $('#emailContent').removeClass('has-danger').addClass('has-success');
            $('#success').addClass('form-control-feedback');
            console.log("sending message!");
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
                  <div id="emailContent" className={classNames('form-group', 'label-floating', 'is-empty', 'bmd-form-group')}>
                      <label htmlFor="exampleMessage1" className={classNames('bmd-label-placeholder')} id="message-label" >Your Message</label>
                      <textarea id="emailtext" name="emailtext" className={classNames('form-control')} rows="6" value={this.state.text} onChange={this.updateContent.bind(this)}
                              onFocus={this.inputFocus("#message-label")}>
                      </textarea>
                      <span className={classNames('material-input')}></span>
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
                  <button type="submit" className={classNames('btn', 'btn-primary', 'pull-right')} onClick={this._handleSubmit.bind(this)}>Send Message</button>
              </div>
          </form>
        );
    }
}
