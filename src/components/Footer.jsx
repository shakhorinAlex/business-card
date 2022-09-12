import React from 'react'
import '../css/Footer.css'
import TwitterLogo from '../assets/twitter.svg'
import FbLogo from '../assets/facebook.svg'
import InstagramLogo from '../assets/instagram.svg'
import GithubLogo from '../assets/github.svg'


function Footer() {

  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social--list__item">
          <a href="https://twitter.com/AleksanderSzac2" className="social-list__link" target="_blank">
            <img src={TwitterLogo} alt="twitter icon" />
          </a>
        </li>
        <li className="social--list__item">
          <a href="https://www.facebook.com/aleksander.szachorin/" className="social-list__link" target="_blank">
            <img src={FbLogo}  alt="facebook icon" />
          </a>
        </li>
        <li className="social--list__item">
          <a href="https://www.instagram.com/szachorin/" className="social-list__link" target="_blank">
            <img src={InstagramLogo} alt="instagram icon" />
          </a>
        </li>
        <li className="social--list__item">
          <a href="https://github.com/shakhorinAlex" className="social-list__link" target="_blank">
            <img src={GithubLogo} alt="github icon" />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
