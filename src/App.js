import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Router } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>
  );
}

export default App;
