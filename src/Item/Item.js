import React, { Component } from 'react';

class Item extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const headerTitle=this.props.headerTitle
    const headerImgHref=this.props.headerImgHref;
    const headerImg=this.props.headerImg
    const itemText=this.props.itemText;
    const buttonHref=this.props.buttonHref;
    const buttonText=this.props.buttonText;
    return  <article className="item">
      <header>
        <a href={headerImgHref}><img src={headerImg} alt=""/></a>
        <h3>{headerTitle}</h3>
      </header>
      <p>{itemText}</p>
      <ul className="actions">
        <li><a href={buttonHref} className="button">{buttonText}</a></li>
      </ul>
    </article>;
  }
}

export default Item;
