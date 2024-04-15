import Footer from "../components/Footer/Footer";
import HeaderForMainPage from "../components/Header/headerForMainPage";
import MainPage from "../pages/MainPage/mainPage";
import PersonPage from "../pages/PersonPage/PersonPage";
import { Modal } from "../shared/ui/modal/Modal";
import "./router.scss";
import { Route, Routes } from "react-router-dom";
function Router() {
  return (
    <>
      <HeaderForMainPage />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/person"} element={<PersonPage />} />
        <Route path={"/modal"} element={<Modal />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
