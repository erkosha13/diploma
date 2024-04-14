import MainPage from "../pages/MainPage/mainPage";
import "./router.scss";
import { Route, Routes } from "react-router-dom";
function Router() {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
      </Routes>
    </>
  );
}

export default Router;
