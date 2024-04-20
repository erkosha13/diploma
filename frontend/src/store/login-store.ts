import { makeAutoObservable } from "mobx";
import { loginUser } from "./loginUser";

interface HttpError {
  response: {
    status: number;
    data?: string; 
  }
}

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
        this.userData = await loginUser(
          this.inpData.login,
          this.inpData.password
        );
        console.log("Пользователь успешно вошел:", this.userData);

        localStorage.setItem("accessToken", this.userData);

        navigateCallback("/person");
      }
    } catch (error: unknown) {
      console.error("Ошибка при входе:", error);
      this.handleError(error);
    }
  };

  handleError = (error: unknown) => {
    const httpError = error as HttpError;
    if (httpError.response) {
      switch (httpError.response.status) {
        case 400:
          this.inpDataErr.loginErr = "Неверный запрос. Пожалуйста, проверьте введенные данные.";
          break;
        case 404:
          this.inpDataErr.loginErr = "Пользователь не найден. Убедитесь, что введенные данные корректны.";
          break;
        case 500:
          this.inpDataErr.loginErr = "Проблемы на сервере. Пожалуйста, попробуйте позже.";
          break;
        default:
          this.inpDataErr.loginErr = "Произошла неизвестная ошибка. Пожалуйста, свяжитесь с поддержкой.";
      }
    } else {
      this.inpDataErr.loginErr = "Не удается установить соединение с сервером. Проверьте ваше интернет-соединение.";
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

    const loginRegex = /^[A-Z][a-z]{3,}\d*$/;
    if (login === "") {
      errors.loginErr = "Логин не может быть пустым";
    } else if (!loginRegex.test(login)) {
      errors.loginErr =
        "Логин может содержать только латинские буквы и цифры, и должен начинаться с заглавной буквы";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{7,}$/;
    if (password === "") {
      errors.passwordErr = "Пароль не может быть пустым";
    } else if (password.length < 7) {
      errors.passwordErr = "Пароль должен быть не менее 7 символов";
    } else if (!/(?=.*[a-z])/.test(password)) {
      errors.passwordErr =
        "Пароль должен содержать как минимум одну латинскую букву";
    } else if (!/(?=.*\d)/.test(password)) {
      errors.passwordErr = "Пароль должен содержать как минимум одну цифру";
    } else if (!/(?=.*[A-Z])/.test(password)) {
      errors.passwordErr =
        "Пароль должен содержать как минимум одну заглавную букву";
    } else if (!passwordRegex.test(password)) {
      errors.passwordErr = "Ваш пароль слишком легкий";
    }

    this.inpDataErr = errors;
  };
}

export const loginStore = new LoginStore();
