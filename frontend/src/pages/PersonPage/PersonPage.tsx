import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import axios from "axios";
import { registStore } from "../../store/regist-store";
import Modal from "./NFTRegist/NFTRegist";
import { Button } from "../../shared/ui/Button/Button";
import s from "./PersonPage.module.scss";
import { PersonAnimated } from "../../components/AnimatedBox/PersonAnimated";
import { loginStore } from "../../store/login-store";

interface Diploma {
  id: number;
  metadata: {
    name: string;
    description: string;
    image: string;
    attributes: { trait_type: string; value: string }[];
  };
}

const PersonPage = observer(() => {
  const [diplomas, setDiplomas] = useState<Diploma[]>([]);

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
        setDiplomas(response.data);
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };

    fetchData();
  }, []); // Пустой массив зависимостей гарантирует, что эффект будет вызван только один раз после монтирования компонента

  return (
    <div className={s.personPage}>
      <div className="container">
        <div className={s.personPageContent}>
          <PersonAnimated>
            <div className={s.personInfoContainer}>
              <div className={s.personInfo}>
                <div className={s.personName}>
                  {diplomas.map((diploma) => (
                    <div key={diploma.id}>
                      <p>ФИО :{diploma.metadata.name}</p>
                      <p>Университет :{diploma.metadata.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Button
              className={s.personButtonNFT}
              onClick={() => registStore.openModal()}
            >
              Create NFT diploma
            </Button>
            <Modal />
          </PersonAnimated>
          <PersonAnimated>
            <div className={s.personDiplomaContainer}>
              <div className={s.personDiploma}>
                <div className={s.diplomaTitle}>
                  <h2>Diplomas</h2>
                </div>
                <div className={s.diplomaList}>
                  {diplomas.map((diploma) => (
                    <div key={diploma.id}>
                      <img
                        src={diploma.metadata.image}
                        alt={diploma.metadata.name}
                      />
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
