import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSlider from "./components/HeroSlider"
import Footer from './components/Footer'
import CardList from './components/CardList'
import BlogList from './components/BlogList'
import Navbar from './components/Navbar'
import Blogs from './pages/Blogs'
import Register from './pages/Register'
import Login from './pages/Login'
import UserBlogs from './pages/UserBlogs'

function App() {


  return (
    <>
    {/* <Header/> */}
    <Header/>
    <Routes>
    {/* <Route path='/' element={<HeroSlider/>}/>
    <Route path='/blog' element={<BlogList/>}></Route> */}
    <Route path='/' element={<Blogs/>}></Route>
    <Route path='/blogs' element={<Blogs/>}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/my-blogs' element={<UserBlogs/>}></Route>
    </Routes>
    {/* <Footer/> */}
    </>
  )
}

export default App
