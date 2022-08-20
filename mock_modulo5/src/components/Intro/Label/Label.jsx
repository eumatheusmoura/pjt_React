import React from "react";
import S from "../Label/Label.module.css";

const Label = ({ forName, nome, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={S.Label} for={forName}>
      {nome}
    </label>
  );
};

export default Label;
