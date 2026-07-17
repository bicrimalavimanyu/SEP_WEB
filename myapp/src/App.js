import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./Pages/About";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./Pages/Home";
import { Product } from "./Pages/Product";
import { ProductDetails } from "./Pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />

        {/* Dynamic Route */}
        <Route path="/product/:id" element={<ProductDetails />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
