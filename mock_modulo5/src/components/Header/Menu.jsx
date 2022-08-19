import React from "react";
import S from "./Menu.module.css";

const Menu = ({ menu }) => {
  return <li className={S.itemMenu}>{menu}</li>;
};

export default Menu;
