import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/header";
import { GenerateDiploma } from "../pages/GenerateDiploma/GenerateDiploma";

import MainPage from "../pages/MainPage/mainPage";
import PersonPage from "../pages/PersonPage/PersonPage";
import { LoginSignUp } from "../pages/Register/LoginSignUp";
import "./router.scss";
import { Route, Routes } from "react-router-dom";
function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/person"} element={<PersonPage />} />
        <Route path={"/modal"} element={<LoginSignUp />} />
        <Route path={"/check"} element={<GenerateDiploma />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Router;
