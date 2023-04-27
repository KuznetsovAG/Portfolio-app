import React from "react";
import { arrow, alex } from "../images";
const About = () => {
  return (
    <div className="about__page" id="section-1">
      <div className="about__container _container">
        <img src={alex} alt="alex" className="about__photo" />
        <div className="about__summary">
          <div className="about__info">
            <div className="about__cv">
              <p className="summary__title">Резюме</p>
              <a
                href="https://drive.google.com/file/d/1X7ObumwsRlemRVQv00Wmivv8f-ntRjjU/view?usp=share_link"
                target="_blank"
                rel="noreferrer"
                className="summary__arrow"
              >
                <img src={arrow} alt="arrow" />
              </a>
            </div>
            <span className="about__age">24 года</span>
            <h2 className="about__title">Кузнецов Алексей Геннадьевич</h2>
            <p className="about__text">
              Я - Frontend разработчик с опытом работы в создании уникальных и
              эффективных веб-приложений. Моя цель - стать частью дружной и
              профессиональной команды, где я мог бы продолжать развиваться и
              улучшать свои навыки разработки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
