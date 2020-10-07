import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return <footer id="footer">
      <ul className="icons">
        <li><FontAwesomeIcon icon={faLinkedin} /></li>
        <li><FontAwesomeIcon icon={faGithub} /></li>
      </ul>
      <p className="copyright">&copy; Riccardo Palmieri. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a
          href="https://unsplash.com">Unsplash</a>.</p>
    </footer>;
  }
}

export default Footer;
