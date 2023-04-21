import React from "react";
import { github, telegram, arrow } from "../images";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container _container">
        <div className="footer__pages pages">
          <div className="pages__item">
            <ul>
              <li className="pages__link">Главная</li>
              <li className="pages__link">Обо мне</li>
              <li className="pages__link">Образование</li>
              <li className="pages__link">Навыки</li>
            </ul>
          </div>
          <div className="pages__projects">
            <h2 className="pages__projects-title">Проекты</h2>
            <ul>
              <li className="project__items">Приложение на React JS</li>
              <li className="project__items">Каталог товаров</li>
              <li className="project__items">Книжная библиотека</li>
              <li className="project__items">Wildberries basket</li>
              <li className="project__items">Todo-list React JS</li>
              <li className="project__items">Сайт финансовой компании</li>
            </ul>
          </div>
        </div>
        <div className="footer__contacts contacts">
          <div className="contacts__summary">
            <p className="summary__title">Резюме</p>
            <a
              href="https://drive.google.com/file/d/1X7ObumwsRlemRVQv00Wmivv8f-ntRjjU/view?usp=share_link"
              target="_blank"
              rel="noreferrer"
            >
              <img src={arrow} alt="arrow" />
            </a>
          </div>
          <div className="header__icons header__icons-footer">
            <a
              href="https://github.com/KuznetsovAG"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" className="icon__github" />
            </a>
            <a
              href="https://web.telegram.org/k/#@KuznetsovvAG"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegram} alt="github" className="icon__github" />
            </a>
            <div className="header__contacts contacts">
              <p className="contacts__email">KuznetsovAG.WORK@yandex.ru</p>
              <p className="contacts__telephone">8 - 902 - 427 - 80 - 18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
