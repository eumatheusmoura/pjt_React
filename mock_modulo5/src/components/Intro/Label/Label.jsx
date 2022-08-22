import React from "react";
import S from "../Label/Label.module.css";

const Label = ({ nome, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={S.Label}>
      {nome}
    </label>
  );
};

export default Label;
