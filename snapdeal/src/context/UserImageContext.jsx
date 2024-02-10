// Importing necessary modules from React
import { createContext, useState ,useEffect} from "react";

export const ImageContext = createContext();

const ImageContextProvider = ({ children }) => {
  const [userImage, setUserImage] = useState("");
  useEffect(() => {
    const storedImage = localStorage.getItem("userImage");
    if (storedImage) {
      setUserImage(storedImage);
    }
  }, []);

  return (
    <>
      <ImageContext.Provider value={{ userImage, setUserImage }}>
        {children}
      </ImageContext.Provider>
    </>
  );
};

export default ImageContextProvider;
