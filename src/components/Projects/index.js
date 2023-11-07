import React from 'react';
import styled from 'styled-components';
import RAMProject from "../../assets/captura-page-rick-and-morty.png";
import QuizProject from "../../assets/Captura de tela 2023-11-07 174044.png";

import TitleComponent from '../Title';
import TextComponent from "../Text"

const Content = styled.div`
  max-width: 1300px;
  width: 100%;
  height: auto;
  margin: auto;
  font-family: 'Ubuntu Condensed', sans-serif;
  margin-bottom: 8rem;
`

const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  alert-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem 0;

  > p {
    font-family: 'Ubuntu Condensed', sans-serif;
  }
`

const Link = styled.a`
  width: 300px;
  height: 300px;
  overflow: hidden;
  position: relative;
  background-color: #f4f6ff;
  border-radius: 10px;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 1px
  inset, rgba(9, 30, 66, 0.25) 0px -1px 0
  inset, rgba(9, 30, 66, 0.25) 0px 0px 1
  px inset !important;
  transition: all .3s ease-in-out;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  color: ${(props) => (props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    }

  > p {
    font-size: 1.5rem;
    line-height: 1.7em;
    position: absolute; 
    top: 75%;
    z-index: 9;
    color: #F2F2F2;;
    padding: .2rem .5rem;
    border-radius: 0 10px 10px 0;
    background: ${(props) => (props.darkMode ? ' var(--red-miles)' : 'var(--blue-peter)')};
    box-shadow: ${(props) => (props.darkMode ? ' 1px 0 10px var(--red-miles)' : '1px 0 10px var(--blue-peter)')};
  }
`;

const Image = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
z-index: 1;
border-radius: 10px;
`;

const Projects = ({ darkMode }) => {
  const items = [
    {
      title: "Api Rick and Morty",
      image: RAMProject,
      link: "https://willowy-conkies-ca8355.netlify.app"
    },
    {
      title: "Quiz",
      image: QuizProject,
      link: "https://rainbow-griffin-6d0921.netlify.app"
    },
  ]
  return (
    <Content darkMode={darkMode} id='projetos'>
      <TitleComponent darkMode={darkMode}>Projetos</TitleComponent>
      <TextComponent darkMode={darkMode}>Confira aluguns projetinho de estudo que eu fiz, ou estou fazendo:</TextComponent>
      <BoxContent>
        {items.map((item) => {
          return (
            <Link key={item} href={item.link} darkMode={darkMode} target='blank'>
              <Image src={item.image} alt={item.title} />
              <p>{item.title}</p>
            </Link>
          )
        })}
      </BoxContent>
    </Content>
  )
}

export default Projects