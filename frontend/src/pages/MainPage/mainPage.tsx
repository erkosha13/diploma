import { observer } from "mobx-react-lite";
import HeaderForMainPage from "../../components/Header/headerForMainPage";
import Footer from "../../components/Footer/Footer";
import s from "./mainPage.module.scss";
import imageStore from "../../store/store-main";
import FourStages from "./fourStages/fourStages";

const MainPage = observer(() => {
  return (
    <>
      <HeaderForMainPage />
      <div className="container">
        <div className={s.mainBlock}>
          <div className={s.textBlock}>
            <h1>
              Уникальные <span>NFT</span> дипломы
            </h1>
            <p className={s.textH}>
              Ваш университетский диплом в новом формате —{" "}
              <span >NFT</span>. Безопасное, современное,
              надежное хранилище для вашего достижения.
              <blockquote className={s.quote}>
                "Образование - это то, что остается после того, как все забыто."
                - Альберт Эйнштейн
              </blockquote>
              <span className={s.quoteSpan}>
                Сделайте свое образование вечным с помощью NFT-диплома.
              </span>
            </p>
          </div>
          <div className={s.mainImg}>
            <img src={imageStore.getCurrentImage()} alt="diploma"></img>
          </div>
        </div>
      </div>
      <FourStages />
      <Footer />
    </>
  );
});

export default MainPage;
