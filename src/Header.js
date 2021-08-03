import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Banner = styled.div`
background-color: black;
height: 5vh;
padding-bottom: 7vh;
padding-top: 2vh;
padding-left: 3vw;
`

const Per=styled.p`
color: white;
margin-top: 0;
font-family: 'Righteous', cursive;
font-size: 5vh;

`
const Header = () => {
    return (
        <Link style={{ textDecoration: 'none' }} to={"/"}>
          <Banner><Per>CurrentCoin News</Per></Banner>
        </Link>                 
    )
}

export default Header;
