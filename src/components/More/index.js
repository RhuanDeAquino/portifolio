import React from 'react'
import TitleComponent from '../Title'
import CardExp from '../Cards/CardExp'
import styled from 'styled-components'

import lofoSofya from "../../assets/logo-sofya.svg"
import lofo1STI from "../../assets/logo-1sti.svg"
import logoVNW from "../../assets/vainaweb-log.svg"

import GifMiles from "../../assets/miles-morales-sobre.gif"
import GifPeter from "../../assets/spider-man-sobre.gif"



const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;

  > img {
    position: absolute;
    right: 5%;
    top: 0;
    width: 150px;

    @media(max-width: 500px) {
      width: 100px;
      bottom: -8%;
    }
  }
`

const BoxContent = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 500px) {
    width: 95%
  }
`;

const More = ({ darkMode }) => {
  const experiences = [
    {
      imagem: lofoSofya,
      name: "Sofya - IA Plug and Play para Saúde",
      listResposabilites: [
        "Versionamento de código.",
        "Trabalho em equipe ágil.",
        "Desenvolvimento com foco em responsabilidade"
      ],
      sobre: "Trabalhei em alguns projetos, tanto em equipe quanto em projetos solo, mas sempre com supervisão de um tech líder. Projetos como:",
      listProjects: [
        "Ferramenta de pesquisa de estoque da Marisa",
        "Aplicativos de transcrição de áudio",
        "Aplicação da Sofya - IA Plug and Play para Saúde, destinada ao Hospital Sírio-Libanês, que consiste em preenchimento e facilitação de laudo médico para médicos e pacientes, por meio da transcrição de voz e imagens, utilizando IA"
      ]
    },
    {
      imagem: lofo1STI,
      name: "1STi - Serviços e consultoria de TI",
      listResposabilites: [
        "Versionamento de código",
        "Desenvolvimento com foco em responsabilidade"
      ],
      sobre: "Trabalhei em um projeto que durou pouco menos de um ano, que consistia em fazer todo o portal da Cruzeiro do Sul, entre outros projetos:",
      listProjects: [
        "Site da Sofya - IA Plug and Play para Saúde",
        "Portais da Cruzeiro do Sul com GRAPHCMS",
        "Site do livro da Deep Tech"
      ]
    },
    {
      imagem: logoVNW,
      name: "Vai na Web - Estágio de desenvolvedor web",
      listResposabilites: [
        "Versionamento de código",
        "Desenvolvimento com foco em responsabilidade"
      ],
      sobre: "Concluí o curso de Formação de Front-End na escola Vai na Web e fui aprovado na seleção, o que me permitiu avançar para o estágio. Durante o estágio, tive a oportunidade de ganhar minha primeira experiência prática trabalhando ao lado de desenvolvedores mais experientes.",
      listProjects: [
        "Portais do Hospital Sírio-Libanês com GRAPHCMS",
        "Site da Holonomics"
      ]
    }
  ];

  return (
    <Content darkMode={darkMode} id='experiencias'>
      <img src={darkMode ? GifMiles : GifPeter} alt="gif" />
      <TitleComponent darkMode={darkMode}>Sobre minhas experiências</TitleComponent>
      <BoxContent darkMode={darkMode}>
        {experiences.map((item, index) => (
          <CardExp
            darkMode={darkMode}
            key={index}
            Image={item.imagem || null}
            Title={item.name}
            ListResposabilits={item.listResposabilites}
            MoreExp={item.sobre}
            PrejectsLists={item.listProjects}
          />
        ))}
      </BoxContent>
    </Content>
  )
}

export default More;