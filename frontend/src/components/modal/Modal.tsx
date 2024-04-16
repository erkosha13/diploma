// Modal.tsx
import React from "react";
import { observer } from "mobx-react-lite";
import { modalStore } from "../../store/modal-store"; // Импорт store
import { Login } from "../FormRegist/Login/Login";
import { Signup } from "../FormRegist/Signup/Signup";
import { Button } from "../../shared/ui/Button/Button";
import s from "./Modal.module.scss";
import { AnimatedBox } from "../AnimatedBox/AnimatedBox";

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = observer(({ onClose }) => {
  const handleClose = () => {
    modalStore.closeModal();
    onClose();
  };

  const toggleOverlay = () => {
    modalStore.toggleLoginSignup();
  };

  return (
    <div
      className={s.modal}
      style={{ display: modalStore.isVisible ? "block" : "none" }}
    >
      <AnimatedBox>
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
                transform: modalStore.showLogin
                  ? "translateX(100%)"
                  : "translateX(0)",
              }}
            >
              <div
                className={s.modalOverlayLeft}
                style={{ left: modalStore.showLogin ? "25%" : "25%" }}
              >
                <div
                  className={s.modalOverlayRight}
                  style={{ left: "0" }}
                ></div>
                {modalStore.showLogin ? (
                  <div className={s.modalButtons}>
                    <p>Hello Friend!</p>
                    <Button onClick={toggleOverlay}>Sign Up</Button>
                  </div>
                ) : (
                  <div className={s.modalButtons}>
                    <p>Welcome Back!</p>
                    <Button onClick={toggleOverlay}>Login</Button>
                  </div>
                )}
              </div>
            </div>
            <button className={s.modalClose} onClick={handleClose}>
              &#x2716;
            </button>
          </div>
        </div>
      </AnimatedBox>
    </div>
  );
});

export default Modal;
