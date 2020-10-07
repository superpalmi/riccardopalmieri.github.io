import React, { Component } from 'react';

class Header extends Component {
  render() {
    return <div>
      <header id="header" className="alt">
        <div className="inner">
          <h1>Riccardo Palmieri</h1>
          <p>Junior Java Developer</p>
          <p>Milan, Italy</p>
        </div>
      </header>
    </div>;
  }
}

export default Header;
