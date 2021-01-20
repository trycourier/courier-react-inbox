import React from "react";
import {
  Container, ContentContainer, Title, Body, Icon,
} from "./styled";

function Message({
  title, body, icon,
}) {
  return (
    <Container>
      <Icon src={icon}/>
      <ContentContainer>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </ContentContainer>
    </Container>
  );
}

export default Message;