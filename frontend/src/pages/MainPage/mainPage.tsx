import Footer from "../Footer/footer";
import HeaderForMainPage from "./headerForMainPage/headerForMainPage";
import s from "./mainPage.module.scss";
export default function MainPage() {
  return (
    <>
      <HeaderForMainPage />
      <div className="container">
        <div className={s.padding}></div>
        <div className={s.mainBlock}>
          <div className={s.textBlock}>
            <p className={s.textH}>
              Присоединяйтесь к <br /> глобальному и современному <br />
              хранилищу <span className={s.span}>NFT</span>
              дипломов.
            </p>
          </div>
          <div className={s.newFormat}>
            <h2>Твой новый формат хранения диплома</h2>
            <p>...</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
