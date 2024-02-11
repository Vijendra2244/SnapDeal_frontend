import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./section/navbar/Navbar.jsx";
import Footer from "./section/footer/Footer.jsx";
import ImageContextProvider from "./context/UserImageContext.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";
import ModalContextProvider from "./context/ModalContext.jsx";
import {ChakraProvider} from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ModalContextProvider>
        <AuthContextProvider>
          <ImageContextProvider>
            <BrowserRouter>
             
              <App />
             
            </BrowserRouter>
          </ImageContextProvider>
        </AuthContextProvider>
      </ModalContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
