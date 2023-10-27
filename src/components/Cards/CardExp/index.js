import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 1.5rem;
  margin-bottom: 8rem;
  border-radius: 15px;
  position: relative;
  border-radius: 5px 40px 6px 40px;
  box-shadow: ${(props) => (props.darkMode ? '1px 0 10px var(--card-exp-color-dark)' : '1px 0 10px var(--blue-peter)')};;
  background-color: ${(props) => (props.darkMode ? 'var(--card-exp-color-dark)' : 'var(--blue-peter)')};;
  transition: var(--tran-04);
`;

const Figure = styled.figure`
width: 100px;
height: 100px;
border-radius: 50%;
position: absolute;
top: -5rem;
padding: 1rem;
box-shadow: ${(props) => (props.darkMode ? '1px 0 10px var(--card-exp-color-dark)' : '1px 0 10px var(--blue-peter)')};;
background-color: ${(props) => (props.darkMode ? 'var(--card-exp-color-dark)' : 'var(--blue-peter)')};;
transition: var(--tran-04);
  
  > img {
  width: 100%;
  height: 100%;
}
`;

const BoxContent = styled.div`
gap: 3rem;
display: flex;

@media(max-width: 1024px) {
    flex-direction: column;
  }
`

const Content = styled.div`
width: auto;
`

const TitleCard = styled.h2`
width: 350px;
color: ${(props) => (!props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};

@media(max-width: 1024px) {
  font-size: 1.2rem;
  width: 100%;
  }
`;

const ResponsibilitiesTitle = styled.h4`
margin-top: 1rem;
color: ${(props) => (!props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};
`;

const List = styled.ul`
margin-top: 1rem;
list-style: none;
color: ${(props) => (!props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};
`;

const ListItem = styled.li`
color: ${(props) => (!props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};
transition: var(--tran-04);

`;

const ProjectsTitle = styled.h4`
color: ${(props) => (!props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};
`;

const TextCard = styled.p`
color: ${(props) => (!props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};
`;

const CardTec = ({ darkMode, Image, Title, ListResposabilits, MoreExp, PrejectsLists }) => {
  return (
    <Container darkMode={darkMode}>
      <Figure darkMode={darkMode}>
        <img src={Image} alt={Title} />
      </Figure>
      <BoxContent>
        <Content>
          <TitleCard darkMode={darkMode}>{Title}</TitleCard>
          <ResponsibilitiesTitle darkMode={darkMode}>Responsabilidades:</ResponsibilitiesTitle>
          <List darkMode={darkMode}>
            {ListResposabilits.map((item) => (
              <ListItem key={item} darkMode={darkMode}>- {item}</ListItem>
            ))}
          </List>
        </Content>
        <Content>
          <ProjectsTitle darkMode={darkMode}>Projetos:</ProjectsTitle>
          <TextCard darkMode={darkMode}>{MoreExp}</TextCard>
          <List darkMode={darkMode}>
            {PrejectsLists.map((item) => (
              <ListItem key={item} darkMode={darkMode}>- {item}</ListItem>
            ))}
          </List>
        </Content>
      </BoxContent>
    </Container>
  );
}

export default CardTec;
