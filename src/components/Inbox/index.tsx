import React from "react";
import Message from "../Message";
import {
  Body, Container, Footer, Title,
  Header, Close, SubTitle,
} from "./styled";
import "../../style.css";
//@ts-ignore
import close from "./close.svg";

function Inbox({
  messages, title, onClose,
}) {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Close onClick={onClose} src={close} />
      </Header>
      <SubTitle>INBOX</SubTitle>
      <Body>
        {messages.map((message, index) => <Message key={index} {...message}/>)}
      </Body>
      <Footer><img src='https://app.courier.com/static/favicon/favicon-32x32.png' /></Footer>
    </Container>
  );
}

export default Inbox;
