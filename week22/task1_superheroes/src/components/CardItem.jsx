function CardItem(props) {
  return (
    <section className="superheroCard">
      <h2 className="superhero__name">{props.title}</h2>
      <p className="superhero__info">
        <span className="bold">Вселенная: </span>
        {props.universe}
      </p>
      <p className="superhero__info">
        <span className="bold">Альтер эго: </span>
        {props.alterego}
      </p>
      <p className="superhero__info">
        <span className="bold">Род деятельности: </span>
        {props.occupation}
      </p>
      <p className="superhero__info">
        <span className="bold">Друзья: </span>
        {props.friends}
      </p>
      <p className="superhero__info">
        <span className="bold">Суперсила: </span>
        {props.superpowers}
      </p>
      <img className="superhero__img" src={props.imgLink} alt={props.title}></img>
      <p className="superhero__info">
        <span className="bold">Подробное описание: </span>
        {props.dopInfo}
      </p>
    </section>
  );
}

export default CardItem;
