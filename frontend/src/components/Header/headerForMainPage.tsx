import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { Button } from "../../shared/ui/Button/Button";

import LanguageSelect from "../LanguageSelect/LanguageSelect";
import { Modal } from "../../shared/ui/modal/Modal";

import s from "./headerForMainPage.module.scss";

import { Link, useLocation } from "react-router-dom";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

export const HeaderForMainPage: React.FC = observer(() => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
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
              <Button onClick={openModal}>
                {isHomePage ? "Sign Up" : "Home"}
              </Button>
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
