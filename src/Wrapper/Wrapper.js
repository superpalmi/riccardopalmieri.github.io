import React, { Component } from 'react';
import Intro from "../Intro/Intro";
import Item from "../Item/Item";
import Special from "../Special/Special";
import ReactMailForm from "react-mail-form";


class Wrapper extends Component {
  render() {
    return <div id="wrapper">

        <Intro> </Intro>

        <h2>Le mie esperienze </h2>
      <section className="main items">

        <Item headerTitle="titolo header 1" headerImg="" headerImgHref="#" itemText="testo dell'item 1" buttonHref="#" buttonText="Clicca qui" > </Item>
        <Item headerTitle="titolo header 2" headerImg="" headerImgHref="#" itemText="testo dell'item 2212222222" buttonHref="#" buttonText="Clicca qui" > </Item>


      </section>


      <section id="cta" className="main special">
        <Special specialHeader="titolo special" specialText="testo special" buttonText="Mostra di più" buttonHref="#"> </Special>
      </section>

        <section className="main">
            <h3>Contattami via mail</h3>
            <p>oppure scrivi a palmieri.riccardo95@gmail.com</p>
            <ReactMailForm to={"palmieri.riccardo95@gmail.com"}> </ReactMailForm>
        </section>




    </div>;
  }
}

export default Wrapper;
