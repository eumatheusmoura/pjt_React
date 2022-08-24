import { useState } from "react";
import "./App.css";
import Header from "./components/Header/HeaderText/Header";
import Intro from "./components/Intro/Intro/Intro";
import Colections from "./components/Collections/Collections/Colections";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Colections />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
