import React from "react";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__container _container">
        <h2 className="projects__header">Проекты</h2>
        <div className="projects__body">
          <div className="project__card">
            <p className="projects__title">Приложение на React JS</p>
            <p className="projects__description">
              Приложение со списком пользователей, которое содержит 3 страницы.
              Страница регистрации, где пользователь может войти или
              зарегистрироваться. Страцина с пользователями и их описанием, где
              есть возможность фильтовать и скать по поиску нужного
              пользователя. Так же можно перйти на станицу выбранного
              пользователя, где отображается вся информация о нём.
            </p>
            <div className="projects__skills">
              <div className="skills__item">HTML</div>
              <div className="skills__item">CSS</div>
              <div className="skills__item">JS</div>
              <div className="skills__item">React</div>
              <div className="skills__item">Bootstrap</div>
              <div className="skills__item">Routing</div>
            </div>
            <span className="projects__link">
              <a
                href="https://fast-company-final.vercel.app/users"
                target="_blank"
                rel="noreferrer"
              >
                Перейти к проекту
              </a>
            </span>
          </div>
          <div className="project__card">
            <p className="projects__title">Каталог товаров</p>
            <p className="projects__description">
              Каталог товаров с возможностью сортировки товаров по брендам.
              Каждый товар можно добавить в корзину и увеличивать или уменьшать
              его количество. При переходе на страницу корзины отображаются
              добавленные товары и общая сумма покупки. При надатии кнопки
              'Офоррмить заказ' происходит запрос на сервер и всплвает модальное
              окно, после закрытия которого корзина очищается.
            </p>
            <div className="projects__skills">
              <div className="skills__item">HTML</div>
              <div className="skills__item">CSS</div>
              <div className="skills__item">JS</div>
              <div className="skills__item">React</div>
              <div className="skills__item">Redux Toolkit</div>
              <div className="skills__item">TypeScript</div>
            </div>
            <span className="projects__link">
              <a
                href="https://product-catalog-green.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Перейти к проекту
              </a>
            </span>
          </div>
          <div className="project__card">
            <p className="projects__title">Книжная библиотека</p>
            <p className="projects__description">
              Книжная библиотека с использованием Google Books API. Книги можно
              искать в поиске, сортировать по категориям и по новизне. Если
              нажать на книгу, то откроется страница с описанием данной книги.
              Поиск осуществляется с помощью иконки поиска или клавиши 'Enter'.
            </p>
            <div className="projects__skills">
              <div className="skills__item">HTML</div>
              <div className="skills__item">CSS</div>
              <div className="skills__item">JS</div>
              <div className="skills__item">React</div>
              <div className="skills__item">Redux Toolkit</div>
              <div className="skills__item">TypeScript</div>
            </div>
            <span className="projects__link">
              <a
                href="https://book-library-eight.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Перейти к проекту
              </a>
            </span>
          </div>
          <div className="project__card">
            <p className="projects__title">Wildberries basket</p>
            <p className="projects__description">
              Верстка корзины wildberries со всем функционалом. Можно
              увеличивать и уменьшать количтво товаров в зависимости от их
              наличия, редактировать способ оплаты и адрес доставки товара.
              Валидация формы отправки, пока все поля не пройдут валидацию,
              форма не отправиться.
            </p>
            <div className="projects__skills">
              <div className="skills__item">HTML</div>
              <div className="skills__item">CSS</div>
              <div className="skills__item">JS</div>
              <div className="skills__item">DOM JS</div>
              <div className="skills__item">BEM</div>
              <div className="skills__item">Vanilla JS</div>
            </div>
            <span className="projects__link">
              <a
                href="https://wb-first-project.vercel.app/#"
                target="_blank"
                rel="noreferrer"
              >
                Перейти к проекту
              </a>
            </span>
          </div>

          <div className="project__card">
            <p className="projects__title">Todo-list React JS</p>
            <p className="projects__description">
              Todo-list с возможносью созранения задач с помощью LocalStorage.
              Задачи можно добавлять по нажатию кнопки 'Сохранить' или нажатию
              клавиши 'Enter' и удалять по нажатию на крестик
            </p>
            <div className="projects__skills">
              <div className="skills__item">HTML</div>
              <div className="skills__item">CSS</div>
              <div className="skills__item">JS</div>
              <div className="skills__item">React</div>
            </div>
            <span className="projects__link">
              <a
                href="https://todolist-react-js-gules.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Перейти к проекту
              </a>
            </span>
          </div>
          <div className="project__card">
            <p className="projects__title">Сайт финансовой компании</p>
            <p className="projects__description">
              Адаптивный сайт финансовой компаниии с применением технологии БЭМ
            </p>
            <div className="projects__skills">
              <div className="skills__item">HTML</div>
              <div className="skills__item">CSS</div>
              <div className="skills__item">JS</div>
              <div className="skills__item">DOM JS</div>
              <div className="skills__item">BEM</div>
            </div>
            <span className="projects__link">
              <a
                href="https://kuznetsovag.github.io/Site-layout-Finance-and-Consultancy/"
                target="_blank"
                rel="noreferrer"
              >
                Перейти к проекту
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
