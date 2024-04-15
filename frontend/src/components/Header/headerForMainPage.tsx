import s from "./headerForMainPage.module.scss";

import { Button } from "../../shared/ui/Button/Button";
import { Link, useLocation } from "react-router-dom";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
export default function HeaderForMainPage() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.navBar}>
          <div className={s.logo}>
            <Link to="/">
              <p>LOGO</p>
            </Link>
          </div>
          <div className={s.settings}>
            <div className={s.lang}>
              <LanguageSelect defaultValue="KZ" handleChange={handleChange} />
            </div>
            <div className={s.registration}>
              <Button>{isHomePage ? "Sign Up" : "Home"}</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
