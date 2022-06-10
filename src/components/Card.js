function Card({ card, onCardClick }) {
  const handleClick = () => onCardClick(card);
  return (
    <article className="item">
      <img className="item__picture" src={card.link} alt={card.name} onClick={handleClick} />
      <h2 className="item__title">{card.name}</h2>
      <button type="button" aria-label="Оценить" className="item__like">
        <p className="item__like-count">{card.likes.length}</p>
      </button>
      <button type="button" aria-label="Удалить" className="item__delete"></button>
    </article>
  );
}

export default Card;
