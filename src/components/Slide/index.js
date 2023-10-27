import styled from 'styled-components';

import TitleComponent from '../Title'
import CardComponent from '../Cards/CardTec';

import REACT from "../../assets/react.png";
import GATSBY from "../../assets/gatsby.png";
import REDUX from "../../assets/redux.svg";
import SC from "../../assets/styled.png";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10rem;
`

const Box = styled.div` 
width: 100%;
height: 40vh;
display: flex;
border-radius: 5px 40px 6px 40px;
margin-top: 5rem;

@media(max-width: 500px) {
  height: 50vh;
}

@media(max-width: 500px) {
  height: 70vh;
}


.swiper-slide {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.swiper {
  width: 100%;
}
.swiper-pagination-bullet {
  background: ${(props) => (!props.darkMode ? 'var(--red-miles)' : 'var(--blue-peter)')};
}
`

const Carrosel = ({ darkMode }) => {

  const items = [
    {
      id: 1,
      image: "https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png",
      name: "CSS3",
      description: "O CSS3 é a terceira versão das Cascading Style Sheets, usada para estilizar páginas da web. Ele traz recursos avançados como gradientes, animações, layouts flexíveis, fontes personalizadas e transformações, permitindo um design mais criativo e responsivo na web. É essencial para o desenvolvimento front-end moderno.",
    },
    {
      id: 2,
      image: "https://seeklogo.com/images/H/html5-without-wordmark-color-logo-14D252D878-seeklogo.com.png",
      name: "HTML5",
      description: "O HTML, ou HyperText Markup Language, é a linguagem de marcação usada para criar estrutura e conteúdo em páginas da web. Ele define a hierarquia dos elementos, como cabeçalhos, parágrafos, links e imagens, permitindo que os navegadores exibam o conteúdo de forma organizada. O HTML é a base de qualquer página da web e trabalha em conjunto com o CSS e o JavaScript para criar sites interativos e visualmente atraentes.",
    },
    {
      id: 3,
      image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAdVBMVEX33x4AAAD/5h/HtBi6qBcZFgMxLAb/6iD85B//6B+FeBD64R7/7SD03R4vKgbPuxmklBTgyhtxZg40Lwbs1R3m0BwgHQRLQwl6bg+unRXVwBo9NwcdGgSXiBJSSgqMfxEmIwRqYA0KCQFaUgtkWgwSEQJEPgjaH22TAAAGDUlEQVR4nO2b61azOhBACUFJCNcWLAT5erH6/o94oGpLSUKC0NCz1uy/WtyOk5CZjI4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwP4O51P+GuoStpkH8IWT0+5kb0gJXzT4oy6BJvSQKNZ94FITvgwHJiAnzCS638dsn+ub0cnjd7blPV4g9wQc0wHMV38tIxDfD7/6myRzroSf4dWDxolInES7l4l34A247683VaRZ8Sq1/iJvIbuCN1UOvHhPv2GT0GdX9VCfesk1Uy2Q9dcb2BuYt2GLcDaPemJkjlNhzN1In3oupes2t5YyJOsvfTc0ROua29hkT9XBnbo7Q3tb2bqBOvSnm7VK1FHa9OnP+TVPf5c+iTr23aepxYSdl9OokkAoejuXmS/aFsrAibqBOuGSRvjVOSLtyIwvi+698JeHTLFPXOwnmx8L/8SNh8dH7wmvA7B0FtOpMPLyc+1s3cW4JdcY2Sw6teiSmenb/u0W/p/jK2tvISJ3lRyHo4eAR+WX3/Cos1xpa9UJYpcLb1uUv6LXybZenWvVsK+SLkBbhvrRbZVzQR91AneWWa7sLf4g6FzVXaSPpoy68MlN/DVER/Q5zHqpvQ+XTrKJXF5tGnv0lKUP/ShIL6i1/Cnf98asS1FGdPEO669WxrKRu1mxOX810x6/sQ6KOapyvLf/nUgMdvWKlxvqv2IwC75yuKm/QEWDSOu47bYIiXE1+djNjlzC2TtIbtZDUYb/IewVZI/Qm6oSL5em9fJqtcJlk1i7VNtf/Nbn1t5SR+q38VBOnthesWX+dOHp3dErsrlfDqwFiEHeEgsxeF8b8LqnfblHzz7OY8cY3eMxJNftMx3tjrzFgfm/KCNdeP7aU1hJ+wm2149K9cCsvsoksuU9Rd1iYlPpme2nJfZK6Zk7gl8BO3T1RvZPnQo9gCLayz0xW79ZrVo4OOqC6sPFi/YN6l/NRsxuzL59WvZtGyquNWn47Nsm0snorT/Nkr5RvHu3tzFDvct7JVAMbOwsXkDPUnS70kSLy+NnVuxWbHWU9JguTAnPV2+OBU0mOB18P8u0xX73NeSwJe/QY3x4LqDsOlbRUs4dnzCLqTigOb/zhKRMxLzXGuqOSlEmX7cFLfjjBsZE6jVLJ9df1wYWg3ix5BCO+5CBNvOH28C4bFqT4iEr1RR0rhAJqv6C6n38F4h/R9YavlDcsqPv55bxSqWsQ8U57MXVG8gahWBzLokJj6zBIDEainynHd+WhihXC1r5UwriRdwmLpG4UTiGD+Sc3967d0p2qz0K4kOvVIsuU+fw69zGIGyuE65Ytu/so7l8+fuRyd1+s+sS0+wPUaa6L6G0QN8mu9nWrLJkflfeZcJaOMVAx6GiBo2Mbt/7q/7yb7pcNApbXJGUsHe6cqE5cwckVMx2h+eKsGNw2x9mtj09kV1zXu2jJeEBHUNy9ndpTu/BqaDnPNi9SYRx3W2WUuoS4NOKyPuJtJUfyf8w4pEnudk/onkFzHMgaeuncfJH3Zz/2Fca4asrhGaDj9bapkUQSzov8sX1CwjPePmQjHVU+8dmprriOeIlfY8V0dNNbx0zd3T3F27rexqri9JjPVVdcNY/R3xlYNPnjP6hfvMbQyqCz3Ce4KxEonzC53uM8O+jd7mdyG3HjMHjX+5IiQs/LIhMzJB/vsQ0Ihp93jf9Lo0e5TJnhJhN+Zi1M0zHxkKNnqZmNCUP/J8lVEJsc99Ny87GkMl1rjawxzvx00uz9dqSamgpzKrN83ysWV+hN+JeH3YLm3THDKN8bZQHnZiY3jxc2S1+dkkIbt09vZHEx+QSYSLr8VBXzq9HJkPdzNF6QkTCtdWkXl4+ZcfDzRhn5w9Gj2gylTrUZuzjdBfxR173Mz6pAmC1G3UAIjkzefm3NlKQb+WGyDir+yDkwQqIsac79v3tdVrwtHQwfwAjJM5wOgl9v0iSLHj6IxLpBrfYX8Fowz9s9ZbQhJ39A+4GCY6+qqsszut/I3mBAV964cwZEGXHbR8x7BgAAAAAAAPA4/gMhkFZhpB+AswAAAABJRU5ErkJggg==",
      name: "JAVA SCRIPT",
      description: "O JavaScript é uma linguagem de programação de alto nível amplamente utilizada para tornar as páginas da web interativas e dinâmicas. Ele permite que os desenvolvedores adicionem comportamentos, como validação de formulários, animações, atualizações de conteúdo em tempo real e interação com o usuário, ao lado do HTML e do CSS. O JavaScript é executado nos navegadores dos usuários e também é usado no desenvolvimento de aplicativos web e móveis. É uma parte fundamental do desenvolvimento front-end e é suportado pela maioria dos navegadores modernos.",
    },
    {
      id: 4,
      image: REACT,
      name: "REACT",
      description: "React é uma biblioteca JavaScript para criação de interfaces de usuário interativas e reativas em aplicativos web. Ele usa componentes reutilizáveis, um Virtual DOM para desempenho otimizado e segue uma unidirecionalidade de dados para criar interfaces dinâmicas e eficientes. É amplamente usado e apreciado na comunidade de desenvolvimento web.",
    },
    {
      id: 5,
      image: GATSBY,
      name: "GATSBY",
      description: "Gatsby é um framework de desenvolvimento web de código aberto que se baseia em React e GraphQL. Ele é projetado para criar sites e aplicativos web de alto desempenho, seguros e escaláveis. Gatsby utiliza a geração de páginas estáticas para oferecer uma experiência de carregamento ultrarrápida, além de fornecer uma ampla gama de plugins e integrações para facilitar o desenvolvimento. É uma escolha popular para blogs, portfólios e sites de comércio eletrônico devido à sua eficiência e flexibilidade.",
    },
    {
      id: 6,
      image: SC,
      name: "STYLED-COMPONENTS",
      description: "Styled-components é uma biblioteca JavaScript que permite estilizar componentes React usando strings de template literal. Ela promove a criação de estilos de forma mais modular e reutilizável, encapsulando estilos diretamente nos componentes. Isso ajuda a manter o código organizado, facilita o desenvolvimento de interfaces de usuário coesas e oferece a capacidade de criar temas dinâmicos. É amplamente adotado na comunidade de desenvolvimento front-end e é uma alternativa popular ao CSS tradicional.",
    },
    {
      id: 7,
      image: REDUX,
      name: "REDUX",
      description: "Redux é uma biblioteca JavaScript para gerenciamento de estado em aplicativos, facilitando o controle do fluxo de dados e a comunicação entre componentes. É amplamente usado com React, mas pode ser usado com outros frameworks, tornando a manipulação de estado mais previsível e organizada.",
    },
  ]


  return (
    <Content darkMode={darkMode} id='conhecimentos'>
      <TitleComponent darkMode={darkMode}>Conhecimentos:</TitleComponent>
      <Box darkMode={darkMode}>
        <Swiper
          direction={'vertical'}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination]} effect="coverflow"
          loop={true}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
        >
          {items.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <CardComponent Image={item.image} Title={item.name} Description={item.description} darkMode={darkMode} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </Box>
    </Content>
  )
}

export default Carrosel