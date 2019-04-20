import React from 'react'

export default function About() {
  return (
  <section className="about-section">
    <article>
      <div className="name-pic-container">
        <img src={require('../images/nimsum.jpg')} alt="Nim's Portrait"/> 
        <h3>
          Nimrod Garcia,
        </h3>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam expedita sed quisquam animi assumenda tempore, iure qui in ad omnis enim tenetur dolore! Molestias dolorum commodi fuga omnis culpa.</p>
      <p>Skills</p>
    </article>
  </section>
  )
}
