import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/header";
import MainPage from "../pages/MainPage/mainPage";
import PersonPage from "../pages/PersonPage/PersonPage";
import "./router.scss";
import { Route, Routes } from "react-router-dom";
function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/person"} element={<PersonPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
