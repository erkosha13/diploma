import { Button } from "../../../shared/ui/Button/Button";
import s from "./aboutUs.module.scss";

export default function AboutUs() {
  return (
    <div className="container">
      <div className={s.text}>
        <div>
          <h1>О компании</h1>
        </div>
        <div>
          <p>
            В <span>2024</span> году начинается эволюция и прогресс с нашей{" "}
            <br />
            компании, которая поможет вам сделать вашу жизнь легче
          </p>
        </div>
        <div className={s.textAlign}>
          <Button>Подробнее</Button>
        </div>
      </div>
    </div>
  );
}
