import "../styles/styles.scss";

function CardItem(props) {
  const { highlighted, titleContainerColor, tariffTitle, priceContainerColor, tariffPrice, tariffSpeed, onClick } =
    props;
  const ifHighlightedCardItem = highlighted ? `cardItemHighlighted` : `cardItemCommon`;
  const ifHighlightedTitleContainer = highlighted ? `titleContainerHighlighted` : `titleContainer`;

  return (
    <section className={`${ifHighlightedCardItem}`} onClick={onClick}>
      <div className={`titleContainer ${titleContainerColor} ${ifHighlightedTitleContainer}`}>
        <h2 className="tariffTitle">{tariffTitle}</h2>
      </div>

      <div className={`priceContainer ${priceContainerColor}`}>
        <p className="tariffPrice">
          <sup className="upperPrice">руб.</sup> {tariffPrice} <sub className="underPrice">/мес.</sub>
        </p>
      </div>

      <div className="speedContainer">
        <p className="tariffSpeed">до {tariffSpeed} Мбит/сек</p>
      </div>

      <div className="footerInfoContainer">
        <p className="tariffFooterInfo">Объем включенного трафика не&nbsp;ограничен</p>
      </div>
    </section>
  );
}

export default CardItem;
