import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import HomeScreen from './screens/homeScreen'
import ProductGrid from './screens/productsGrid'
import WhyChooseUs from './screens/features'
import NewsletterCTA from './screens/CTA'
import Footer from './screens/footer'
import Stores from './screens/stores'
import Cart from './screens/Cart'
import Checkout from './screens/Checkout'
import { CartProvider } from './context/CartContext'
import { Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            <HomeScreen />
            <ProductGrid />
            <WhyChooseUs />
            {/* <NewsletterCTA /> */}
            <Footer />
          </>
        } />
        <Route path="/stores" element={<Stores />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </CartProvider>
  )
}

export default App
