import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../PersonPage/NFTRegist/NFTRegist";
import { registStore } from "../../store/regist-store";
import { Button } from "../../shared/ui/Button/Button";
import s from "./GenerateDiploma.module.scss";

export const GenerateDiploma = () => {
  const [isNFTCreated, setIsNFTCreated] = useState(false);

  return (
    <div className="container">
      <div className={s.generateDiploma}>
        <Button
          className="personButtonNFT"
          onClick={() => {
            registStore.openModal();
            setIsNFTCreated(true);
          }}
        >
          Create NFT diploma
        </Button>
        <Modal />

        {/* Добавлен дополнительный div с информацией */}
        {!isNFTCreated && (
          <div className={s.additionalDiv}>
            <p>Для продолжения, пожалуйста, создайте свой NFT диплом.</p>
          </div>
        )}

        <Link to="/person">
          <Button disabled={!isNFTCreated}>Мой профиль</Button>
        </Link>
      </div>
    </div>
  );
};
