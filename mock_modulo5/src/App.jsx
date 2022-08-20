import { useState } from "react";
import "./App.css";
import Colections from "./components/Collections/Collections/Colections";
import Header from "./components/Header/HeaderText/Header";
import Intro from "./components/Intro/Intro/Intro";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Colections />
    </div>
  );
}

export default App;
