import React from 'react'
import logo from '../assets/AlexShakhorinPhoto.jpeg'
import '../css/Info.css'

function Info() {

  return (
    <header className="info">
      <img src={logo} alt="" className="about--img" />
      <h1 className="about--full-name">Alex Shakhorin</h1>
      <h3 className="about--job-title">Frontend Developer</h3>
      <a href="https://github.com/shakhorinAlex" className="about--website_link" target="_blank">github.com/shakhorinAlex</a>
      <ul className="about--cta-buttons">
        <li className="cta-buttons_item"> <a className='cta-button' href="mailto:aleksander.szachorin@gmail.com">Email</a> </li>
        <li className="cta-buttons_item"> <a className='cta-button' href="https://www.linkedin.com/in/shakhorin/" target="_blank">LinkedIn</a> </li>
      </ul>
    </header>
  )
}

export default Info
