import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Modal from "../modal/Modal";
import { Button } from "../../shared/ui/Button/Button";
import s from "./header.module.scss";
import { modalStore } from "../../store/modal-store";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { useLocation, useNavigate } from "react-router-dom";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const Header = observer(() => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMainPage = location.pathname === "/";

  const handleOpenModal = () => {
    modalStore.openModal();
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
              <Button onClick={isMainPage ? handleOpenModal : handleGoHome}>
                {isMainPage ? "Sign Up / Log In" : "Home"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {modalStore.isVisible && (
        <Modal onClose={() => modalStore.closeModal()} />
      )}
    </div>
  );
});
