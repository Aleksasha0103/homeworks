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
      {sortedTariffsData.map((tariff) => {
        const { id, titleContainerColor, priceContainerColor, tariffTitle, tariffPrice, tariffSpeed } = tariff;
        return (
          <CardItem
            key={id}
            highlighted={highlightedCardId === id}
            titleContainerColor={titleContainerColor}
            priceContainerColor={priceContainerColor}
            tariffTitle={tariffTitle}
            tariffPrice={tariffPrice}
            tariffSpeed={tariffSpeed}
            onClick={() => handleHighlighted(id)}
          />
        );
      })}
    </section>
  );
}

export default TariffCards;
