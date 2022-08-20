import React from "react";
import Produtos from "../Produtos/Produtos";
import Titulo from "../Titulo/Titulo";
import S from "../Collections/Collections.module.css";

const Colections = () => {
  return (
    <div>
      <Titulo titulo="Sua seleção especial" />
      <div className={S.Produtos}>
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <Produtos />
        <button className={S.LoadMore}>Ainda mais produtos aqui!</button>
      </div>
    </div>
  );
};

export default Colections;
