import Footer from "../pages/Footer/footer";
import MainPage from "../pages/MainPage/mainPage";
import "./router.scss";
import { Route, Routes } from "react-router-dom";
function Router() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/footer"} element={<Footer />} />
      </Routes>
    </>
  );
}

export default Router;
