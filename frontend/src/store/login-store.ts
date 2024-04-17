import { makeAutoObservable } from "mobx";
import axios from 'axios'

class LoginStore {
  inpData = {
    login: "",
    password: "",
  };

  inpDataErr = {
    loginErr: "",
    passwordErr: "",
  };

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
    this.validateData();
    if (Object.values(this.inpDataErr).some((i) => i !== "")) return;

    try {
      const response = await axios.post(
        'http://195.49.210.226:8080/api/auth/login',
        {
          userName: this.inpData.login,
          password: this.inpData.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      // Обработка успешного входа
      console.log(response.data); // Пример вывода ответа в консоль

      // Переход на другую страницу после успешного входа
      navigateCallback("/person");
    } catch (error) {
      // Обработка ошибок при входе
      console.error('Error:', error);
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