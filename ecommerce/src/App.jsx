import Headsets from "./pages/Headsets"
import Home from "./pages/Home"
import Keyboards from "./pages/Keyboards"
import Monitors from "./pages/Monitors"
import Mouses from "./pages/Mouses"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from "./pages/SingleProduct"
import Offers from "./pages/Offers"
import New from "./pages/New"
import Delivery from './pages/Delivery';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Teclados" element={<Keyboards />} />
        <Route exact path="/:category/:id" element={<SingleProduct />} />
        <Route exact path="/Auriculares" element={<Headsets />} />
        <Route exact path="/Monitores" element={<Monitors />} />
        <Route exact path="/Mouses" element={<Mouses />} />
        <Route exact path="/Ofertas" element={<Offers />} />
        <Route exact path="/Nuevos" element={<New />} />
        <Route exact path="/Envio" element={<Delivery />} />
      </Routes>
    </BrowserRouter>
  )
}