import React, { useState } from "react";
import Message from "../Message";
import {
  Body, Container, Footer, Title,
  Header, Close, SubTitle,
} from "./styled";
import "../../style.css";
//@ts-ignore
import close from "./close.svg";
//@ts-ignore
import courier from "./courier.svg";

function Inbox({
  messages, title, onClose, onMessageClick,
  indicator, show: _show,
}) {
  const show = !indicator ? true : indicator && _show ? true : false;
  return (
    <Container show={show}>
      <Header>
        <Title>{title}</Title>
        <Close onClick={onClose} src={close} />
      </Header>
      <SubTitle>INBOX</SubTitle>
      <Body>
        {messages.map((message, index) => <Message onClick={() => onMessageClick(message)} key={index} {...message}/>)}
      </Body>
      <Footer><img src={courier}/></Footer>
    </Container>
  );
}

export default Inbox;
