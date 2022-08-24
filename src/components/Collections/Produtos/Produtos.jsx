import React from "react";
import { useState } from "react";
import S from "../Produtos/Produtos.module.css";

const Produtos = ({
  imagem,
  nome,
  descricao,
  precoNormal,
  precoPromo,
  parcelas,
  precoParcelas,
}) => {
  return (
    <div className={S.Container}>
      <div className={S.ProductCard}>
        <img src={imagem} alt="" />
        <h3>{nome}</h3>
        <p>{descricao}</p>
        <span className={S.PrecoNormal}>De: {precoNormal},99</span>
        <h2 className={S.PrecoPromo}>Por: {precoPromo},99</h2>
        <span>
          ou {parcelas}x de {precoParcelas},99
        </span>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Produtos;
