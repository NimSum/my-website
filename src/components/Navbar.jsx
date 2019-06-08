import React, { useState, useEffect } from 'react'

const Navbar = () => {
  let prevPos = 0;
  const [ animationStyle, setAnimationStyle ] = useState('');
  const [ currPosition, setPosition ] = useState('Home');

  const animationDirection = (totalHeight) => {
    if (prevPos !== totalHeight) {
      setAnimationStyle(prevPos < totalHeight 
        ? 'slide-right' 
        : 'slide-left');
      prevPos = totalHeight;
    };
  }

  const calculatePos = () => {
    window.addEventListener("scroll", () => {
      let totalHeight = Math.ceil((window.pageYOffset/document.body.scrollHeight) * 100);
      animationDirection(totalHeight);
      switch (true) {
        case totalHeight >= 24 && totalHeight <=47:
          if (currPosition !== 'about') {
            setPosition('about')
          };
        break;
        case totalHeight >= 48 && totalHeight <=71:
        if (currPosition !== 'portfolio') {
          setPosition('portfolio')
        };
        break;
        case totalHeight >= 72:
        if (currPosition !== 'contact') {
          setPosition('contact')
        };
        break;
        default:
          if (currPosition !== 'home') {
            setPosition('home')
          };
      }
    })
  }

  useEffect(() => {
    calculatePos();
  }, [])

  return (
    <header> 
      <nav>
        <ul>
          <li className={currPosition === 'home' 
          ? animationStyle : undefined}><a href="#home">HOME</a></li>
          <li className={currPosition === 'about' 
          ? animationStyle : undefined}><a href="#about">ABOUT</a></li>
          <li className={currPosition === 'portfolio' 
          ? animationStyle : undefined}><a href="#portfolio">PORTFOLIO</a></li>
          <li className={currPosition === 'contact' 
          ? animationStyle : undefined}><a href="#contact">CONTACT</a></li>
          <li className="resume-download">
            <a
              href={require('../images/nimrod-garcia-resume.pdf')}
              download>
              Download My Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;