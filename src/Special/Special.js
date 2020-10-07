import React, { Component } from 'react';

class Special extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const specialHeader=this.props.specialHeader;
    const specialText=this.props.specialText;
    const buttonText=this.props.buttonText;
    const buttonHref=this.props.buttonHref;
    return <div>
      <h2>{specialHeader}</h2>
      <p>{specialText}</p>
      <ul className="actions">
        <li><a href={buttonHref} className="button big">{buttonText}</a></li>
      </ul>
    </div>;
  }
}

export default Special;
