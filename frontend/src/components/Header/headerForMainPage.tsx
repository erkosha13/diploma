import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Button } from "../../shared/ui/Button/Button";
import { Link } from "react-router-dom";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { Modal } from "../../shared/ui/modal/Modal";

import s from "./headerForMainPage.module.scss";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const HeaderForMainPage: React.FC = observer(() => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
              <Button onClick={openModal}>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div>
          <div className={s.overlay} onClick={closeModal}></div>
          <Modal onClose={closeModal}></Modal>
        </div>
      )}
    </div>
  );
});

export default HeaderForMainPage;
