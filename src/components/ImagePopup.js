function ImagePopup({ onClose, card }) {
  return (
    <div className={`popup popup_content_image ${card && "popup_opened"}`}>
      <div className="popup__container-image">
        <img className="popup__image" src={card ? card.link : "#"} alt={card ? card.name : ""} />
        <h3 className="popup__heading-image">{card ? card.name : ""}</h3>
        <button type="button" aria-label="Закрыть" className="popup__button-close" onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ImagePopup;
