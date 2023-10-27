import React, { useState } from 'react'
import styled from 'styled-components';

import LogoImg from "../../../src/assets/logo.png"

const Header = styled.header`
  width: 100vw;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  z-index: 999; 
  background-size: 100%;
  background: ${(props) => !props.darkMode ? 'black' : 'white'};
`

const HeaderContainerDesk = styled.div`
  max-width: 1300px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 900px) {
    display: none;
  }
`

const Logo = styled.img`
  width: 50px;
  height: 50px;
`

const Menu = styled.nav`
  display: flex;
  color: ${(props) => props.darkMode ? 'red' : '#242426'};

  :hover {
    transition: 0.5s;
    background: ${(props) => props.darkMode ? 'red' : '#242426'};
    border-radius: 12px;
    animation: flutterButton 1s;

  ::hover{
    @keyframes flutterButton {
      0%   {transform: translateY(-8px);}
      50%  {transform: translateY(4px);}
      100% {transform: translateY(-8px);}
    }
  }
}

a:visited {
  color: ${(props) => props.darkMode ? '#007aff' : 'red'};
}
`
const ItemMenu = styled.a`
  text-decoration: none;
  padding: 1rem;
  font-size: 1.2rem;
  margin: 0 0.5rem;
  width: auto;
  cursor: pointer;

  @media(max-width: 900px) {
    color: red;
    width: 95%;
    border-radius: 15px;
    border: 5px solid red;
    margin-bottom: 1rem;
    margin: 0 0 0.5rem 0;
    font-weight: 600;
    background: ${(props) => props.darkMode ? '#007aff' : 'black'};
  }
`

const Toggle = styled.div`
  margin-top: 1rem;
  width: 60px;
  height: 35px;
  border-radius: 15px;
  position: relative;
  background: ${(props) => props.darkMode ? 'white' : 'black'};
  display: flex;
  align-items: center;
  transition: var(--tran-04);
  box-shadow: black 0 0 10px 0;
  border: 0;

  @media(max-width: 900px) {
    margin-left: 2rem;
  }

  > div {
    width: 30px;
    height: 30px;
    background: ${(props) => props.darkMode ? 'black' : 'white'};
    position: absolute;
    left: ${(props) => props.darkMode ? '3px' : '45%'};
    border-radius: 50%;
    transition: var(--tran-04);
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 10px;
  }
`

const HeaderMobile = styled.div`
  display: none;

    @media(max-width: 900px) {
    display: flex;
    justify-content: space-between;
    width: 97%;
  }
`

const NavMobile = styled.nav`
  display: none;
  
  @media(max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: fixed;
    top: 10vh;
    width: 100%;
    height: 100vh;
    background: ${(props) => props.darkMode ? 'black' : 'white'};

    animation: openMenuMobile 0.5s;

  ::hover{
    @keyframes openMenuMobile {
      0%   {height: 50vh}
      100% {height: 100vh}
    }
  }
  }
`

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  background: transparent;

  > i {
    font-size: 2rem;
    color: ${(props) => (props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};
    }
`

const HeaderComponent = ({ darkMode, toggleDarkMode }) => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <Header darkMode={darkMode}>
      <HeaderContainerDesk>
        <Logo src={LogoImg} alt="logo" />
        <Menu darkMode={darkMode}>
          <ItemMenu href='#conhecimentos'>
            Conhecimentos
          </ItemMenu>
          <ItemMenu href='#experiencias'>
            Experiências
          </ItemMenu>
          <ItemMenu href="#fale_comigo">
            Fale Comigo
          </ItemMenu>
          <ItemMenu href="#contato">
            Contato
          </ItemMenu>
        </Menu>
        <Toggle onClick={() => toggleDarkMode()} darkMode={!darkMode}>
          <div />
        </Toggle>
      </HeaderContainerDesk>
      <HeaderMobile>
        <Logo src={LogoImg} />
        <Button onClick={() => setOpenNav(!openNav)} darkMode={!darkMode}>
          <i className='bx bx-menu'></i>
        </Button>
      </HeaderMobile>
      {openNav &&
        (<NavMobile darkMode={!darkMode}>
          <ItemMenu darkMode={darkMode} href='#conhecimentos' onClick={() => setOpenNav(false)}>
            Conhecimentos
          </ItemMenu>
          <ItemMenu darkMode={darkMode} href='#experiencias' onClick={() => setOpenNav(false)}>
            Experiências
          </ItemMenu>
          <ItemMenu darkMode={darkMode} href='#fale_comigo' onClick={() => setOpenNav(false)}>
            Fale Comigo
          </ItemMenu>
          <ItemMenu darkMode={darkMode} href="#contato" onClick={() => setOpenNav(false)}>
            Contato
          </ItemMenu>
          <Toggle onClick={() => toggleDarkMode()} darkMode={!darkMode}>
            <div />
          </Toggle>
        </NavMobile>)
      }
    </Header >
  )
}

export default HeaderComponent;