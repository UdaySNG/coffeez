import "./Card.css";

const Card = (props) => {
  let cardImage = <img src={"/img/" + props.image} alt="" />
  if (props.image === undefined){
       cardImage = <img src={"/img/coffeebeans.jpg"} alt="" />;
  }

  return (
    <article class="card">
      <figure class="card__figure">
        {cardImage}
      </figure>
      <section class="card__section">
        <p>{props.text || "Lorem ipsum dolor sit amet consectetur, adipisicing elit Error debitis, quod quo aspernatur alias nostrum? Dolore aut necessitatibus vitae."}</p>
      </section>
    </article>
  );
};

export default Card;
