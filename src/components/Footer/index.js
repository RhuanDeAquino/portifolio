import React from 'react';
import TitleComponent from '../Title';
import styled from 'styled-components';

import MilesLogo from "../../assets/logo-miles-morales.png";
import PeterLogo from "../../assets/logo-spider-man.png";

import GifFooterMiles from "../../assets/miles-marales-footer.gif";
import GifFooterPeter from "../../assets/spider-man-footer.gif";


const Content = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => `url(${props.darkMode ? GifFooterMiles : GifFooterPeter})`};
  background-position-y: 33%;
  background-size: 100%;
  background-position: cover;
  position: relative; 
  
  >img {
    width: 120px;
    position: absolute;
    top: -10%;
    left: 70%;
    animation: flutter 1s infinite alternate;

    @keyframes flutter {
    0%   {top: -10%}
    50%  {top: -20%}
    100% {top: -10%}
  }

  @media(max-width: 500px) {
    width: 90px;
    height: 70px;
  }
}
`

const Opacity = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: cover;
  background-color: #0D0D0D95;
`;

const BoxContent = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  @media(max-width: 1024px) {
    padding: 2rem;
  }

  >p {
    color: var(--text-color-dark);
    font-weight: 600;
  }
`

const BoxIcons = styled.div`
  gap: 2rem;
  padding: 5rem 0;
  width: 30vw;
  display: flex;
  justify-content: space-between;

  @media(max-width: 1024px) {
    width: auto;
    padding: 1rem 0;
  }

  > a {
   color: ${(props) => props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)'};

    :hover {
      color: ${(props) => props.darkMode ? 'var(--hover-color-dark)' : 'var(--hover-color)'};
      transition: 0.5s;
    }
    > i {
      color: #F2F2F2;
      font-size: 3rem;
  }
}
`
const Footer = ({ darkMode }) => {
  return (
    <Content darkMode={darkMode} id="contato">
      <img src={darkMode ? MilesLogo : PeterLogo} alt="gif" />
      <Opacity>
        <BoxContent darkMode={darkMode}>
          <TitleComponent darkMode={true}>Contato</TitleComponent>
          <BoxIcons darkMode={darkMode}>
            <a href='https://www.linkedin.com/in/rhuan-de-aquino-desenvolvedor-front-end/ ' target="_blank" rel="noreferrer">
              <i className='bx bxl-linkedin' ></i>
            </a>
            <a href='https://www.instagram.com/_ubreezy/' target="_blank" rel="noreferrer">
              <i className='bx bxl-instagram' ></i>
            </a>
            <a href='https://contate.me/rhuan-portifolio' target="_blank" rel="noreferrer">
              <i className='bx bxl-whatsapp' ></i>
            </a>
            <a href='https://github.com/RhuanDeAquino' target="_blank" rel="noreferrer">
              <i className='bx bxl-github'></i>
            </a>
          </BoxIcons>
          <p>Copyright © 2023 - All rights reserved by Rhuan</p>
        </BoxContent>
      </Opacity>
    </Content>
  )
}

export default Footer