import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Movie from '../SelectMovie'
import {Link} from 'react-router-dom'
import api from '../../components/services/api'
import styled, { keyframes } from 'styled-components'
import Back from '../Home/assets/background2.jpg'
import Carousel from "nuka-carousel/lib/carousel";

const Main = styled.section`
width: 100%;
height: 100vh;
background-image: url(${Back});
background-size: cover;
display: flex;
justify-content: center;
align-items: center;
`

const SCarousel = styled(Carousel)`

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

const BoxCarousel = styled.div`
border-style:none;
width: 93vw;
height: 65.5vh;
margin-top:8% ;
background: rgba(0, 0, 0, 0.4);
`

const Image = styled.img`
width: 20vw;
height: 60vh;
`

const BoxLink = styled.div`
border:  solid white;
width: 20.1vw;
height: 5vh;
display: flex;
align-items: center;
justify-content: center;
border-radius:10px;
background-color:#1C1C1C;
transition: 0.5s ease-in;
:hover{
  background-color:#8B0000;
  cursor: pointer
} 
`
const SLink = styled(Link)`
 text-decoration: none;
 font-size: 1.2vw;
 color: white;
 font-weight: bolder;
 transition: 0.5s ease-in;
 :hover{
  color:black;
  font-size: 1.4vw;
 }
`


const info = {
  wrapAround: true,
  autoplay: true,
  speed:2000,
  keyCodeConfig: true,
  autoplayInterval: 4000,
  adaptiveHeight:true,
  frameOverflow:"visible",
  slidesToShow:4.2,
  transitionMode:"scroll", 
  dots: true,
  infinite: false,
  slidesToScroll: 2,
  dragThreshold: 4,
  inicialSlideHeight:'',	
  //slideWidth:'140%',
  defaultControlsConfig: {
      nextButtonText: ">",
      prevButtonText: "<",
      // pagingDotsStyle: {
      //     fill: "blue"
      // }
        
    }
  }

export default function Home() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  //const [moviesInfo, setMoviesInfo] = useState([])

useEffect(()=>{

 async function getFilmes(){
  const response = await api.get('movie/popular', {
    params: {
      api_key: '524b5482c573759992765668e997e0de',
      language: 'pt-BR',
      page:1 
    }
  })
  console.log(response)
  setMovies(response.data.results)
  setLoading(false)
 }

 getFilmes()
},[])


if(loading){
  return(
      <BoxLoading>
       <Loading>
       </Loading>
      <h1>Carregando...</h1>
      </BoxLoading>
   
  )
}

  return (
    <Main>
      <BoxCarousel>
      <SCarousel {...info} renderBottomCenterControls={false} 
        defaultControlsConfig={{
           
          nextButtonText: '🡺',
          prevButtonText: '🡸',
          pagingDotsStyle: {
            fill: 'blue',
          },
        }}
         >
      {movies.map(item =>{
        return(
          <>
            {/* <H2 key={item.id}><strong>{item.title}</strong></H2> */}
            <Image src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt ={item.title}/>
            <BoxLink>
              <SLink to={`/movie/${item.id}`}>Acessar</SLink>
            </BoxLink>
            
          </>
        )
      })}
      </SCarousel>
      </BoxCarousel>
    </Main>
  )
}
