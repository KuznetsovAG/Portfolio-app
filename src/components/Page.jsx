import React from "react";
import { frontend, developer } from "../images";
const Page = () => {
  return (
    <div className="page" id="section-5">
      <div className="page__container _container">
        <div className="page__developer developer">
          <h2 className="developer__title">
            <span className="developer__profession">Frontend</span>
            <br />
            разработчик
          </h2>
          <div className="developer__body">
            <p className="developer__text">
              Всем привет, вы попали на мой сайт портфолио. Здесь вы можете
              ознакомиться с информацией обо мне и выполненными проектами.
            </p>
            <img src={frontend} alt="frontend" className="frontend__img" />
            <img src={developer} alt="developer" className="developer__img" />
            <p className="developer__description">
              Ищу новые возможности для развития своих навыков и опыта в
              динамичной компании, где я смогу применить свои знания и умения в
              полной мере.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
