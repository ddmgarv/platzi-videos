import React, { Component, Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import SearchBox from "./components/SearchBox/SearchBox";
import Header from "./components/Header/Header";
import Carousel from "./components/Carousel/Carousel";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import "./styles.css";

class App extends Component {
  state = {
    loggedIn: false
  };
  renderApp() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header loggedIn={true} />
          <SearchBox />
          <Carousel />
          <Footer />
        </BrowserRouter>
      </Fragment>
    );
  }
  renderLogin() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header loggedIn={false} />
          <Login />
          <Footer />
        </BrowserRouter>
      </Fragment>
    );
  }
  render() {
    return (
      <main
        className={this.state.loggedIn ? "app-container" : "login-container"}
      >
        {this.state.loggedIn ? this.renderApp() : this.renderLogin()}
      </main>
    );
  }
}

export default App;
