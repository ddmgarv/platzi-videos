import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <SearchBox />
      </BrowserRouter>
    </div>
  );
}

export default App;
