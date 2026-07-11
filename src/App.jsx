import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import JobsPage from './pages/Jobs/JobsPage'
import JobDetails from './pages/JobDetails/JobDetails'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/jobs/propulsion-engineer" element={<JobDetails />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
