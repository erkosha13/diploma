import React from "react";
import { observer } from "mobx-react-lite";

import { Button } from "../../shared/ui/Button/Button";
import { Link } from "react-router-dom";
import LanguageSelect from "../LanguageSelect/LanguageSelect";
import s from "./headerForMainPage.module.scss";
import CustomModal from "../../shared/ui/modal/modalComponent";
import { modalStore } from "../../store/modal-store";
const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const HeaderForMainPage: React.FC = observer(() => {
  return (
    <div className={s.header}>
      <CustomModal />
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
              <Button onClick={() => modalStore.openModal("login")}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default HeaderForMainPage;
