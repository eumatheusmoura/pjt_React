import React from "react";
import S from "./Form.module.css";
import Label from "../Label/Label";

const Form = () => {
  return (
    <form action="">
      <Label nome="Seu nome" />
      <input type="text" />
      <Label nome="E-mail" />
      <input type="text" />
      <Label nome="CPF" />
    </form>
  );
};

export default Form;
