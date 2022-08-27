import React, { useState } from 'react';
import LoginForm from './LoginForm'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import BackLogado from '../Home/assets/BackLogado.jpg'


const Container = styled.div`
background-image: url(${BackLogado});
background-size: cover;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`
const WelcomeBox = styled.section`
width: 57vw;
height: 37vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
justify-content: space-evenly;
h1{
    font-size: 2.5vw;
    font-family: 'Bebas Neue', cursive;
    color: white;
}
button{
    width: 10vw;
    height: 4vh;
    font-size: 1.4vw;
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
export default function App() {
    const adminUser = {
        email: 'chaay@chaay.com',
        password: 'marlonlindo',
    };

    const [user, setUser] = useState({ name: '', email: '' });

    const [erro, setErro] = useState('');

    const Login = (infos) => {
        console.log(infos);

        if (
            infos.email === adminUser.email &&
            infos.password === adminUser.password
        ) {
            setUser({ name: infos.name, email: infos.email });
        } else {
            console.log('Errou otário');
            setErro('Digite senha e email válidos');
        }
    };

    const Logout = () => {
        console.log('Deslogou');
        setUser({ name: '', email: '' });
    };

    return (
        <>
            {user.email !== '' ? (
                <Container>
                    <WelcomeBox>
                    <h1>Hi {user.name}, essa é a videoteca do Marlin, escolha sua ação:</h1>
                    <button onClick={() => {Logout();}}>Logout</button>
                    <Link to='/login'><button>Assistir</button></Link>
                    </WelcomeBox>
                </Container>
            ) : (
                <LoginForm Login={Login} erro={erro} />
            )}
        </>
    );
}
