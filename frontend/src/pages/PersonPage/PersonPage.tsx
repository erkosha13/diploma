import s from "./PersonPage.module.scss";

import { Skeleton } from "antd";

const PersonPage = () => {
  return (
    <div className={s.personPage}>
      <div className="container">
        <div className={s.personPageContent}>
          <div className={s.personInfoContainer}>
            <div className={s.personInfo}>
              <div className={s.personName}>
                <Skeleton.Image />
                <p> Уалихан Еркебулан</p>
                <p> Qamalladin University</p>
                <p>Age: 25</p>
                <p>City: Almaty, Kazakhstan</p>
              </div>
              <div className={s.contactInfo}>
                <h2>Contacts </h2>
                <p>Email: example@example.com</p>
                <p>Phone: +1234567890</p>
                <p>Address: 123 Main Street, City, Country</p>
              </div>
            </div>
          </div>
          <div className={s.personDiplomaContainer}>
            <div className={s.personDiploma}>
              <div className={s.diplomaTitle}>
                <h2>Diplomas</h2>
              </div>
              <div className={s.diplomaList}>
                <p>Example Diploma 1</p>
                <p>Example Diploma 2</p>
                <p>Example Diploma 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
