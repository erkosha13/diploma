import s from "./headerForMainPage.module.scss";
import { Select } from "antd";

import KZ from "../../assets/icons/kk.svg";
import RU from "../../assets/icons/ru.svg";
import EN from "../../assets/icons/en.svg";
import { Button } from "../../shared/ui/Button/Button";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};
export default function HeaderForMainPage() {
  return (
    <div className={s.header}>
      <div className="container">
        <div className={s.navBar}>
          <div className={s.logo}>
            <p>LOGO</p>
          </div>
          <div className={s.settings}>
            <div className={s.lang}>
              <Select
                defaultValue="KZ"
                style={{ width: 85 }}
                onChange={handleChange}
                options={[
                  {
                    label: <span>Language</span>,
                    title: "manager",
                    options: [
                      {
                        label: (
                          <span className={s.labelImg}>
                            <img src={KZ} alt="KZ"></img>KZ
                          </span>
                        ),
                        value: "KZ",
                      },
                      {
                        label: (
                          <span>
                            <img src={RU} alt="RU"></img>RU
                          </span>
                        ),
                        value: "RU",
                      },
                      {
                        label: (
                          <span>
                            <img src={EN} alt="EN"></img>EN
                          </span>
                        ),
                        value: "EN",
                      },
                    ],
                  },
                ]}
              />
            </div>
            <div className={s.registration}>
              <Button>Sign Up</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
