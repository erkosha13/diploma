import { makeAutoObservable } from "mobx";
import { loginUser } from "./loginUser";

class LoginStore {
  inpData = {
    login: "",
    password: "",
  };

  inpDataErr = {
    loginErr: "",
    passwordErr: "",
  };

  userData = "";

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
        console.log('Пользователь успешно вошел:', this.userData);

        // Сохранение токена в localStorage
        localStorage.setItem('accessToken', this.userData);

        navigateCallback("/person");
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);
    }
  };

  validateData = () => {
    const { login, password } = this.inpData;
    const errors: {
      loginErr: string;
      passwordErr: string;
    } = {
      loginErr: "",
      passwordErr: "",
    };

    const loginRegex = /^[a-zA-Z0-9]+$/;
    if (login === "") {
      errors.loginErr = "Логин не может быть пустым";
    } else if (!loginRegex.test(login)) {
      errors.loginErr = "Логин может содержать только латинские буквы и цифры";
    }

    const passwordRegex = /^(?=.*[a-zA-Z]).{8,}$/;
    if (password === "") {
      errors.passwordErr = "Пароль не может быть пустым";
    } else if (!passwordRegex.test(password)) {
      errors.passwordErr = "Ваш пароль слишком легкий";
    }

    this.inpDataErr = errors;
  };
}

export const loginStore = new LoginStore();
