import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import BackImg from '../Home/assets/favoriteBack.jpg'

const Container = styled.main`
height: 90.9vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-image: url(${BackImg});
position: absolute;
top: 9.1%;
`
const ItemBox = styled.section`
border: solid;
width: 70vw;
height: 75vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #1C1C1C;
border-radius: 20px;
img{
 width: 20vw;
}
h1{
  font-size: 3vw;
  color: white;
}
h2{
  color: white;
  text-decoration: none;
  margin-left: 8%;
}
`
const BtnBox = styled.div`
width: 20vw;
height: 7vh;
position: absolute;
left: 62%;
top: 50%;
display: flex;
align-items: center;
justify-content: center;
justify-content: space-evenly;
button{
  width: 7vw;
  height: 5vh;

  
display: inline-block;
outline: none;
cursor: pointer;
font-size: 14px;
line-height: 1;
border-radius: 500px;
transition-property: background-color,border-color,color,box-shadow,filter;
transition-duration: .3s;
border: 1px solid transparent;
letter-spacing: 2px;
min-width: 160px;
text-transform: uppercase;
white-space: normal;
font-weight: 700;
text-align: center;
padding: 16px 14px 18px;
color: red;
box-shadow: inset 0 0 0 2px #616467;
background-color: transparent;
height: 48px;
:hover{
color: #fff;
background-color: #616467;
}
                
}
`

export default function Favoritos() {

  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    const myList = localStorage.getItem('marlinflix')
    setFilmes(JSON.parse(myList) || [])
  }, [])

  const deleteMovie = (id) => {
    const deleteItem = filmes.filter(item => item.id !== id)
    setFilmes(deleteItem)
    localStorage.setItem('marlinflix', JSON.stringify(deleteItem))
    toast.success('Item removido')
  }

  return (
    <Container>
      <ItemBox>
        {/* <h1>My list</h1> */}

        {filmes.length === 0 && <h1>Nenhum filme adicionado :( </h1>}
        <ul>{filmes.map(item => {
          return (
            <>
              <div key={item.id}>
                <h2>{item.title}</h2>
              </div>
              <img src={`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`} alt={item.title} />
              <BtnBox>
                <Link to={`/movie/${item.id}`}><button>Detalhes</button></Link>
                <button onClick={() => { deleteMovie(item.id) }}>Excluir</button>
              </BtnBox>

            </>
          )
        })}</ul>
      </ItemBox>
    </Container>
  )
}
