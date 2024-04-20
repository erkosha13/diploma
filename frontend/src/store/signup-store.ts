import { makeAutoObservable } from "mobx";
import { registerUser } from "./registerUser"; // Импорт функции регистрации
import { registStore } from "./regist-store";
import { IUserData } from "../shared/types/IUserData";

class SignUpStore {
  registStore;
  inpData: IUserData = {
    login: "",
    password: "",
    confirmpassword: "",
  };

  inpDataErr: {
    loginErr: string;
    passwordErr: string;
    confirmpasswordErr: string;
  } = {
    loginErr: "",
    passwordErr: "",
    confirmpasswordErr: "",
  };

  constructor() {
    makeAutoObservable(this);
    this.registStore = registStore;
  }

  updateInpData = (key: keyof IUserData, value: string): void => {
    this.inpDataErr = {
      ...this.inpDataErr,
      [key + "Err"]: "",
    };
    this.inpData[key] = value;
    if (key === "password" && this.inpData.confirmpassword !== "") {
      this.validateData();
    }
  };

  clearData = (): void => {
    this.inpData = { login: "", password: "", confirmpassword: "" };
    this.inpDataErr = { loginErr: "", passwordErr: "", confirmpasswordErr: "" };
  };

  validateData = (): void => {
    if (this.inpData.login === "")
      this.inpDataErr.loginErr = "Логин не может быть пустым";
    else if (!/^[A-Za-z][A-Za-z\d]{3,}$/.test(this.inpData.login))
      this.inpDataErr.loginErr =
        "Логин должен начинаться с буквы и содержать минимум 4 символа, включая буквы и цифры";

    if (this.inpData.password === "")
      this.inpDataErr.passwordErr = "Пароль не может быть пустым";
    else if (this.inpData.password.length < 7)
      this.inpDataErr.passwordErr = "Минимальная длина пароля - 7 символов";
    else if (!/(?=.*[a-zA-Z])(?=.*\d)/.test(this.inpData.password))
      this.inpDataErr.passwordErr =
        "Пароль должен содержать как минимум одну латинскую букву и одну цифру";

    if (this.inpData.confirmpassword === "")
      this.inpDataErr.confirmpasswordErr = "Подтвердите пароль";
    else if (this.inpData.confirmpassword !== this.inpData.password)
      this.inpDataErr.confirmpasswordErr = "Пароли не совпадают";
  };

  clickHandler = async (navigate: (path: string) => void): Promise<void> => {
    try {
      this.validateData();

      if (Object.values(this.inpDataErr).every((i) => i === "")) {
        await registerUser(this.inpData.login, this.inpData.password);
        navigate("/login");
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };
}

export const signUpStore = new SignUpStore();
