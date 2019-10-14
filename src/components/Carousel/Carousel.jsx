import React, { Fragment } from "react";
import { playIcon, pauseIcon } from "../../constants/img.constants";

import "./carousel.scss";
const Carousel = ({ title }) => (
  <Fragment>
    <h2 className="categories__title">{title}</h2>
    <section className="carousel">
      <div className="carousel__container">
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="carousel-item__img"
          />
          <div className="carousel-item__details">
            <div>
              <img src={playIcon} alt="" className="" />
              <img src={pauseIcon} alt="" className="" />
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">
              2019 16+ 114 minutos
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
            className="carousel-item__img"
          />
          <div className="carousel-item__details">
            <div>
              <img src={playIcon} alt="" className="" />
              <img src={pauseIcon} alt="" className="" />
            </div>
            <p className="carousel-item__details--title">Título descriptivo</p>
            <p className="carousel-item__details--subtitle">
              2019 16+ 114 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  </Fragment>
);
export default Carousel;
