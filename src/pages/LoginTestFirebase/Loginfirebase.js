import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import firebase from './firebaseConnection'
import LoginBack from '../Home/assets/LoginBack.webp' 
import LoginImage from '../Home/assets/loginImage.jpeg'



const Container = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-image: url(${LoginBack});
background-size: cover;
`

const Card = styled.section`
width: 43vw;
height: 76vh;
display : flex ;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
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
const Figure = styled.figure`
display: flex;
align-items: center; 
justify-content: center;
`
const Img = styled.img`
border-radius: 50%;
width: 12vw;
height: 25vh;
//background-image: linear-gradient(#f07e6e, #84cdfa, #5ad1cd);
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

const BoxBtn = styled.div`
width: 38%;
height: 20vh;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
flex-wrap: wrap;
button{
    width: 10vw;
    height: 4vh;
    font-size: 1vw;
    border-radius:20px;
    cursor: pointer;
    font-weight: bolder;
    color: red;
    transition: 0.4s ease;
    :hover{
        background-color: red;
        color: white;
        width: 11vw;
    }
}
`

const WelcomeMsg = styled.h1`
h1{
    font-size: 1.3vw;
    color: white;
}
`
const Welcome = styled.h1`
    font-size: 1.3vw;
    color: white;

`

export default function Loginfirebase() {

const [email , setEmail] = useState('')
const [senha , setSenha] = useState('')
const [nome , setNome] = useState('')

const [userData, setUserData] = useState({})

const [user, setUser] = useState(false)

const CadastrarUser = async () =>{
    await firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then( async(value)=>{
        await firebase.firestore().collection('usuarios')
        .doc(value.user.uid)
        .set({
            nome: nome
        })
        .then(() =>{
            console.log(value)
            setEmail('')
            setNome('')
            setSenha('')
            alert('Cadastrado com sucesso')
        })

    }).catch((error) =>{
       if(error.code === 'auth/weak-password'){
        alert('Bota uma senha melhor aí cumpadi')
       }else if(error.code === 'auth/email-already-in-use' || 'auth/invalid-email'){
        alert('Email já cadastro ou inválido')
       }
    })

}

const Login = async () =>{
 await firebase.auth().signInWithEmailAndPassword(email,senha)
 .then( async(value) =>{
    await firebase.firestore().collection('usuarios')
    .doc(value.user.uid)
    .get()
    .then((snapshot)=>{
        alert('Logado')
        setUserData({
            nome: snapshot.data().nome ,
            email: value.user.email 
        })
    })
 }).catch((error) =>{
    console.log('Erro no login' + error)
    alert('Erro no login')
 })
}

const Deslogar = async () =>{
  await firebase.auth().signOut()
  alert('Deslogado')
}

useEffect(() =>{
   const checkLogin = async () =>{
    await firebase.auth().onAuthStateChanged((user) =>{
        if(user){
           setUser(true)
           setUserData({
            nome: user.nome,
            uid: user.uid
           })
        }else{
            setUserData({})
            setUser(false)
        }
    })
   }
checkLogin()
},[])

  return (
    <Container>
        <Card>  
        <Figure>
            <Img src ={LoginImage} />
        </Figure>
        {user && (
        <WelcomeMsg> <h1>Bem vindx {setUserData.nome} à cinemateca do Marlin <Link style={{textDecoration: 'none'}} to ='/login'>Clique aqui</Link> pra acessar</h1> </WelcomeMsg>
        
        ) }
        <LoginBox>
        <Label htmlFor='name'>Name: </Label>
            <Input type='text'  value={nome} placeholder='👽' onChange={e =>{setNome(e.target.value)}}/>
            
            <Label htmlFor='email'>Email: </Label>
            <Input type='email' name='email' value={email} onChange={e =>{setEmail(e.target.value)}}/>

            <Label htmlFor='password'>Password: </Label>
            <Input type='password'  placeholder='🔑' value={senha} onChange={e =>{setSenha(e.target.value)}}/>
        </LoginBox>
        <BoxBtn>
            <button onClick={() =>{CadastrarUser()}}>Novo usuário</button>
            <button onClick={() =>{Login()}}>Login</button>
            <button onClick={() =>{Deslogar()}}>Logout</button>
        </BoxBtn>
        <div>
            {Object.keys(userData).length > 0 && <Welcome>Bom te ver por aqui novamente {userData.nome}</Welcome>}
        </div>
        </Card>
    </Container>
  )
}
