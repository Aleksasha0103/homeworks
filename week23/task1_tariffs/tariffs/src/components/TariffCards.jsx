import React from "react";
import CardItem from "./CardItem";
import "../styles/styles.scss";

function TariffCards() {
  return (
    <section className="tariffCards">
      <CardItem
        titleContainerColor="blue"
        priceContainerColor="blue"
        tariffTitle="Безлимитный 300"
        tariffPrice="300"
        tariffSpeed="10"
      />
      <CardItem
        titleContainerColor="green"
        priceContainerColor="green"
        tariffTitle="Безлимитный 450"
        tariffPrice="450"
        tariffSpeed="50"
      />
      <CardItem
        CardItemColor="red"
        titleContainerColor="red"
        priceContainerColor="red"
        tariffTitle="Безлимитный 500"
        tariffPrice="550"
        tariffSpeed="100"
      />
      <CardItem
        titleContainerColor="black"
        priceContainerColor="black"
        tariffTitle="Безлимитный 1000"
        tariffPrice="1000"
        tariffSpeed="200"
      />
    </section>
  );
}

export default TariffCards;
