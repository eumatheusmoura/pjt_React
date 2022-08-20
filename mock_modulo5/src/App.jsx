import { useState } from "react";
import S from "./App.css";
import Header from "./components/Header/HeaderText/Header";
import Intro from "./components/Intro/Intro/Intro";

function App() {
  return (
    <div className={S.App}>
      <Header />
      <Intro />
    </div>
  );
}

export default App;
