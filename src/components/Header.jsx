import React from "react";
import { github, telegram } from "../images";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <nav class="header__menu menu">
          <ul class="menu__list">
            <li class="menu__item">Главная</li>
            <li class="menu__item">Обо мне</li>
            <li class="menu__item">Образование</li>
          </ul>
        </nav>
        <div className="header__icons">
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
    </header>
  );
};

export default Header;
