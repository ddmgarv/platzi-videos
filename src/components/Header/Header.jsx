import React from "react";
import { userIcon, platziVideoIcon } from "../../constants/img.constants";
import { Link } from "react-router-dom";
import "./header.scss";
function Header() {
  return (
    <header className="header">
      <img src={platziVideoIcon} alt="" className="header__img" />
      <div className="header__menu">
        <div className="header__menu--profile">
          <img src={userIcon} alt="" className="header__img--menu" />
          <p className="header__menu--text">Perfil</p>
        </div>
        <ul>
          <li>
            <Link>Cuenta</Link>
          </li>
          <li>
            <Link>Cerrar Sesión</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
