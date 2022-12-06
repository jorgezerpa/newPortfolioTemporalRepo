import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PersonalProjects } from './pages/PersonalProjects';
import { Navbar } from './commons/Navbar';

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personalProjects" element={<PersonalProjects />} />
      </Routes>
    </div>
  )
}

export default App