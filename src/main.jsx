import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";
import Footer from "./components/Footer";
import Header from "./components/header";
import CardList from "./components/Card/CardList";
import Profil from "./components/Profil/Profil";
import Form from "./components/Form/Form";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <CardList />
    <Profil />
    <Form />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
