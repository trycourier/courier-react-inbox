import React from "react";
import {
  Root, Container, Title, Body, Icon, ReadIndicator,
} from "./styled";

function Message({
  title, body, icon,
  onClick, read,
}) {
  return (
    <Root read={read} onClick={onClick}>
      {read && <ReadIndicator />}
      <Icon src={icon}/>
      <Container>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </Container>
    </Root>
  );
}

export default Message;
