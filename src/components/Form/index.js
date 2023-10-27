import React, { useState } from 'react';
import styled from 'styled-components';
import TitleComponent from '../Title';
import TextComponent from '../Text';
import emailjs from '@emailjs/browser';

import Image from "../../assets/spiders-man-email-send.jpg";

const Content = styled.section`
  max-width: 1300px;
  min-height: 558px;
  width: 100%;
  margin: auto;
  font-family: 'Ubuntu Condensed', sans-serif;
  margin-bottom: 8rem;

  > form {
    width: 100%;
    height: auto;

    .form__group {
    position: relative;
    padding: 20px 0 0;
    width: 100%;
    margin-bottom: 4rem;
  }

.textAreaInput{
  font-family: inherit;
  width: 100%;
  height: 5rem;
  border: none;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 17px;
  color: ${(props) => props.darkMode ? 'var(--red-miles)' : 'var(--blue-peter)'};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  font-weight: 600;
}

.inputEnter {
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 17px;
  color: ${(props) => props.darkMode ? 'var(--red-miles)' : 'var(--blue-peter)'};
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  font-weight: 600;
}

.inputEnter::placeholder {
  color: transparent;
}

.inputEnter:placeholder-shown ~ .labelInput {
  font-size: 17px;
  cursor: text;
  top: 20px;
  
}

.inputEnter:-webkit-autofill {
  background: transparent;
}

input:-internal-autofill-selected {
  background: transparent !important;
}

.labelInput {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  pointer-events: none;
  color:  #c50b0c;;

}

.inputEnter:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 5px;
  border-image: ${(props) => props.darkMode ? 'linear-gradient(to right, var(--red-miles),  var(--hover-color-dark))' : 'linear-gradient(to right,  var(--blue-peter), var(--red-peter))'};
  border-image-slice: 1;
}

.textAreaInput:focus {
  padding-bottom: 6px;
  font-weight: 700;
  border-width: 5px;
  border-image: ${(props) => props.darkMode ? 'linear-gradient(to right, var(--red-miles),  var(--hover-color-dark))' : 'linear-gradient(to right,  var(--blue-peter), var(--red-peter))'};
  border-image-slice: 1;
}

.inputEnter:focus ~ .labelInput {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color:  #c50b0c;;
  font-weight: 700;
}

.inputEnter:focus ~ .textAreaInput   {
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color:  #c50b0c;;
  font-weight: 700;
}

.btn {
 position: relative;
 font-size: 17px;
 text-transform: uppercase;
 text-decoration: none;
 padding: 1em 2.5em;
 display: inline-block;
 border-radius: 6em;
 transition: all .2s;
 border: none;
 font-family: inherit;
 font-weight: 500;
 color: #F2F2F2;
 background-color: ${(props) => props.darkMode ? 'var(--red-miles)' : 'var(--blue-peter)'};
 width: 180px;
 
}

.btn:hover {
 transform: translateY(-3px);
 box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
 transform: translateY(-1px);
 box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn::after {
 content: "";
 display: inline-block;
 height: 100%;
 width: 100%;
 border-radius: 100px;
 position: absolute;
 top: 0;
 left: 0;
 z-index: -1;
 transition: all .4s;
}

.btn::after {
  background-color: ${(props) => props.darkMode ? '#007aff' : ' #c50b0c;'};
}

.btn:hover::after {
 transform: scaleX(1.4) scaleY(1.6);
 opacity: 0;
}
  }
`

const BoxSucess = styled.div`
  width: 100%;
  border-radius: 12px;
  background: yellow;
  text-align: center;
  padding: 3rem;

  animation: showBoxSucess 1s;
  @keyframes showBoxSucess {
    from{transform: translateX(100%)}
    to{transform: translateX(0%)}
    }
`


const ImageSucess = styled.img`
  width: 100%;
  margin-bottom: 2rem;
  background:  #c50b0c;;
`

const TextSuccess = styled.p`
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;

  > i {
    font-size: 1rem;
  }
`

const Form = ({ darkMode }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  function submitHandler(e) {
    e.preventDefault();

    if (isSending) {
      // Se já estiver enviando, não faça nada
      return;
    }

    if (email === '' || name === '' || message === '') {
      alert('Faltou algo aí, hein!');
      return;
    }

    setIsSending(true); // Inicia o envio

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    }

    emailjs.send("service_6a3v7x5", "template_nh69k7k", templateParams, "R4cbPmcjfLYWeUftl")
      .then((response) => {
        console.log("Email enviado", response.status, response.text);
        setEmail("");
        setName("");
        setMessage("");
        setIsEmailSent(true);
      })
      .catch((err) => {
        console.log("Falha ao enviar o e-mail", err);
      })
      .finally(() => {
        setIsSending(false); // Finaliza o envio
      });
  }

  return (
    <Content darkMode={darkMode} id="fale_comigo">
      {isEmailSent ? (
        <BoxSucess>
          <ImageSucess src={Image} />
          <TextSuccess>Miles: <i>Foi enviado com sucesso?</i></TextSuccess>
          <TextSuccess>Peter: <i>Acho que sim</i></TextSuccess>
        </BoxSucess>
      ) : (
        <>
          <TitleComponent darkMode={darkMode}>Fala comigo:</TitleComponent>
          <TextComponent darkMode={darkMode}>Preencha os inputs abaixo para enviar um email pra mim :)</TextComponent>

          <br />
          <br />
          <br />
          <form method="POST" onSubmit={submitHandler}>
            <div className="form__group field">
              <input
                type="email"
                className="inputEnter"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="labelInput">Email</label>
            </div>

            <div className="form__group field">
              <input
                id="name"
                type="text"
                className="inputEnter"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="labelInput">Nome</label>
            </div>

            <div className="form__group field">
              <textarea
                id="message"
                className="textAreaInput"
                placeholder="Deixe aqui sua mensagem..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label className="labelInput">Mensagem</label>
            </div>
            <div>
              <label></label>
              <button className="btn" type='submit' disabled={isSending}>{isSending ? "Enviando..." : "Enviar"}</button>
            </div>
          </form>
        </>
      )}
    </Content>
  );
}

export default Form;
