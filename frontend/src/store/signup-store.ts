// src/stores/SignUpStore.ts
import { makeAutoObservable } from "mobx";
import { registStore } from "./regist-store";
import { IUserData } from "../shared/types/IUserData";

class SignUpStore {
  registStore;
  inpData: IUserData = {
    login: "",
    password: "",
    confirmpassword: "",
  };

  inpDataErr = {
    loginErr: "",
    passwordErr: "",
    confirmpasswordErr: "",
  };

  constructor() {
    makeAutoObservable(this);
    this.registStore = registStore;
  }

  updateInpData = (key: keyof IUserData, value: string) => {
    this.inpDataErr = {
      ...this.inpDataErr,
      [key + "Err"]: "",
    };
    this.inpData[key] = value;
    if (key === "password" && this.inpData.confirmpassword !== "") {
      this.validateData();
    }
  };
  clearData = () => {
    this.inpData = { login: "", password: "", confirmpassword: "" };
    this.inpDataErr = { loginErr: "", passwordErr: "", confirmpasswordErr: "" };
  };
  validateData = () => {
    if (!this.inpData.login)
      this.inpDataErr.loginErr = "Логин не может быть пустым";
    if (!this.inpData.password)
      this.inpDataErr.passwordErr = "Пароль не может быть пустым";
    if (this.inpData.password !== this.inpData.confirmpassword)
      this.inpDataErr.confirmpasswordErr = "Пароли не совпадают";
  };

  clickHandler = (navigateCallback: (path: string) => void) => {
    this.validateData();
    if (Object.values(this.inpDataErr).every((i) => i === "")) {
      navigateCallback("/person");
      this.registStore.closeModal();
    }
  };
}

export const signUpStore = new SignUpStore();
