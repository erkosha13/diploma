import s from "./PersonPage.module.scss";

import { Skeleton } from "antd";

const PersonPage = () => {
  // Рандомная информация о человеке
  const personInfo = {
    name: "Алексей Петров",
    university: "Университет имени Ивана Иванова",
    age: 30,
    city: "Москва, Россия",
    email: "example@example.com",
    phone: "+79123456789",
    address: "ул. Пушкина, д. Колотушкина, Москва, Россия",
    diplomas: ["Example Diploma 1", "Example Diploma 2", "Example Diploma 3"],
  };

  return (
    <div className={s.personPage}>
      <div className="container">
        <div className={s.personPageContent}>
          <div className={s.personInfoContainer}>
            <div className={s.personInfo}>
              <div className={s.personName}>
                <Skeleton.Image />
                <p>{personInfo.name}</p>
                <p>{personInfo.university}</p>
                <p>Age: {personInfo.age}</p>
                <p>City: {personInfo.city}</p>
              </div>
              <div className={s.contactInfo}>
                <h2>Contacts </h2>
                <p>Email: {personInfo.email}</p>
                <p>Phone: {personInfo.phone}</p>
                <p>Address: {personInfo.address}</p>
              </div>
            </div>
          </div>
          <div className={s.personDiplomaContainer}>
            <div className={s.personDiploma}>
              <div className={s.diplomaTitle}>
                <h2>Diplomas</h2>
              </div>
              <div className={s.diplomaList}>
                {/* Отображаем рандомные дипломы */}
                {personInfo.diplomas.map((diploma, index) => (
                  <p key={index}>{diploma}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonPage;
