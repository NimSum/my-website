import React, { useState } from 'react'

const Contact = () => {
    const [ email, setEmail ] = useState('')
    const [ enabled, enableSubmit ] = useState(false)
    const [ senderName, setSenderName ] = useState('')
    const [ senderEmail, setSenderEmail ] = useState('')
    const [ senderMessage, setSenderMessage ] = useState('')
    const [ currDate ] = useState(new Date())

  const decodeEmail = () => { 
    const coded = "BF22.onOWFn@o2nFj.W82";
    const key = "lLCvh2fqQW9po5b10HUOBjdi6DNyRXtkY8ZwEM4TaJPVFSm7sIcA3guKxGezrn"; 
    const shift = coded.length;
    let myEmail = "";
    let ltr;
    for (let i = 0; i < coded.length; i++) {
      if (key.indexOf(coded.charAt(i)) === -1) {
        ltr = coded.charAt(i)
        myEmail += (ltr)
      }
      else {     
        ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
        myEmail += (key.charAt(ltr))
      }
    }
    setEmail(myEmail)
  }

  const validateInput = () => {
    if (senderName.length && senderEmail.length && senderMessage.length) {
      enableSubmit(true);
      decodeEmail();
    } else enableSubmit(false);
  }

  const inputHandler = ({ target }) => {
    switch (true) {
      case target.id === 'sender-email':
        setSenderEmail(target.value);
        break;
      case target.id === 'sender-name':
        setSenderName(target.value);
        break;
      default:
        setSenderMessage(target.value);
    }
    validateInput();
  }

  return (
    <section className="contact-section" id="contact">
      <article>
        <div className="contact-intro">
          <h3>Let's get in touch!</h3>
          <p>I am searching for an entry level Software Engineering position in Dallas. If you are interested, please send me a message! I will get back with you as soon as I can! </p>
        </div>
        <div className="icon-container">
          <a href="https://github.com/NimSum" target="_blank" rel="noopener noreferrer" title="Github">
              <img src={require('../../images/github-blue.svg')} alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/nimrod-garcia/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <img src={require('../../images/linked-in.svg')} alt="linked in" />
            </a>
            <a href={`mailto:${email}`} rel="noopener noreferrer">
              <img onClick={ decodeEmail } src={require('../../images/mail.svg')} alt="mail" title="Direct email"/>
            </a>
            <a href={require('../../images/nimrod-garcia-resume.pdf')}
              className='mobile-resume-download'
              download>
              Download My Resume
            </a>
        </div>
      </article>
      <form action={`https://formspree.io/${email}`} method="POST">
        <div className="input-container">
          <label htmlFor="sender-name">* Your name:</label>
          <input 
            onChange={ inputHandler }
            name="name" 
            id="sender-name" 
            type="text">
          </input>
          <label htmlFor="sender-email">* Your e-mail:</label>
          <input 
            name="email" 
            onChange={ inputHandler }
            id="sender-email" 
            type="email">
          </input>
          <label htmlFor="message">* Your message:</label>
          <textarea 
            onChange={ inputHandler }
            name="message" 
            id="message" 
            type="text">
          </textarea>
          <input 
            className={`submit-btn ${ enabled && 'email-btn' }`}
            type="submit"
            value="Send"
            disabled={!enabled}>
          </input>
        </div>
      </form>
      <footer>
        <p className="copy-right">Copyright &copy; { currDate.getFullYear() } Nimsum</p>
        <section className="site-info">
          <div>
            <p>This page was built and deployed with:</p>
            <img src={require('../../images/react.svg')} alt="react" title="React"/>
            <img src={require('../../images/sass.svg')} alt="sass" title="SASS"/>
            <img src={require('../../images/aws.svg')} alt="sass" title="AWS S3, Cloudfront, Route53"/>
          </div>
          <a href="https://github.com/NimSum/my-website" title="Source" target="_blank" rel="noopener noreferrer"><p>View Source</p>
            <img src={require('../../images/source.svg')} alt="sass" />
          </a>
        </section>
      </footer>
    </section>
  )
}
   
export default Contact
