import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Home/Footer";
import AppRoutes from "./Routes/AppRoutes";
import "./index.css";
function App() {
  return (
    <>
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
    
  );
}

export default App;
