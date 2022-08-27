import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './pages/Home/index'
import Movies from  './pages/SelectMovie/index'
import Header from './components/Header/index'
import ErroPage from './ErroPage'
import Favoritos from './pages/Favoritos/Favoritos'
// import Login from './pages/LoginPage/Login'

import LoginFirebase from './pages/LoginTestFirebase/Loginfirebase'

export default function routes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/login' element={<Home/>}/>
            <Route path='/movie/:id' element={<Movies/>}/>
            <Route path='/favoritos' element={<Favoritos/>}/>
            <Route path='/' element={<LoginFirebase/>}/>

            <Route path='*' element={<ErroPage/>}/>
        </Routes>
    </Router>
  )
}
