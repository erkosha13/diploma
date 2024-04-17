import React from "react";
import { observer } from "mobx-react-lite";
import { Select } from "antd";
import s from "./NFTRegist.module.scss";
import { registStore } from "../../../store/regist-store";
import { Button } from "../../../shared/ui/Button/Button";

const { Option } = Select;

const Modal: React.FC = observer(() => {
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
          <input placeholder="ФИО" />
          <input placeholder="Полное Название университета" />
          <div className={s.classification}>
            <div className={s.degree}>
              <Select defaultValue="Степень" style={{ width: 140 }}>
                <Option value="bachelor">Бакалавриат</Option>
                <Option value="master">Магистратура</Option>
                <Option value="phd">Докторантура</Option>
              </Select>
            </div>
            <div className={s.colour}>
              <Select defaultValue="Цвет Диплома" style={{ width: 140 }}>
                <Option value="blue">Синий </Option>
                <Option value="red">Красный</Option>
              </Select>
            </div>
          </div>
        </div>

        <Button>Отправить</Button>
      </div>
    </div>
  );
});

export default Modal;
