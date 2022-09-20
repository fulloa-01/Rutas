import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./views/Home";
import Contacto from "./views/Contacto";
import Navbar from "./components/Navbar"
import NotFound from "./views/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
