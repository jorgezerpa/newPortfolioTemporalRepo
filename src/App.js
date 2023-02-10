import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { PersonalProjects } from './pages/PersonalProjects';
import { QuickProjects } from './pages/quickProjects';
import { Navbar } from './commons/Navbar';
import { Footer } from './commons/Footer'

const App = () => {
  const location = useLocation()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();  // removing the spinner element
        setIsLoading(false); // showing the app
      }
  },[])

  if(isLoading) return null

  return (
    <>
      { isLoading && <div className='w-full h-screen bg-red-500'>cargando</div> }
      { !isLoading &&  (
        <div>
        { location.pathname==='/' && (
            <Navbar />
        )}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<PersonalProjects />} />
            <Route path="/quick-projects" element={<QuickProjects />} />
          </Routes>
          <Footer />
      </div>
      )}
    </>
  )
}

export default App