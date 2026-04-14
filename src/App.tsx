import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Product from "./pages/Product";
import Portraits from "./pages/Portraits";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/product" element={<Product />} />
        <Route path="/portraits" element={<Portraits />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
