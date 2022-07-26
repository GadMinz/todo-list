import React from "react";
import s from "./Button.module.scss";

interface ButtonProps extends React.ComponentPropsWithRef<"button"> {
  color: "orange" | "blue" | "red";
}

const Button: React.FC<ButtonProps> = ({ children, color, onClick }) => {
  const className = `${s.button} ${s[`button_${color}`]}`;
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
