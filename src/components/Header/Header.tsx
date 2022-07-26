import React from "react";
import s from "./Header.module.scss";

interface HeaderProps {
  todoCount: number;
}

const Header: React.FC<HeaderProps> = ({ todoCount }) => {
  return (
    <div className={s.header_container}>
      <div className={s.header_title}>
        Todo List <b>{todoCount}</b> task(s)
      </div>
    </div>
  );
};

export default Header;
