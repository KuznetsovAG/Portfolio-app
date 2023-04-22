import React from "react";
import { frontend, developer } from "../images";
const Page = () => {
  return (
    <div className="page">
      <div className="page__container _container">
        <div className="page__developer developer">
          <h2 className="developer__title">
            <span className="developer__profession">Frontend</span>
            <br />
            разработчик
          </h2>
          <div className="developer__body">
            <p className="developer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              magna purus semper id est lacus. Aenean morbi at eros curabitur
              volutpat. Maecenas commodo integer massa ac ornare sed dui.{" "}
            </p>
            <img src={frontend} alt="frontend" className="frontend__img" />
            <img src={developer} alt="developer" className="developer__img" />
            <p className="developer__description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              magna purus semper id est lacus. Aenean morbi at eros curabitur
              volutpat. Maecenas commodo integer massa ac ornare sed dui.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
