import React from "react";
import Footer from "./components/Footer";
import Header from "./components/header";
import CardList from "./components/Card/CardList";
import Profil from "./components/Profil/Profil";
import Form from "./components/Form/Form";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Header />
        <CardList />
        <Profil />
        <Form />
        <Footer />
      </Routes>
    </>
  );
}

export default App;
