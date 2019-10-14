import React from "react";
import { twitterIcon, googleIcon } from "../../constants/img.constants";
import { Link } from "react-router-dom";
import "./login.scss";
const Login = () => (
  <section className="login">
    <h2>Inicia sesión</h2>
    <form action="" className="login__container--form">
      <input type="text" className="input" placeholder="Correo" />
      <input type="password" className="input" placeholder="Contraseña" />
      <button className="button">Iniciar sesión</button>
      <div className="login__container--remember-me">
        <label>
          <input type="checkbox" name="" id="" />
          Recuérdame
        </label>
        <Link to="/">Olvidé mi contraseña</Link>
      </div>
    </form>
    <div className="login__container--social-media">
      <div>
        <img src={googleIcon} alt="Google" />
        Iniciar sesión con Google
      </div>
      <div>
        <img src={twitterIcon} alt="" />
        Iniciar sesión con Twitter
      </div>
    </div>
    <p className="login__container--register">
      No tienes ninguna cuenta, <Link>Regístrate</Link>
    </p>
  </section>
);

export default Login;
