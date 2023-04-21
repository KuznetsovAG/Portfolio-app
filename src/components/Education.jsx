import React from "react";

const Education = () => {
  return (
    <div className="education">
      <div className="education__container _container">
        <div className="education__description">
          <div className="education__title">Образование</div>
          <div className="education__cards">
            <div className="education__card">
              <div className="education__year">2023</div>
              <div className="education__name name">
                <p className="name__title">
                  Московский энергетический институт
                </p>
                <p className="name__speciality">
                  Бизнес-информатика, бакалавриат
                </p>
              </div>
            </div>
            <div className="education__card">
              <div className="education__year">2019 </div>
              <div className="education__name name">
                <p className="name__title">ГБПОУ ОК Юго-Запад</p>
                <p className="name__speciality">
                  Информационные системы, среднее специальное
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="education__description">
          <div className="education__title">Курсы</div>
          <div className="education__cards">
            <div className="education__card">
              <div className="education__year">2022</div>
              <div className="education__name name">
                <p className="name__title">Junior Frontend Developer</p>
                <p className="name__speciality">Владилен Минин</p>
              </div>
            </div>
            <div className="education__card">
              <div className="education__year">2021</div>
              <div className="education__name name">
                <p className="name__title">Frontend Developer</p>
                <p className="name__speciality">Hexlet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;

<div className="education__description">
  <h2 className="education__title">Образование</h2>
  <div className="education__cards">
    <div className="education__card">
      <div className="education__year">2023</div>
      <div className="education__name name">
        <p className="name__title">
          Московский энергетический институт (Национальный исследовательский
          университет)
        </p>
        <p className="name__speciality">Бизнес-информатика, бакалавриат</p>
      </div>
    </div>
    <div className="education__card">
      <div className="education__year">2019 </div>
      <div className="education__name name">
        <p className="name__title">
          Государственное бюджетное профессиональное образовательное учреждение
          Образовательный комплекс Юго-Запад
        </p>
        <p className="name__speciality">
          Информационные системы, среднее специальное
        </p>
      </div>
    </div>
  </div>
</div>;
