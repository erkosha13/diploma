import { useState } from "react";
import { Login } from "../../../components/FormRegist/Login/Login";
import { Signup } from "../../../components/FormRegist/Signup/Signup";
import s from "./Modal.module.scss";
import { Button } from "../Button/Button";

interface ModalProps {
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleOverlay = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className={s.modal}>
      <div className="container">
        <div className={s.modalContent}>
          <div className={s.modalLogin}>
            <Login />
          </div>
          <div className={s.modalSignUp}>
            <Signup />
          </div>
          <div
            className={s.modalOverlay}
            style={{
              transform: showLogin ? "translateX(0)" : "translateX(100%)",
            }}
          >
            <div
              className={s.modalOverlayLeft}
              style={{ left: showLogin ? "25%" : "25%" }}
            >
              <div className={s.modalOverlayRight} style={{ left: "0" }}></div>
              {showLogin ? (
                <div className={s.modalButtons}>
                  <p>Hello Friend !</p>
                  <Button onClick={toggleOverlay}>Login</Button>
                </div>
              ) : (
                <div className={s.modalButtons}>
                  <p>Welcome Back !</p>
                  <Button onClick={toggleOverlay}>Sign Up</Button>
                </div>
              )}
            </div>
          </div>
          <button className={s.modalClose} onClick={onClose}>
            &#x2716;
          </button>
        </div>
      </div>
    </div>
  );
};
