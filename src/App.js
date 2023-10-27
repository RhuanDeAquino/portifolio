import styled from 'styled-components';
import './App.css';
import Home from './components/Home';
import Slide from "./components/Slide";
import More from './components/More';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import Projects from './components/Projects';

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const BoxContent = styled.div`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.darkMode ? 'var(--body-color-dark)' : 'var(--body-color)'};

  > main {
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.darkMode ? 'var(--body-color-dark)' : 'var(--body-color)'};

  @media(max-width: 1024px) {
    width: 100%;
    padding: 0 2rem;
  }

  @media(max-width: 500px) {
    padding: 0 1rem;
  }
}
`

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return (
    <Content>
      <BoxContent darkMode={darkMode}>
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home darkMode={darkMode} />
        <main>
          <Slide darkMode={darkMode} />
          <More darkMode={darkMode} />
          <Projects darkMode={darkMode} />
          <Form darkMode={darkMode} />
        </main>
        <Footer darkMode={darkMode} />
      </BoxContent>
    </Content>
  );
}

export default App;
