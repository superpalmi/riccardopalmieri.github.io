import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons/faGraduationCap";

class Intro extends Component {
  render() {
    return  <section id="intro" className="main">
      <FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon>
      <h2>I miei studi</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae<br/>
        malesuada turpis. Nam pellentesque in ac aliquam. Aliquam tempor<br/>
        mi porta egestas maximus lorem ipsum dolor.</p>
    </section>;
  }
}

export default Intro;
