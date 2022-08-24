export const checkEmail = (e) => {
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
