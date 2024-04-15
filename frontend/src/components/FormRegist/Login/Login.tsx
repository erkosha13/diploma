import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import s from "./Login.module.scss";
import { Button } from "../../../shared/ui/Button/Button";
import { loginStore } from "../../../store/login-store";
import { IUserData } from "../../../shared/types/IUserData";

export const Login = observer(() => {
  const { inpData, inpDataErr, updateInpData } = loginStore;
  const navigate = useNavigate();

  const handleClick = () => {
    if (!inpDataErr.loginErr && !inpDataErr.passwordErr) {
      loginStore.clickHandler(navigate);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      event.key === "Enter" &&
      !inpDataErr.loginErr &&
      !inpDataErr.passwordErr
    ) {
      loginStore.clickHandler(navigate);
    }
  };

  return (
    <div className={s.loginContent}>
      <div className={s.loginTitle}>
        <h1>Sign in to Website</h1>
      </div>
      <div className={s.loginInput}>
        <div>
          <input
            name="login"
            type="text"
            onChange={(e) =>
              updateInpData(e.target.name as keyof IUserData, e.target.value)
            }
            placeholder="Username"
            value={inpData.login}
            maxLength={20}
            onKeyDown={handleKeyDown}
          />
          {inpDataErr.loginErr !== "" && (
            <span className={s.err}>{inpDataErr.loginErr}</span>
          )}
          <input
            name="password"
            type="password"
            onChange={(e) =>
              updateInpData(e.target.name as keyof IUserData, e.target.value)
            }
            placeholder="Password"
            value={inpData.password}
            maxLength={20}
            onKeyDown={handleKeyDown}
          />
          {inpDataErr.passwordErr !== "" && (
            <span className={s.err}>{inpDataErr.passwordErr}</span>
          )}
        </div>
        <Button onClick={handleClick}>Log in</Button>
      </div>
    </div>
  );
});
