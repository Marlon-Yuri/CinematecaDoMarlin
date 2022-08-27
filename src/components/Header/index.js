import React from 'react'
import {Link} from 'react-router-dom'
import * as S from './style'
import styled from 'styled-components'


export const SLink = styled(Link)`
list-style: none;
font-size: 1.7vw;
text-decoration: none;
font-family: 'Anton', sans-serif;
font-weight: bolder;
color: white;
transition: 1s ease;
 
:hover{
  color: red;
  opacity: 70%;
}
`
export default function Header() {
  

  return (
    <S.Header>
      <S.TitleBox>
        <Link to='/login' style={{textDecoration:'none'}}><h1>MarlinFlix 📽️</h1> </Link>
      </S.TitleBox>
        <SLink to='/login'>Home</SLink>
        <SLink to='/favoritos'>Favoritos</SLink>
        <Link to='/'><button>Login</button></Link>
    </S.Header>
  )
}
