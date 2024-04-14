import Footer from "../Footer/footer";
import s from "./mainPage.module.scss";
export default function MainPage() {
  return (
    <>
      <div className="container">
        <div className={s.mainBlock}>
          <p>Info</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
