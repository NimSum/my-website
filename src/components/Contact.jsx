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
      validEmail: false,
      currDate: new Date()
    }
  }

  email() { 
    const coded = "BF22.onOWFn@o2nFj.W82";
    const key = "lLCvh2fqQW9po5b10HUOBjdi6DNyRXtkY8ZwEM4TaJPVFSm7sIcA3guKxGezrn"; 
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
    this.state.validEmail 
      ? this.setState( {email: link} )
      : this.setState( {email: ' ', enabled: false} );
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
      let isValid = emailRegx.test(this.state.senderEmail);
      this.setState({validEmail: isValid}, () => {
        this.email();
      })
    }
    if(this.state.senderName.length > 1 
      && this.state.senderMessage.length > 1 
      && this.state.validEmail) {
        this.setState({enabled: true})
    }
  }
  
  render() {
    return (
      <section className="contact-section" id="contact">
        <article>
          <div className="contact-intro">
            <h3>Let's get in touch!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, facere!</p>
          </div>
          <div className="icon-container">
            <a href="https://github.com/NimSum" target="_blank" rel="noopener noreferrer" title="Github">
                <img src={require('../images/github.svg')} alt="github" />
              </a>
              <a href="https://www.linkedin.com/in/nimrod-garcia/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <img src={require('../images/linked-in.svg')} alt="linked in" />
              </a>
              <a href="https://www.linkedin.com/in/nimrod-garcia/" target="_blank" rel="noopener noreferrer">
                <img src={require('../images/mail.svg')} alt="mail" title="Direct email"/>
              </a>
          </div>
        </article>
        <form action={`https://formspree.io/${this.state.email}`} method="POST">
          <div className="input-container">
            <label htmlFor="sender-name">* Your name:</label>
            <input 
              onChange={this.inputHandler}
              name="name" 
              id="sender-name" 
              type="text">
            </input>
            <label htmlFor="sender-email">* Your e-mail:</label>
            <input 
              onChange={this.inputHandler}
              name="email" 
              id="sender-email" 
              type="text">
            </input>
            <label htmlFor="message">* Your message:</label>
            <textarea 
              onChange={this.inputHandler}
              name="message" 
              id="message" 
              type="text">
            </textarea>
            <input 
              className="submit-btn"
              type="submit"
              value="Send"
              disabled={!this.state.enabled}>
            </input>
          </div>
        </form>
        <footer>
          <p className="copy-right">Copyright &copy; {this.state.currDate.getFullYear()} Nimsum</p>
          <section className="site-info">
            <div>
              <p>This page was built with:</p>
              <img src={require('../images/react.svg')} alt="react" title="React"/>
              <img src={require('../images/sass.svg')} alt="sass" title="SASS"/>
              <img src={require('../images/aws.png')} alt="sass" title="AWS"/>
            </div>
            <a href="https://github.com/NimSum/my-website" title="Source" target="_blank" rel="noopener noreferrer"><p>Source</p>
              <img src={require('../images/git-logo.png')} alt="sass" />
            </a>
          </section>
        </footer>
      </section>
    )
  }
}

export default Contact
