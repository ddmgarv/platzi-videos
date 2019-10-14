import React from "react";
import "./searchBox.scss";

const SearchBox = () => (
  <section className="searchBox">
    <h2 className="searchBox__text">¿Qué quieres ver hoy?</h2>
    <input className="searchBox__input" type="text" placeholder="Buscar..." />
  </section>
);
export default SearchBox;
