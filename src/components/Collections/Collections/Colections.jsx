import { React, useState, useEffect } from "react";
import Produtos from "../Produtos/Produtos";
import Titulo from "../Titulo/Titulo";
import S from "../Collections/Collections.module.css";

const Colections = () => {
  const url =
    "https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=";
  const [pagina, setPagina] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function handleRequest() {
      try {
        setLoading(true);
        const response = await fetch(`${url}+${pagina}`);
        const json = await response.json();
        setLoading(false);
        setTotalPage(json.nextPage);
        setApiData([...apiData, ...json.products]);
      } catch (error) {
        console.log(error);
      }
    }
    handleRequest();
  }, [pagina]);

  const carregarMais = () => {
    setPagina(pagina + 1);
  };

  return (
    <div>
      <Titulo titulo="Sua seleção especial" />
      <div className={S.Produtos}>
        {apiData.length > 0 &&
          apiData.map((produto, index) => {
            return (
              <Produtos
                key={index}
                imagem={produto.image}
                nome={produto.name}
                descricao={produto.description}
                precoNormal={produto.oldPrice}
                precoPromo={produto.price}
                parcelas={produto.installments.count}
                precoParcelas={produto.installments.value}
              />
            );
          })}
        {pagina > totalPage || (
          <button onClick={carregarMais} className={S.LoadMore}>
            {loading ? "Carregando..." : "Ainda mais produtos aqui!"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Colections;
