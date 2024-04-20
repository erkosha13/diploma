import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Button } from "../../shared/ui/Button/Button";
import s from "./header.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import LanguageSelect from "./components/LanguageSelect/LanguageSelect";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const Header = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  const handleGoToSignUp = () => {
    navigate("/Login");
  };

  const handleGoHome = () => {
    navigate("/");
  };

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
              <Button
                className={s.button}
                onClick={isMainPage ? handleGoToSignUp : handleGoHome}
              >
                {isMainPage ? "Sign Up / Log In" : "Home"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
