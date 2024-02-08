// Importing necessary modules from React
import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <ModalContext.Provider value={{ modal, setModal }}>
        {children}
      </ModalContext.Provider>
    </>
  );
};

export default ModalContextProvider;
