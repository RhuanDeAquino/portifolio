import styled from "styled-components"

const Title = styled.h1`
  color: ${(props) => (props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};
  font-size: 2.3rem;
  transition: var(--tran-04);
  text-shadow: ${(props) => (props.darkMode && ' #c50b0c; -1px -1px')};

  @media(max-width: 900px) {
  font-size: 1.8rem;
  }
`;

const TitleComponent = ({ children, darkMode }) => {
  return (
    <Title darkMode={darkMode}>{children}</Title>
  )
}

export default TitleComponent;
