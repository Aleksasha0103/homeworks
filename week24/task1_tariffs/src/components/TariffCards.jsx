import React, { useState } from "react";
import CardItem from "./CardItem";
import tariffsData from "../data/tariffsData";
import "../styles/styles.scss";

function TariffCards() {
  const desireOrder = [300, 450, 500, 1000];
  const sortedTariffsData = desireOrder.map((id) => tariffsData.find((tariff) => tariff.id === id));
  const [highlightedCardId, setHighlightedCardId] = useState(null);
  const handleHighlighted = (id) => {
    setHighlightedCardId(id);
  };

  return (
    <section className="tariffCards">
      {sortedTariffsData.map((tariff) => (
        <CardItem
          key={tariff.id}
          highlighted={highlightedCardId === tariff.id}
          titleContainerColor={tariff.titleContainerColor}
          priceContainerColor={tariff.priceContainerColor}
          tariffTitle={tariff.tariffTitle}
          tariffPrice={tariff.tariffPrice}
          tariffSpeed={tariff.tariffSpeed}
          onClick={() => handleHighlighted(tariff.id)}
        />
      ))}
    </section>
  );
}

export default TariffCards;
