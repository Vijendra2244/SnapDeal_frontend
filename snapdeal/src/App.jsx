import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import Footer from "./section/footer/Footer";
import LowerNavbar from "./section/lowerNavbar/LowerNavbar";
import Navbar from "./section/navbar/Navbar";

function App() {
  return (
    <div style={{position:"relative"}}>
      <Navbar/>
      <AllRoutes />

      <LowerNavbar />
      <Footer/>
    </div>
  );
}

export default App;
