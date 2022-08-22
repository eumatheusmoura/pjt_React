import React, { useState } from "react";
import S from "./Form.module.css";
import I from "../Input/Input.module.css";
import Label from "../Label/Label";
import Input from "../Input/Input";

const Form = () => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [validacao, setValidacao] = useState("");
  const [nomeValidacao, setNomeValidacao] = useState("");
  const [msd, setMsg] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (email === "") {
      setValidacao("O campo e-mail não pode ser vazio");
    } else {
      setValidacao("");
    }

    if (nome === "") {
      setNomeValidacao("Informe um nome válido");
    } else {
      nomeValidacao("");
    }
  };

  const checkNome = (e) => {
    setNome(e.target.value);

    if (nome === "") {
      setNomeValidacao("Informe um nome válido");
    } else {
      setNomeValidacao("");
    }
  };

  const checkEmail = (e) => {
    setEmail(e.target.value);

    if (regex.test(email) === false || email === "") {
      setValidacao("Informe um e-mail válido");
    } else {
      setValidacao("");
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
      <Input className={I.Input} type="number" id="cpf" />
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
      <button onClick={submit} className={S.btnEnviar} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
