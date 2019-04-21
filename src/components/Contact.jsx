import React, { Component } from 'react'

export class Contact extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      enabled: false,
      senderName: '',
      senderEmail: '',
      senderMessage: '',
      validEmail: false
    }
  }

  email() { 
    const coded = "BRP.v9IqR9@W9bzz.qzP";
    const key = "ynV6b3xdv1Ica2SFEzKLWBjTJpH75Otq9MfwZkQAimXsU4huCYgGr0eDN8loRP";
    const shift = coded.length;
    let link = "";
    let ltr;
    for (let i = 0; i < coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) === -1) {
        ltr = coded.charAt(i)
        link += (ltr)
      }
      else {     
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        link += (key.charAt(ltr))
      }
    }
    this.setState( {email: `mailto:${link}`});
  }

  inputHandler = e => {
    switch (true) {
      case e.target.id === 'sender-email':
        this.setState({senderEmail: e.target.value}, () => {
          this.validateInput(true);
        })
        break;
      case e.target.id === 'sender-name':
        this.setState({senderName: e.target.value}, () => {
          this.validateInput();
        })
        break;
      default:
        this.setState({senderMessage: e.target.value}, () => {
          this.validateInput();
        })
    }
  }

  validateInput = (email) => {
    const emailRegx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/;
    if(email) {
      let validEmail = emailRegx.test(this.state.senderEmail);
      if(validEmail) this.setState({validEmail: true});
    }
    if(this.state.senderName.length > 1 
      && this.state.senderMessage.length > 1 
      && this.state.validEmail) {
        this.email();
        this.setState({enabled: true})
    }
  }
  
  render() {
    return (
      <section
        className="contact-section">
        <div className="contact-intro">
          <h3>Send me a message!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, facere!</p>
        </div>
        <form  action={this.state.email}>
          <div className="input-container">
            <label htmlFor="sender-name">Your name:</label>
            <input 
              onChange={this.inputHandler}
              name="sender-name" 
              id="sender-name" 
              type="text">
            </input>
            <label htmlFor="sender-email">Your e-mail:</label>
            <input 
              onChange={this.inputHandler}
              name="sender-email" 
              id="sender-email" 
              type="text">
            </input>
            <label htmlFor="message">Your message:</label>
            <textarea 
              onChange={this.inputHandler}
              name="body" 
              id="message" 
              type="text">
            </textarea>
            <input 
              className="submit-btn"
              type="submit"
              disabled={!this.state.enabled}>
            </input>
          </div>
        </form>
      </section>
    )
  }
}

export default Contact
