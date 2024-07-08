import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import AdminPanel from './components/Admin'
import ViewBlog from './components/ViewBlog/ViewBlog'

const App = () => {
  return (
    <>
     
     <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/home' element={<Home />} />
        </Routes>
        <Routes>
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
        <Routes>
          <Route path='/view_blog' element={<ViewBlog />} />
        </Routes>
      </BrowserRouter>
    
     <Footer/>
    </>
  )
}

export default App
