import React from 'react'
import {createGlobalStyle} from 'styled-components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './routes'
const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&display=swap');
}
`

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <ToastContainer autoClose ={3000} />
      <Routes/>
    </>
  )
}
