import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import { Button } from "../../../shared/ui/Button/Button";
import { signUpStore } from "../../../store/signup-store";
import s from "./Signup.module.scss";
import { autorun } from "mobx";
import { registStore } from "../../../store/regist-store";
import { useNavigate } from "react-router-dom";

export const Signup = observer(() => {

  const { inpData, inpDataErr, updateInpData, clearData, clickHandler } = signUpStore;

  const navigate = useNavigate();
  useEffect(() => {
    const reactionCleanup = autorun(() => {
      if (!registStore.isVisible) {
        clearData();
      }
    });
    return () => reactionCleanup();
  }, []);

  const handleClick = () => {
    clickHandler(navigate);
  };

  const handleGoToSignUp = () => {
    navigate("/Login");
  };
  return (
    <div className={s.signupContent}>
      <div className={s.registrationButton}>
        <span>Вернуться обратно</span>
        <Button onClick={handleGoToSignUp} className={s.button}>
          &larr;
        </Button>
      </div>
      <div className={s.signupTitle}>
        <h1>Create Account</h1>
      </div>
      <div className={s.signupInput}>
        <div>
          <input
            name="login"
            type="text"
            onChange={(e) => updateInpData("login", e.target.value)}
            placeholder="Username"
            value={inpData.login}
            maxLength={20}
          />
          {inpDataErr.loginErr !== "" && (
            <span className={s.err}>{inpDataErr.loginErr}</span>
          )}
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => updateInpData("password", e.target.value)}
            value={inpData.password}
            maxLength={20}
          />
          {inpDataErr.passwordErr !== "" && (
            <span className={s.err}>{inpDataErr.passwordErr}</span>
          )}
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => updateInpData("confirmpassword", e.target.value)}
            value={inpData.confirmpassword}
            maxLength={20}
          />
          {inpDataErr.confirmpasswordErr !== "" && (
            <span className={s.err}>{inpDataErr.confirmpasswordErr}</span>
          )}
        </div>
        <Button onClick={handleClick}>Sign Up</Button>
      </div>
    </div>
  );
});
