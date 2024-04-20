import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { Select } from "antd";
import s from "./NFTRegist.module.scss";
import { registStore } from "../../../store/regist-store";
import axios from "axios";
const { Option } = Select;

const Modal: React.FC = observer(() => {
  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    degree: "",
    color: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);

      const accessToken = localStorage.getItem("accessToken");

      const response = await axios.post(
        "http://195.49.210.226:8080/api/diploma",
        {
          image: formData.color,
          name: formData.fullName,
          description: formData.university,
          degreeValue: formData.degree,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Response:", response.data);
      window.location.reload();
      registStore.closeModal();
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!registStore.isVisible) return null;

  return (
    <div className={s.modalOverlay} onClick={() => registStore.closeModal()}>
      <div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          className={s.closeButton}
          onClick={() => registStore.closeModal()}
        >
          <span>X</span>
        </button>
        <h2>Создай свой профиль</h2>

        <div className={s.inputGroup}>
          <input
            placeholder="ФИО"
            value={formData.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
          />
          <input
            placeholder="Полное Название университета"
            value={formData.university}
            onChange={(e) => handleChange("university", e.target.value)}
          />
          <div className={s.classification}>
            <div className={s.degree}>
              <Select
                defaultValue="Степень"
                style={{ width: 140 }}
                onChange={(value) => handleChange("degree", value)}
              >
                <Option value="bachelor">Bachelor</Option>
                <Option value="master">Master</Option>
                <Option value="doctor">Doctor</Option>
              </Select>
            </div>
            <div className={s.colour}>
              <Select
                defaultValue="Цвет Диплома"
                style={{ width: 140 }}
                onChange={(value) => handleChange("color", value)}
              >
                <Option value="blue">Blue</Option>
                <Option value="red">Red</Option>
              </Select>
            </div>
          </div>
        </div>

        <button
          className={s.nftSubmit}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Загрузка..." : "Submit"}
        </button>
      </div>
    </div>
  );
});

export default Modal;
