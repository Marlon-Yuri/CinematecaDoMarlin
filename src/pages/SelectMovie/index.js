import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import styled, {keyframes} from 'styled-components'
import api from '../../components/services/api'
import BackImage from '../Home/assets/backMovie.jpg'
import { toast } from 'react-toastify'

const AniTitle = keyframes`
0%{
    font-size: 1.5vw
}

100%{
    font-size: 3vw
}

`

const Spin = keyframes`
 0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
`

const Loading = styled.div`
border: 16px solid pink;
border-top: 16px deeppink solid;
border-radius: 50%;
height: 120px;
width: 120px;
animation: ${Spin} 2s linear infinite;

`
const BoxLoading = styled.div`
border: solid;
/* position: absolute;
top: 30%;
left: 32%; */
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
width: 100vw;
height: 100vh;
background-color: gray;
h1{
  color: white
}
`


const Container = styled.main`
background-image: url(${BackImage});
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const InfoMovie = styled.section`
width: 90vw;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
justify-content: space-evenly;
img{
  position: absolute;
  top: 25%;
  width: 35vw;
}
h1{
  position: absolute;
  top: 9%;
  font-family: 'Oswald', sans-serif;
  color: white;
  font-size: 3vw;
  animation: ${AniTitle} 2s linear 1s;
  
}
`

const OverviewBox = styled.div`
width: 80vw;
height: 23vh;
background-color: #1C1C1C;
position:absolute;
left:10%;
top:73%;
display: flex;
justify-content: center;
align-items: center;
p{
  color: white;
  font-size: 1.6vw;
  font-family: 'Bebas Neue', cursive;
}
`
const BtnBox = styled.section`
a{
  text-decoration: none;
  color: black;
  transition: 1s;
  :hover{
  color: red;
}
}
position: absolute;
left: 13%;
width: 14vw;
height: 27vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
button{
  width: 11vw;
  height: 6vh;
  font-size: 1.5vw;
  font-family: 'Bebas Neue', cursive;
  //border-radius: 20px;
cursor: pointer; 
 font-size: 1.6vw;
 border-radius: 0.5em;
 background: #e8e8e8;
 border: 1px solid #e8e8e8;
 transition: all 2s;
 box-shadow: 3px 6px 9px #c5c5c5,
             -5px -5px 10px #ffffff;

:hover{
  color: red;
}
}
button:active {
 color: #666;
 box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
}

`

export default function Movie() {

  const {id} = useParams()

  const navigation = useNavigate()

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
   async function loadFilme(){
       await api.get(`/movie/${id}` ,{
        params:{
          api_key: '524b5482c573759992765668e997e0de',
          language: 'pt-BR',
        }
       }).then((response) =>{
          setMovies(response.data)
          setLoading(false)
       }).catch(()=>{
          navigation('/', {replace: true})
          return
       }, [navigation, id])
   }
   loadFilme()

   return () =>{
      
   }
  },)

  if(loading){
    return(
        <BoxLoading>
         <Loading>
         </Loading>
        <h1>Carregando...</h1>
        </BoxLoading>
     
    )
  }
  
 
const saveMovie = () =>{
  const myList = localStorage.getItem('@marlinflix')

  let savedMovie = JSON.parse(myList) || []

  const hasMovie = savedMovie.some(item => item.id === movies.id)

  if(hasMovie){
    toast.warn('Já existe na sua lista')
    return true
    
  }else{
    savedMovie.push(movies)   
  localStorage.setItem('marlinflix', JSON.stringify(savedMovie))
  toast.success('Item salvo na lista')
  }
  
}

  return (
    <Container>
      <InfoMovie>
        <h1>
          {movies.title}
        </h1>
        <img src={`https://image.tmdb.org/t/p/w500/${movies.backdrop_path}`} alt ={movies.title}/>
        <OverviewBox>
          <p>{movies.overview}</p>
        </OverviewBox>
        </InfoMovie>
        <BtnBox>
          <button onClick={() =>{saveMovie()}}>Salvar</button>
          <button><a target='blank' rel='external' href={`https://youtube.com/results?search_query=${movies.title} Trailer`}>Trailer</a></button>
        </BtnBox>
    </Container>
  )
}
