import React from "react";
import { arrow, alex } from "../images";
const About = () => {
  return (
    <div className="about__page">
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
              >
                <img src={arrow} alt="arrow" />
              </a>
            </div>
            <span className="about__age">24 года</span>
            <h2 className="about__title">Кузнецов Алексей Геннадьевич</h2>
            <p className="about__text">
              Я начинающий Frontend разработчик, стремлюсь стать частью дружной
              и профессиональной команды, в которой я мог бы развивать свои
              навыки разработки. Окончил ОК Юго-Запад по специальности
              "Информационные системы" и на данный момент продолжаю обучение НИУ
              МЭИ по направлению "Бизнес-информатика" очно-заочно. Дополнительно
              прохожу курсы по направлению Frontend Developer на которых изучаю
              React JS, Redux и TypeScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
