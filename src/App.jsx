import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import JobsPage from './pages/Jobs/JobsPage'
import JobDetails from './pages/JobDetails/JobDetails'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import ProductCategory from './pages/ProductCategory/ProductCategory'
import ContactPage from './pages/Contact/ContactPage'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/propulsion-engineer" element={<JobDetails />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/products/:categoryId" element={<ProductCategory />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
