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
    else if (!/^[A-Z][a-z]{5,}\d*$/.test(this.inpData.login))
      this.inpDataErr.loginErr = "Некорректный логин";

    if (this.inpData.password === "")
      this.inpDataErr.passwordErr = "Пароль не может быть пустым";
    else if (this.inpData.password.length < 8)
      this.inpDataErr.passwordErr = "Минимальная длина пароля - 8 символов";
    else if (!/(?=.*[\W_])/.test(this.inpData.password))
      this.inpDataErr.passwordErr =
        "Пароль должен содержать хотя бы один спецсимвол";
    else if (
      !/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d\W_]{8,}$/.test(this.inpData.password)
    )
      this.inpDataErr.passwordErr = "Ваш пароль слишком простой";

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
        alert("Регистрация успешна. Перенаправление на страницу входа.");
        navigate("/login"); // Перенаправление на страницу login
      }
    } catch (error) {
      console.error("Ошибка при регистрации:", error);
    }
  };
}

export const signUpStore = new SignUpStore();
