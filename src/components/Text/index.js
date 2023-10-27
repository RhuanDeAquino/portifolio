import styled from "styled-components";

const Text = styled.p`
  color: ${(props) => (props.darkMode ? 'var(--text-color-dark)' : 'var(--text-color)')};
  font-size: 1.5rem;
  transition: var(--tran-04);
  
  @media(max-width: 900px) {
  font-size: 1rem;
  }
`;

const TextComponent = ({ children, darkMode }) => {
  return <Text darkMode={darkMode}>{children}</Text>;
};

export default TextComponent;