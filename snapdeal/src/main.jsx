import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./section/navbar/Navbar.jsx";
import Footer from "./section/footer/Footer.jsx";
import Header from "./section/header/Header.jsx";
import ImageContextProvider from "./context/UserImageContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import ModalContextProvider from "./context/ModalContext.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ModalContextProvider>
      <AuthContextProvider>
        <ImageContextProvider>
          <BrowserRouter>
            <Header />
            <Navbar />
            <App />
            <Footer />
          </BrowserRouter>
        </ImageContextProvider>
      </AuthContextProvider>
    </ModalContextProvider>
  </React.StrictMode>
);
