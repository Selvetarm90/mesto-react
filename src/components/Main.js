import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getAllData()
      .then(([initialCards, userInfo]) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main>
      <section className="profile">
        <div
          className="profile__avatar"
          onClick={props.onEditAvatar}
          style={{ backgroundImage: `url(${userAvatar})` }}
        ></div>

        <div className="info">
          <h1 className="info__name">{userName}</h1>
          <button
            type="button"
            aria-label="Редактировать"
            className="info__button-reduct"
            onClick={props.onEditProfile}
          ></button>
          <p className="info__about">{userDescription}</p>
        </div>
        <button type="button" aria-label="Добавить" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards">
        {cards.map((item) => (
          <Card card={item} key={item._id} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;
