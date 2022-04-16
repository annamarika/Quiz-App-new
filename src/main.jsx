import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import  {GlobalStyle}  from "./GlobalStyle";
import Footer from './components/Footer';
import Header from './components/header';
import Card from './components/Card/Card'


ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Header />
    <Card />
    <App />
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
)
