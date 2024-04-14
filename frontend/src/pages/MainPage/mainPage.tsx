import React from "react";
import { observer } from "mobx-react-lite";

import HeaderForMainPage from "../../components/Header/headerForMainPage";
import Footer from "../../components/Footer/Footer";
import s from "./mainPage.module.scss";
import imageStore from "../../store/store-main";

const MainPage = observer(() => {
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
            <img src={imageStore.getCurrentImage()} alt="diploma"></img>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
});

export default MainPage;