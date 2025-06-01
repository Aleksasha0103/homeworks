import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import "../../styles/styles.scss";

export default function MainMenu() {
  return (
    <>
      <div>
        <Link to="/">
          <img src={logo} alt="logo" className="logo"></img>
        </Link>
      </div>
      <nav className="main-menu">
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/game">Карточки слов</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
