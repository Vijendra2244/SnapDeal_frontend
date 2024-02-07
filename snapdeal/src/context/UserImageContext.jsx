// Importing necessary modules from React
import { createContext, useState } from "react";

export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [userImage, setUserImage] = useState("");

  return (
    <>
      <ImageContext.Provider value={{ userImage, setUserImage }}>
        {children}
      </ImageContext.Provider>
    </>
  );
};

export default ImageContextProvider;
