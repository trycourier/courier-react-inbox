import React, { useRef } from "react";
import { ThemeProvider } from "styled-components";
import Message from "../Message";
import { InboxProps } from "../../types";
import { useCloseOnClickOut } from "../../hooks";
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
  indicator, show: _show, closeOnClickOut,
}) {
  const rootRef = useRef();
  const show = !indicator ? true : indicator && _show ? true : false;
  useCloseOnClickOut(rootRef.current, show && closeOnClickOut, onClose);
  return (
    <Container ref={rootRef} show={show}>
      <Header>
        <Title>{title}</Title>
        <Close onClick={onClose} src={close} />
      </Header>
      <SubTitle>INBOX</SubTitle>
      <Body>
        {messages.map((message, index) => <Message onClick={() => onMessageClick(message)} key={index}
          {...message}/>)}
      </Body>
      <Footer><img src={courier}/></Footer>
    </Container>
  );
}

function ThemeWrapper({ theme, ...props }: InboxProps) {
  return (
    <ThemeProvider theme={theme}>
      <Inbox {...props} />
    </ThemeProvider>
  );
}

export default ThemeWrapper;
