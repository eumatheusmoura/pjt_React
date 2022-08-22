import React from "react";
import S from "../Input/Input.module.css";

const Input = ({ type, id, className, name, value, onChange }) => {
  return (
    <input
      onChange={onChange}
      type={type}
      id={id}
      name={name}
      value={value}
      className={className}
    />
  );
};

export default Input;
