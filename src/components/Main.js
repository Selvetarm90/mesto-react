function Main(props) {
  return (
    <main>
      <section className="profile">
        <div className="profile__avatar" onClick={props.onEditAvatar}></div>

        <div className="info">
          <h1 className="info__name">Жак-Ив </h1>
          <button type="button" aria-label="Редактировать" className="info__button-reduct" onClick={props.onEditProfile}></button>
          <p className="info__about">Исследователь океана</p>
        </div>
        <button type="button" aria-label="Добавить" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>

      <section className="cards"></section>
    </main>
  );
}

export default Main
