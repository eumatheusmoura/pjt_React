import React, { useState } from "react";
import S from "./Form.module.css";
import I from "../Input/Input.module.css";
import Label from "../Label/Label";
import Input from "../Input/Input";

const Form = () => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [email, setEmail] = useState("");
  const [validacao, setValidacao] = useState("");
  const [nomeValidacao, setNomeValidacao] = useState("");
  const [cpfValidacao, setCpfValidacao] = useState("");

  const checkCpf = (e) => {
    setCpfValidacao(e.target.value);

    if (e.target.value === "") {
      setCpfValidacao("O campo CPF não pode ser vazio");
    } else {
      setCpfValidacao("");
    }
  };

  const checkNome = (e) => {
    setNomeValidacao(e.target.value);

    if (e.target.value === "") {
      setNomeValidacao("O campo nome não pode ser vazio");
    } else {
      setNomeValidacao("");
    }
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);

    if (regex.test(email) === false) {
      setValidacao("Informe um e-mail válido");
    } else if (e.target.value === "") {
      setValidacao("O campo e-mail não pode ser vazio");
    } else {
      setValidacao("");
      return true;
    }
  };

  // FUNÇÃO DO INPUT RADIO
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <form action="" className={S.Formulario}>
      <Label htmlFor="nome" nome="Seu nome" />
      <Input onChange={checkNome} className={I.Input} type="text" id="nome" />
      <p className={S.Validacao}>{nomeValidacao}</p>
      <Label htmlFor="email" nome="E-mail" />
      <Input
        onChange={checkEmail}
        className={I.Input}
        type="email"
        id="email"
      />
      <p className={S.Validacao}>{validacao}</p>
      <Label htmlFor="cpf" nome="CPF" />
      <Input
        onChange={checkCpf}
        className={I.Input}
        type="text"
        id="cpf"
        maxLength="14"
      />
      <p className={S.Validacao}>{cpfValidacao}</p>
      <div className={S.ContainerRadio}>
        <div>
          <input
            className={I.InputRadio}
            name="masculino"
            value="masculino"
            type="radio"
            id="masculino"
            checked={selected === "masculino"}
            onChange={handleChange}
          />
          <Label forName="masculino" nome="Masculino" />
        </div>
        <div>
          <input
            className={I.InputRadio}
            name="feminino"
            value="feminino"
            type="radio"
            id="feminino"
            onChange={handleChange}
            checked={selected === "feminino"}
          />
          <Label forName="feminino" nome="Feminino" />
        </div>
      </div>
      <button className={S.btnEnviar} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
