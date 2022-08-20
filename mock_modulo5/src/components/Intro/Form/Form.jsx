import React, { useState } from "react";
import S from "./Form.module.css";
import I from "../Input/Input.module.css";
import Label from "../Label/Label";
import Input from "../Input/Input";

const Form = () => {
  const [selected, setSelected] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <form action="" className={S.Formulario}>
      <Label forName="nome" nome="Seu nome" />
      <Input className={I.Input} type="text" id="nome" />
      <Label forName="email" nome="E-mail" />
      <Input className={I.Input} type="email" id="email" />
      <Label forName="cpf" nome="CPF" />
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
      <button className={S.btnEnviar} type="submit">
        Enviar
      </button>
    </form>
  );
};

export default Form;
