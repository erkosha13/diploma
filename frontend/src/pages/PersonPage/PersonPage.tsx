import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import s from "./PersonPage.module.scss";
import { PersonAnimated } from "../../components/AnimatedBox/PersonAnimated";
import { Button } from "../../shared/ui/Button/Button";
import Modal from "./NFTRegist/NFTRegist";
import { registStore } from "../../store/regist-store";

const PersonPage = observer(() => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<{
    name: string;
    diplomas: string[];
  }>({ name: "", diplomas: [""] });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://195.49.210.226:8080/api/diploma",
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
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

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
  };

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
                <Button
                  className="personButtonNFT"
                  onClick={() => {
                    registStore.openModal();
                  }}
                >
                  Create NFT diploma
                </Button>
                <Modal />
              </div>
            </div>
            <Button className={s.logout} onClick={handleLogout}>Logout</Button>
          </PersonAnimated>
          <PersonAnimated>
            <div className={s.personDiplomaContainer}>
              <div className={s.personDiploma}>
                <div className={s.diplomaTitle}>
                  <h2>Diplomas</h2>
                </div>
                <div className={s.diplomaList}>
                  {userData?.diplomas?.map((data, index) => (
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
