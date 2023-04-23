import React from "react";
import { github, telegram } from "../images";

const Header = () => {
  const handleAboutScroll = () => {
    const aboutPage = document.getElementById("section-1");
    if (aboutPage) {
      aboutPage.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleProjectScroll = () => {
    const projectPage = document.getElementById("section-2");
    if (projectPage) {
      projectPage.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMainScroll = () => {
    const projectPage = document.getElementById("section-5");
    if (projectPage) {
      projectPage.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="header">
      <div className="header__container _container">
        <nav class="header__menu menu">
          <ul class="menu__list">
            <li class="menu__item" onClick={handleMainScroll}>
              Главная
            </li>
            <li class="menu__item" onClick={handleAboutScroll}>
              Обо мне
            </li>
            <li class="menu__item" onClick={handleProjectScroll}>
              Проекты
            </li>
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
          <a href="https://t.me/KuznetsovvAG" target="_blank" rel="noreferrer">
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
