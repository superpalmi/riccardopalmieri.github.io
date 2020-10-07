import React, { Component } from 'react';
import Avatar from "@material-ui/core/Avatar";

import Col from "react-bootstrap/cjs/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

class Header extends Component {
  render() {
    return <div>
      <header id="header" className="alt">


        <div className="inner">
          <Container>
            <Row>
              <Col>
                <Image style={
                  {
                    width:131,
                    height:140,
                    borderRadius:400/2
                  }
                }
                       src={require('../Header/images/photo_2020-10-07_14-28-22.jpg')} rounded className="Image"/>

              </Col>
            </Row>
          </Container>

          <h1>Riccardo Palmieri</h1>
          <p>Junior Java Developer, Computer Science Student</p>
          <p>Milan, Italy</p>
        </div>

      </header>
    </div>;
  }
}

export default Header;
