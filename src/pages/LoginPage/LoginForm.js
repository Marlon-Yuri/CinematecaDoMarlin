import React, { useState } from 'react'
import styled from 'styled-components'
import LoginImage from '../Home/assets/loginImage.jpeg'
import LoginBack from '../Home/assets/LoginBack.webp' 

const Container = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: black;
background-image: url(${LoginBack});
background-size: cover;
`

const Card = styled.section`
width: 43vw;
height: 76vh;
display : flex ;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 15px;
background-image: linear-gradient(to right, #434343 0%, black 100%);
`

const LoginBox = styled.div`
width: 27vw;
height: 25vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Img = styled.img`
border-radius: 50%;
width: 12vw;
height: 25vh;
//background-image: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
`
const Figure = styled.figure`
display: flex;
position: relative;
top: -10%;
align-items: center; 
justify-content: center;
`

const Input = styled.input`
font-size: 1.5vw;
font-family: 'Bebas Neue', cursive;
width: 20vw;
height: 5vh;
`
 
const Label = styled.label`
font-family: 'Anton', sans-serif;
font-size: 1.3vw;
color: white;
`
const InputSubmit = styled.input`
position: absolute;
left: 45.3%;
top:78%;
width: 9vw;
height: 3vh;
border-radius: 10px;
font-size: 1.2vw;
display: flex;
font-weight: bolder;
background-color: black;
color: white;
cursor: pointer;
justify-content: center;
align-items: center;
`
const ErrorBox = styled.div`
position: absolute;
top: 81%;
left: 41.2%;
h3{
    color: red;
    font-size:1.5vw;
    font-family: 'Anton', sans-serif;

}
`

export default function LoginForm({Login, erro }) {

    const [infos, setInfos] = useState({name:'', email:'', password:''})


    const handleSubmit = (e)=>{
        e.preventDefault()
        Login(infos)
    }

  return (
    <Container>
        <Card>
        <form onSubmit={handleSubmit}>
          <Figure>
            <Img src ={LoginImage} />
          </Figure>
        <LoginBox>
            <Label htmlFor='name'>Name: </Label>
            <Input type='text' name='name' value={infos.name} placeholder='👽' onChange={e =>{setInfos({...infos, name: e.target.value})}}/>
            
            <Label htmlFor='email'>Email: </Label>
            <Input type='email' name='email' value={infos.email} onChange={e =>{setInfos({...infos, email: e.target.value})}}/>

            <Label htmlFor='password'>Password: </Label>
            <Input type='password' name='password' placeholder='🔑' value={infos.password} onChange={e =>{setInfos({...infos, password: e.target.value})}} />
        </LoginBox>
        <InputSubmit  type='submit' />

        {erro !== '' ? <ErrorBox><h3>{erro}</h3></ErrorBox> :""} 
      
    </form>
    </Card>
    </Container>
  )
}
