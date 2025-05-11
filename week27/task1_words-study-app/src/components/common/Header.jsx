import MainMenu from "../common/MainMenu";
import "../../styles/styles.scss";

function Header() {
  return (
    <section className="headerBlock">
      <MainMenu />
      <section className="titleH1">
        <h1>Учим слова!</h1>
      </section>
      <div className="headerButtonsContainer">
        <button className="headerButton">Вход</button>
        <button className="headerButton">Регистрация</button>
      </div>
    </section>
  );
}

export default Header;
