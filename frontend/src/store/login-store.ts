import { makeAutoObservable } from "mobx";
import { loginUser } from "./loginUser"; // Импортируем функцию для входа из файла api

class LoginStore {
  inpData = {
    login: "",
    password: "",
  };

  inpDataErr = {
    loginErr: "",
    passwordErr: "",
  };

  userData = ""; // Добавляем свойство для хранения данных пользователя

  constructor() {
    makeAutoObservable(this);
  }

  updateInpData = (key: string, value: string) => {
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

  clickHandler = async (navigateCallback: (path: string) => void) => {
    try {
      this.validateData();

      if (!Object.values(this.inpDataErr).some((i) => i !== "")) {
        this.userData = await loginUser(this.inpData.login, this.inpData.password);
        // Сохраняем данные пользователя в свойстве userData
        console.log('Пользователь успешно вошел:', this.userData);
        navigateCallback("/check");
      }
    } catch (error) {
      // Здесь можно обработать ошибку входа
      console.error('Ошибка при входе:', error);
    }
  };

  validateData = () => {
    if (this.inpData.login === "")
      this.inpDataErr.loginErr = "Логин не может быть пустым";
    else if (!/^[A-Z][a-z]{5,}\d*$/.test(this.inpData.login))
      this.inpDataErr.loginErr = "Некорретный логин";

    if (this.inpData.password === "")
      this.inpDataErr.passwordErr = "Пароль не может быть пустым";
    else if (
      !/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]{6,}$/.test(
        this.inpData.password
      )
    )
      this.inpDataErr.passwordErr = "Ваш пароль слишком простой";
  };
}

export const loginStore = new LoginStore();