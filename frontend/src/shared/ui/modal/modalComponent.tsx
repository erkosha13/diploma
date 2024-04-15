import React from "react";
import { Modal } from "antd";
import { observer } from "mobx-react-lite";
import { modalStore } from "../../../store/modal-store";
import { Signup } from "../../../components/FormRegist/Signup/Signup";
import { Login } from "../../../components/FormRegist/Login/Login";


const CustomModal: React.FC = observer(() => {
  const handleCancel = () => {
    modalStore.closeModal();
  };

  return (
    <Modal
      title={modalStore.activeModal === "signup" ? "Sign up" : "Log in"}
      visible={modalStore.isVisible}
      onCancel={handleCancel}
      footer={null}
    >
      {modalStore.activeModal === "signup" ? <Signup /> : <Login/>}
    </Modal>
  );
});

export default CustomModal;
