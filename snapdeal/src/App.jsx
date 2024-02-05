import "./App.css";
import Poster from "./components/Poster";
import AllRoutes from "./routes/AllRoutes";
import LowerNavbar from "./section/lowerNavbar/LowerNavbar";


function App() {
  return (
    <div  >
      <AllRoutes />
      <Poster />
      <LowerNavbar/>
    </div>
  );
}

export default App;
