import React from "react";
import { htmlIcon, css, js, react, redux, ts, git, bs } from "../images";

const Technologies = () => {
  return (
    <div className="technologies">
      <div className="technologies__container _container">
        <div className="technologies__description">
          <div className="technologies__skill skill-title">
            <div className="skill">
              <h2 className="technologies__title">Навыки</h2>
            </div>
          </div>
          <div className="technologies__skill skill">
            <div className="skill">
              <img src={htmlIcon} alt="html" className="skill__img" />
              <p className="skill__name">HTML</p>
            </div>
          </div>
          <div className="technologies__skill skill">
            <div className="skill">
              <img src={css} alt="css" className="skill__img" />
              <p className="skill__name">CSS</p>
            </div>
          </div>
          <div className="technologies__skill skill">
            <div className="skill">
              <img src={js} alt="js" className="skill__img" />
              <p className="skill__name">JavaScript</p>
            </div>
          </div>
          <div className="technologies__skill skill">
            <div className="skill">
              <img src={react} alt="react" className="skill__img" />
              <p className="skill__name">React JS</p>
            </div>
          </div>
          <div className="technologies__skill skill">
            <div className="skill">
              <img src={redux} alt="redux" className="skill__img" />
              <p className="skill__name">Redux</p>
            </div>
          </div>
          <div className="technologies__skill skill">
            <div className="skill">
              <img src={ts} alt="TypeScript" className="skill__img" />
              <p className="skill__name">TypeScript</p>
            </div>
          </div>
          <div className="technologies__skill skill">
            <div className="skill">
              <img src={bs} alt="Bootstrap" className="skill__img" />
              <p className="skill__name">Bootstrap</p>
            </div>
          </div>
          <div className="technologies__skill skill">
            <div className="skill">
              <img src={git} alt="Git" className="skill__img" />
              <p className="skill__name">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
