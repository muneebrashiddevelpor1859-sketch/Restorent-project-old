import React from 'react'
import Navbar from './Components/Shared/Navbar'
import Home from './Pages/Home'
import Footer from './Components/Shared/Footer'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Components/Contact'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/Contact' element={<Contact />}/>

      </Routes>
      {/* <Home/> */}
      <Footer/>
     </BrowserRouter>
  )
}

export default App
