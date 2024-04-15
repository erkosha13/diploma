import Footer from "../components/Footer/Footer";
import { HeaderForMainPage } from "../components/Header/headerForMainPage";
import MainPage from "../pages/MainPage/mainPage";
import PersonPage from "../pages/PersonPage/PersonPage";
import "./router.scss";
import { Route, Routes } from "react-router-dom";
function Router() {
  return (
    <>
      <HeaderForMainPage />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/person"} element={<PersonPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
