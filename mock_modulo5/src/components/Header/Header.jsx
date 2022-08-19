import React from "react";
import S from "./Header.module.css";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className={S.container}>
      <p className={S.subtitulo}>uma seleção de produtos</p>
      <h1 className={S.titulo}>especial para você</h1>
      <p className={S.paragrafo}>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </p>
      <div className={S.menuItens}>
        <Menu menu="Conheça a Linx" />
        <Menu menu="Ajude o algorítimo" />
        <Menu menu="Seus produtos" />
        <Menu menu="Compartilhe" />
      </div>
    </div>
  );
};

export default Header;
