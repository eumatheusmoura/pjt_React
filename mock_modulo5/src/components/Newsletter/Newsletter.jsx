import React from "react";
import Titulo from "../Collections/Titulo/Titulo";
import Input from "../Intro/Input/Input";
import Label from "../Intro/Label/Label";
import S from "../Newsletter/Newsletter.module.css";
import I from "../Intro/Input/Input.module.css";

const Newsletter = () => {
  return (
    <div className={S.Newsletter}>
      <Titulo titulo="Compartilhe a novidade" />
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <div className={S.InputsNews}>
        <div className={S.LabelsNews}>
          <Label forName="newsNome" nome="Seu nome:" />
          <Input className={I.Input} type="text" id="newsNome" />
        </div>
        <div className={S.LabelsNews}>
          <Label forName="newsEmail" nome="Email:" />
          <Input className={I.Input} type="email" id="newsEmail" />
        </div>
      </div>
      <button className={S.btnEnviar}>Enviar agora</button>
    </div>
  );
};

export default Newsletter;
