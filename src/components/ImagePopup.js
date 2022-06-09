function ImagePopup() {
  return (
    <div className="popup popup_content_image">
      <div className="popup__container-image">
        <img className="popup__image" src="#" alt="" />
        <h3 className="popup__heading-image"></h3>
        <button type="button" aria-label="Закрыть" className="popup__button-close"></button>
      </div>
    </div>
  );
}

export default ImagePopup;
