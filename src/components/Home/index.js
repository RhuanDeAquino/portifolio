import React from 'react';
import Me from "../../assets/me.png";
import styled from 'styled-components';

import TextComponent from '../Text';
import TitleComponent from '../Title';

import WallpeaperMiles from "../../assets/wallpeaper-miles-desktop.jpg"
import WallpeaperMilesMobile from "../../assets/wallpeaper-miles-mobile.jpg"
import GifMiles from "../../assets/gif-miles-home.gif"

import Wallpeaperpeter from "../../assets/wallpeaper-spider-desktop.jpg"
import WallpeaperPeterMobile from "../../assets/wallpeaper-spider-mobile.jpg"
import GifPeter from "../../assets/gif-spider-home.gif"

const Content = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: ${(props) => `url(${props.darkMode ? WallpeaperMiles : Wallpeaperpeter})`};
  background-size: 100%;
  background-position-y: 33%;
  margin-bottom: 10rem;
  margin-top: 10rem;
  transition: 1s;
  position: relative;

  > img {
    position: absolute;
    bottom: -10%;
    right: 5%;
    width: 150px;

    @media(max-width: 500px) {
      width: 100px;
      bottom: -8%;
    }
  }

  @media(max-width: 1024px) {
  background-image: ${(props) => `url(${props.darkMode ? WallpeaperMilesMobile : WallpeaperPeterMobile})`};
  background-position-y: 0;
  background-size: 100%;
  height: 100vh;
  margin-bottom: 5rem;
  margin-top: 4rem;
  }
`;

const Opacity = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-position: cover;
  background-color: #0D0D0D99;
`;

const BoxContent = styled.div`
  max-width: 1300px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0 2rem;
  }

  @media(max-width: 900px) {
    padding: 0 1rem;
  }
`;

const BoxImage = styled.figure`
  width: 30%;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 900px) {
    width: 100%;
  }

  @media(max-width: 900px) {
    width: 74%;
    height: auto;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const BoxMore = styled.div`
  text-align: start;
  width: 70%;

  > p {
    margin-bottom: 2rem;
  }

  @media(max-width: 900px) {
    width: 100%;
  }

  > h1 {
    margin-bottom: 2rem;
  }
`;

const Home = ({ darkMode }) => {
  return (
    <Content darkMode={darkMode}>
      <Opacity>
        <BoxContent>
          <BoxImage>
            <Image src={Me} />
          </BoxImage>
          <BoxMore darkMode={darkMode}>
            <TitleComponent darkMode={true}>Rhuan de Aquino Barbosa</TitleComponent>
            <TextComponent darkMode={true}>Como um jovem adulto de 23 anos, estou em busca de uma direção definida em minha vida, e meu próximo objetivo é conquistar a independência ao morar sozinho. Minha ambição principal é trilhar o caminho da programação, embora eu ainda careça de uma visão detalhada sobre como alcançar essa meta e quais linguagens de programação priorizar. No entanto, estou profundamente motivado a melhorar minha situação atual.</TextComponent>
            <TextComponent darkMode={true}>{"Obrigado por ler, e saber um pouco mais sobre mim ou sobre oque eu faço ou ja fiz :)"}</TextComponent>
          </BoxMore>
        </BoxContent>
      </Opacity>
      <img src={darkMode ? GifMiles : GifPeter} alt="gif" />
    </Content>
  );
};

export default Home;
