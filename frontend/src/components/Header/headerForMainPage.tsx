import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import Modal from "../../shared/ui/modal/Modal";
import { Button } from "../../shared/ui/Button/Button";
import s from "./headerForMainPage.module.scss";
import { modalStore } from "../../store/modal-store";
import LanguageSelect from "../LanguageSelect/LanguageSelect";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const HeaderForMainPage = observer(() => {
  const handleOpenModal = () => {
    modalStore.openModal();
  };

  const handleCloseModal = () => {
    modalStore.closeModal();
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
              <Button onClick={handleOpenModal}>Sign Up / Log In</Button>
            </div>
          </div>
        </div>
      </div>
      {modalStore.isVisible && <Modal onClose={handleCloseModal} />}
    </div>
  );
});
