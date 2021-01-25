import React from "react";
import { Container } from "./styled";
//@ts-ignore
import Bell from "./Bell";


function Indicator({ onClick }) {
  return (
    <Container onClick={onClick}>
      <Bell />
    </Container>
  );
}

export default Indicator;
