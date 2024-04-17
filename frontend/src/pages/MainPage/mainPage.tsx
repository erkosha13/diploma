import { observer } from "mobx-react-lite";
import s from "./mainPage.module.scss";

import Stages from "./Stages/Stages";

import DiplomaImg from "../../assets/img/Group_1.jpg";
import AboutUs from "./aboutUs/aboutUs";

const MainPage = observer(() => {
  return (
    <>
      <div className="container">
        <div className={s.mainBlock}>
          <div className={s.textBlock}>
            <h1>
              Уникальные <span>NFT</span> дипломы
            </h1>
            <p className={s.textH}>
              Ваш университетский диплом в новом формате —
              <span className={s.span}> NFT</span>. Безопасное, современное,
              надежное хранилище для вашего достижения.
            </p>
            <blockquote className={s.quote}>
              "Образование - это то, что остается после того, как все забыто." -
              Альберт Эйнштейн
            </blockquote>
            <p className={s.textH}>
              <span className={s.quoteSpan}>
                Сделайте свое образование вечным с помощью
                <span className={s.span}> NFT</span> -диплома.
              </span>
            </p>
          </div>
          <div className={s.mainImg}>
            <img src={DiplomaImg} alt="diploma"></img>
          </div>
        </div>
      </div>
      <Stages />
      <AboutUs />
    </>
  );
});

export default MainPage;
