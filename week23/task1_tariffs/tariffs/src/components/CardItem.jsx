import "../styles/styles.scss";

function CardItem(props) {
  return (
    <section className={`CardItem ${props.CardItemColor}`}>
      <div className={`titleContainer ${props.titleContainerColor}`}>
        <h2 className="tariffTitle">{props.tariffTitle}</h2>
      </div>

      <div className={`priceContainer ${props.priceContainerColor}`}>
        <p className="tariffPrice">
          <sup className="upperPrice">руб.</sup> {props.tariffPrice} <sub className="underPrice">/мес.</sub>
        </p>
      </div>

      <div className="speedContainer">
        <p className="tariffSpeed">до {props.tariffSpeed} Мбит/сек</p>
      </div>

      <div className="footerInfoContainer">
        <p className="tariffFooterInfo">Объем включенного трафика не&nbsp;ограничен</p>
      </div>
    </section>
  );
}

export default CardItem;
