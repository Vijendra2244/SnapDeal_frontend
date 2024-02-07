import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./section/navbar/Navbar.jsx";
import Footer from "./section/footer/Footer.jsx";
import Header from "./section/header/Header.jsx";
import ImageContextProvider from "./context/UserImageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ImageContextProvider>
    <BrowserRouter>
      <Header />
      <Navbar />
        <App />
      <Footer />
    </BrowserRouter>
    </ImageContextProvider>
  </React.StrictMode>
);
