import Footer from "../Footer/footer";
import HeaderForMainPage from "./headerForMainPage/headerForMainPage";
import s from "./mainPage.module.scss";
export default function MainPage() {
  return (
    <>
      <HeaderForMainPage />
      <div className="container">
        <div className={s.mainBlock}>
          <h2>
            Присоединяйтесь к глобальному и современному хранилищу NFT дипломов.
          </h2>
        </div>
        <div className={s.newFormat}>
          <h2>Твой новый формат хранения диплома</h2>
          <p>...</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
