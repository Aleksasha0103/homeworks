import "../../styles/styles.scss";

function CardItem(props) {
  return (
    <div className="cardContainer">
      <div className="card">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default CardItem;
