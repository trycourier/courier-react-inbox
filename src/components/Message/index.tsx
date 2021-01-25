import React from "react";
import {
  Container, ContentContainer, Title, Body, Icon, ReadIndicator,
} from "./styled";

function Message({
  title, body, icon, onClick, read,
}) {
  return (
    <Container onClick={onClick}>
      {!read && <ReadIndicator />}
      <Icon src={icon}/>
      <ContentContainer>
        <Title>{title}</Title>
        <Body>{body}</Body>
      </ContentContainer>
    </Container>
  );
}

export default Message;
