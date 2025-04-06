import "../../styles/styles.scss";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <section className="headerBlock">
      <a href="/">
        <img src={logo} alt="logo" className="logo"></img>
      </a>
      <div className="headerButtonsContainer">
        <button className="headerButton">Вход</button>
        <button className="headerButton">Регистрация</button>
      </div>
    </section>
  );
}

export default Header;
