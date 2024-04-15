// src/stores/LoginStore.ts
import { makeAutoObservable } from "mobx";
import { modalStore } from "./modal-store";
import { IUserData } from "../shared/types/IUserData";

class LoginStore {
  modalStore;
  inpData: IUserData = {
    login: "",
    password: "",
  };

  inpDataErr = {
    loginErr: "",
    passwordErr: "",
  };

  constructor() {
    makeAutoObservable(this);
    this.modalStore = modalStore;
  }

  updateInpData = (key: keyof IUserData, value: string) => {
    this.inpDataErr = {
      ...this.inpDataErr,
      [key + "Err"]: "",
    };
    this.inpData = {
      ...this.inpData,
      [key]: value,
    };
  };
  clearData = () => {
    this.inpData = { login: "", password: "" };
    this.inpDataErr = { loginErr: "", passwordErr: "" };
  };
  validateData = () => {
    if (!this.inpData.login)
      this.inpDataErr.loginErr = "Логин не может быть пустым";
    if (!this.inpData.password)
      this.inpDataErr.passwordErr = "Пароль не может быть пустым";
  };

  clickHandler = (navigateCallback: (path: string) => void) => {
    this.validateData();
    if (Object.values(this.inpDataErr).every((i) => i === "")) {
      navigateCallback("/person");
      this.modalStore.closeModal();
    }
  };
}

export const loginStore = new LoginStore();
