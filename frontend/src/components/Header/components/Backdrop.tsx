
import React from "react";
import s from "./backdrop.module.scss";

interface BackdropProps {
  onClick: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  return <div className={s.backdrop} onClick={onClick}></div>;
};

export default Backdrop;
