import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'
import Shop from './pages/Shop'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import About from './pages/About'
import Statement from './pages/Statement'
import Contact from './pages/Contact'
import ShopDetail from './pages/ShopDetail'

export default function App() {
  return <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
    <Header />
    <main><Routes>
      <Route path="/" element={<Home />} />
      <Route path="/works" element={<Works />} />
      <Route path="/works/:id" element={<WorkDetail />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ShopDetail />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:id" element={<ServiceDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/statement" element={<Statement />} />
      <Route path="/contact" element={<Contact />} />
    </Routes></main>
    <Footer />
  </BrowserRouter>
}
