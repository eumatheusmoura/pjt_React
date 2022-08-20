import React from "react";
import S from "../Titulo/Titulo.module.css";

const Titulo = ({ titulo }) => {
  return (
    <h1 className={S.Titulo}>
      <span>{titulo}</span>
    </h1>
  );
};

export default Titulo;
