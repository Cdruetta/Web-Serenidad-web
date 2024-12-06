import { Route, Routes } from "react-router-dom";

import { Layout } from "./components/Layout"

import { Home } from "./Pages/Home";

import { Products } from "./Pages/Products";  
import { Offers } from "./Pages/Offers";
import { CartPage } from "./Pages/CartPage";
import { Contact } from "./Pages/Contact";
import { AboutUs } from "./Pages/AboutUs";
import { Destacados } from './Pages/Destacados';
import { Tibetanos } from './Pages/Tibetanos';

import { Deportiva } from './Pages/Deportiva';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/products" element={<Products />}>
            <Route path="destacados" element={<Destacados />} />
            <Route path="tibetanos" element={<Tibetanos />} />
            
            <Route path="deportiva" element={<Deportiva />} />
          </Route>

        </Route>
      </Routes>
    </>
  )
}

export default App
