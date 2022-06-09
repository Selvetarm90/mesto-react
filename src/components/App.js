import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import { useState } from "react";

function App() {
  const [isEditAvatarPopupOpen, setOpenPopupAvatar] = useState(false);
  const [isAddPlacePopupOpen, setOpenPopupAddPlace] = useState(false);
  const [isEditProfilePopupOpen, setOpenPopupProfile] = useState(false);

  const closeAllPopups = () => {
    setOpenPopupAvatar(false);
    setOpenPopupAddPlace(false);
    setOpenPopupProfile(false);
  };
  return (
    <div className="page">
      <Header />

      <Main
        onEditAvatar={() => setOpenPopupAvatar(true)}
        onEditProfile={() => setOpenPopupProfile(true)}
        onAddPlace={() => setOpenPopupAddPlace(true)}
      />

      <Footer />

      <PopupWithForm
        name="reduct"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          id="firstname"
          className="form-group__item form-group__item_el_name"
          name="name"
          minLength="2"
          maxLength="40"
          required
        />
        <span id="firstname-error" className="error"></span>

        <input
          type="text"
          id="job"
          className="form-group__item form-group__item_el_job"
          name="about"
          minLength="2"
          maxLength="200"
          required
        />
        <span id="job-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="change-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="url"
          className="form-group__item form-group__item_el_image-link"
          id="avatar-link"
          name="avatar"
          placeholder="Ссылка на аватар"
          required
        />
        <span id="avatar-link-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm
        name="add-item"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input
          type="text"
          className="form-group__item form-group__item_el_image-title"
          id="image-title"
          name="title"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          required
        />
        <span id="image-title-error" className="error"></span>

        <input
          type="url"
          className="form-group__item form-group__item_el_image-link"
          id="image-link"
          name="link"
          placeholder="Ссылка на картинку"
          required
        />
        <span id="image-link-error" className="error"></span>
      </PopupWithForm>

      <PopupWithForm name="confirm-del" title="Вы уверены?" buttonText="Да" />

      <ImagePopup />
    </div>
  );
}

export default App;
