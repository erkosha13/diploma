import HeaderForMainPage from "../../components/Header/headerForMainPage";
import Diploma from "../../assets/img/classic.png";

import s from "./mainPage.module.scss";
import FooterForMainPage from "../../components/Footer/Footer";

export default function MainPage() {
  return (
    <>
      <HeaderForMainPage />
      <div className="container">
        <div className={s.mainBlock}>
          <div className={s.textBlock}>
            <h1>
              Уникальные <span className={s.span}>NFT</span> дипломы
            </h1>
            <p className={s.textH}>
              Ваш университетский диплом в новом формате —{" "}
              <span className={s.span}>NFT</span>. Безопасное, современное,
              надежное хранилище для вашего достижения.
            </p>
          </div>
          <div className={s.mainImg}>
            <img src={Diploma} alt="diploma"></img>
          </div>
        </div>
      </div>
      <FooterForMainPage />
    </>
  );
}
