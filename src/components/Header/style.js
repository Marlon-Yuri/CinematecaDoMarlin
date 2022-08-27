import styled, { keyframes} from 'styled-components';
// import {Link} from 'react-router-dom'


export const AnimationLogo = keyframes`
0%{
  transform: translate(-50px);
}
0%{
  transform: translate(80px);
}

100%{
  transform: translate(0px);
}
`

export const Header = styled.header`
width:100%;
height: 9vh;
display: flex;
justify-content: space-evenly;
align-items: center;
background-color:  hsl(0, 0%, 0%, 0);
position: absolute;
border-bottom: 3.3px solid black;
box-shadow: 1px 1px aliceblue;
background-color: #1C1C1C;
button{
   width: 5.4vw;
   height: 3.3vh;
   font-size: 1.2vw;
   border-radius: 10px;
   font-weight: bolder;
   cursor:pointer;
   transition: 0.4s ease-in;
   :hover{
    background-color: red;
    color: white;
    border: solid;
   }
}
 //z-index: 999;
//position: fixed;
`
export const LinkBox = styled.nav`
width: 35vw;
height: 5vh;
margin-left: 20%;
ul{
display: flex;
justify-content: space-evenly;
align-items: center; 
}
li{
  &:hover{
    color: red;
    transition: 1s;
  }
}
`
export const TitleBox = styled.div`
animation: ${AnimationLogo} 3s ease-in-out;
 
h1{
  font-family: 'Anton', sans-serif;
  color: 	#B22222; 
  font-size: 3vw;
}

`

// export const SLink = styled(Link)`
// list-style: none;
// font-size: 1.7vw;
// text-decoration: none;
// font-family: 'Oswald', sans-serif;
// font-weight: bolder;
// color: white;
// `