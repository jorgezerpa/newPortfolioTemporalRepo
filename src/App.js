import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PersonalProjects } from './pages/PersonalProjects';
import { QuickProjects } from './pages/quickProjects';
import { Navbar } from './commons/Navbar';
import { Footer } from './commons/Footer'

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<PersonalProjects />} />
          <Route path="/quick-projects" element={<QuickProjects />} />
        </Routes>
        <Footer />
    </div>
  )
}

export default App