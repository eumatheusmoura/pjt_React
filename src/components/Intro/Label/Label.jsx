import React from "react";
import S from "../Label/Label.module.css";

const Label = ({ nome, htmlFor, forName }) => {
  return (
    <label htmlFor={htmlFor} for={forName} className={S.Label}>
      {nome}
    </label>
  );
};

export default Label;
