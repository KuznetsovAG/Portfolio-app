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
              <li className="project__items">
                <a
                  href="https://fast-company-final.vercel.app/users"
                  target="_blank"
                  rel="noreferrer"
                >
                  Приложение на React JS
                </a>
              </li>
              <li className="project__items">
                <a
                  href="https://product-catalog-green.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Каталог товаров
                </a>
              </li>
              <li className="project__items">
                <a
                  href="https://book-library-eight.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Книжная библиотека
                </a>
              </li>
              <li className="project__items">
                <a
                  href="https://wb-first-project.vercel.app/#"
                  target="_blank"
                  rel="noreferrer"
                >
                  Wildberries basket
                </a>
              </li>
              <li className="project__items">
                <a
                  href="https://todolist-react-js-gules.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Todo-list React JS
                </a>
              </li>
              <li className="project__items">
                <a
                  href="https://kuznetsovag.github.io/Site-layout-Finance-and-Consultancy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Сайт финансовой компании
                </a>
              </li>
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
              className="summary__arrow"
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
              href="https://t.me/KuznetsovvAG"
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
