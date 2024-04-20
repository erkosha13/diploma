import Footer from "../components/Footer/Footer";
import { Header } from "../components/Header/header";

import MainPage from "../pages/MainPage/mainPage";
import PersonPage from "../pages/PersonPage/PersonPage";
import { LogInPage } from "../pages/Register/login/LogInPage";
import { SignUpPage } from "../pages/Register/signUp/signUpPage";
import "./router.scss";

import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/person"} element={<PersonPage />} />

        <Route path={"/Login"} element={<LogInPage />} />
        <Route path={"/SignUp"} element={<SignUpPage />} />
     

      </Routes>
      <Footer />
    </>
  );
}

export default Router;
