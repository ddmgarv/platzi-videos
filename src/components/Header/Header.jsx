import React from "react";
import { userIcon, platziVideoIcon } from "../../constants/img.constants";
import { Link } from "react-router-dom";
import "./header.scss";
const Header = ({ loggedIn }) => (
  <header className="header">
    <img src={platziVideoIcon} alt="" className="header__img" />
    <div className={loggedIn ? "header__menu" : "d-none"}>
      <div className="header__menu--profile">
        <img src={userIcon} alt="" className="header__menu--img" />
        <p className="header__menu--text">Perfil</p>
        <ul>
          <li>
            <Link>Cuenta</Link>
          </li>
          <li>
            <Link>Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </div>
  </header>
);

export default Header;
