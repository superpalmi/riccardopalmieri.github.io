import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import Link from "@material-ui/core/Link";

class Footer extends Component {
  render() {
    return <footer id="footer">
      <h3> Mi puoi trovare anche qui:  </h3>
      <ul className="icons">
        <li><a href="https://www.linkedin.com/in/riccardopalmieri-95"> <FontAwesomeIcon icon={faLinkedin} /></a> </li>
        <li><a href="https://github.com/superpalmi"> <FontAwesomeIcon  icon={faGithub} /> </a> </li>
      </ul>
      <p className="copyright">&copy; Riccardo Palmieri. Design: <a href="https://templated.co">TEMPLATED</a>. Images: <a
          href="https://unsplash.com">Unsplash</a>.</p>
    </footer>;
  }
}

export default Footer;
