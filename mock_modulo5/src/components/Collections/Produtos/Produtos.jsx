import React from "react";
import S from "../Produtos/Produtos.module.css";

const Produtos = () => {
  return (
    <div className={S.Container}>
      <div className={S.ProductCard}>
        <img
          src="https://cf.shopee.com.br/file/9170cdb2b191b60ff3c37e10f2cf69d1"
          alt=""
        />
        <h3>Nome do produto</h3>
        <p>
          Descrição do produto um pouco maior, com duas linhas ou três que
          explica melhor do que se trata.
        </p>
        <span className={S.PrecoNormal}>De: R$23,99</span>
        <h2 className={S.PrecoPromo}>Por: R$19.99</h2>
        <span>ou 2x de R$9,99</span>
        <button>Comprar</button>
      </div>
    </div>
  );
};

export default Produtos;
