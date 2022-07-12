import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation.jsx'
import About from './pages/About'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Products from './pages/Products'

function App() {

  return (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

  )
}

export default App
