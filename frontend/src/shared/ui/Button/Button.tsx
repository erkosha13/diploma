import React from "react";
import s from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return <button className={s.button} onClick={onClick}>{children}</button>;
};
