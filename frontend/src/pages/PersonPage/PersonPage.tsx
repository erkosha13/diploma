import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import axios from "axios";
import { loginStore } from "../../store/login-store";
import s from "./PersonPage.module.scss";
import { PersonAnimated } from "../../components/AnimatedBox/PersonAnimated";

interface Diploma {
  name: string;
}

const PersonPage = observer(() => {
  const [userData, setUserData] = useState<{
    name: string;
    diplomas: Diploma[];
  }>({ name: "", diplomas: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Diploma[]>(
          "http://195.49.210.226:8080/api/diploma",
          {
            headers: {
              Authorization: `Bearer ${loginStore.userData}`,
            },
          }
        );
        const name = response.data[0]?.name || "";
        const diplomas = response.data.slice(1);
        setUserData({ name, diplomas });
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={s.personPage}>
      <div className="container">
        <div className={s.personPageContent}>
          <PersonAnimated>
            <div className={s.personInfoContainer}>
              <div className={s.personInfo}>
                <div className={s.personName}>
                  {userData.name && <p>{userData.name}</p>}
                </div>
              </div>
            </div>
          </PersonAnimated>
          <PersonAnimated>
            <div className={s.personDiplomaContainer}>
              <div className={s.personDiploma}>
                <div className={s.diplomaTitle}>
                  <h2>Diplomas</h2>
                </div>
                <div className={s.diplomaList}>
                  {userData.diplomas.map((data, index) => (
                    <div key={index} className={s.diplomaItem}>
                      <img src={data} alt="" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </PersonAnimated>
        </div>
      </div>
    </div>
  );
});

export default PersonPage;
