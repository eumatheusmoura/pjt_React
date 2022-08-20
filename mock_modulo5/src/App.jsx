import { useState } from "react";
import "./App.css";
import Header from "./components/Header/HeaderText/Header";
import Intro from "./components/Intro/Intro/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
    </div>
  );
}

export default App;
