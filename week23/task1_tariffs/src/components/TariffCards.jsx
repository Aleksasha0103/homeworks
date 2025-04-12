import React from "react";
import CardItem from "./CardItem";
import tariifsData from "../data/tariffsData";
import "../styles/styles.scss";

const TariffCards = () => {
  const desireOrder = [300, 450, 500, 1000];
  const sortedTariffsData = desireOrder.map((id) => tariifsData.find((tariff) => tariff.id === id));
  return (
    <section className="tariffCards">
      {sortedTariffsData.map((tariff) => (
        <CardItem
          key={tariff.id}
          cardItemColor={tariff.cardItemColor}
          titleContainerColor={tariff.titleContainerColor}
          priceContainerColor={tariff.priceContainerColor}
          tariffTitle={tariff.tariffTitle}
          tariffPrice={tariff.tariffPrice}
          tariffSpeed={tariff.tariffSpeed}
        />
      ))}
    </section>
  );
};

export default TariffCards;
