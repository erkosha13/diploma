import { makeAutoObservable } from "mobx";
import { registerUser } from "./registerUser";
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
    const { login, password, confirmpassword } = this.inpData;
    const errors: {
      loginErr: string;
      passwordErr: string;
      confirmpasswordErr: string;
    } = {
      loginErr: "",
      passwordErr: "",
      confirmpasswordErr: "",
    };

    const loginRegex = /^[a-zA-Z0-9]+$/;
    if (login === "") {
      errors.loginErr = "Логин не может быть пустым";
    } else if (!loginRegex.test(login)) {
      errors.loginErr = "Логин может содержать только латинские буквы и цифры";
    }

    // Валидация пароля
    const passwordRegex = /^(?=.*[a-zA-Z]).{8,}$/;
    if (password === "") {
      errors.passwordErr = "Пароль не может быть пустым";
    } else if (!passwordRegex.test(password)) {
      errors.passwordErr = "Ваш пароль слишком легкий";
    }

    if (confirmpassword === "") {
      errors.confirmpasswordErr = "Подтвердите пароль";
    } else if (confirmpassword !== password) {
      errors.confirmpasswordErr = "Пароли не совпадают";
    }

    this.inpDataErr = errors;
  };

  clickHandler = async () => {
    try {
      this.validateData();

      if (Object.values(this.inpDataErr).every((i) => i === "")) {
        await registerUser(this.inpData.login, this.inpData.password);
        alert("нажмите на кнопку login слева");
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };
}

export const signUpStore = new SignUpStore();
