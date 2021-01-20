import styled from "styled-components";

export const Container = styled.div`
  svg {
    cursor: pointer;
    height: 20px;
    width: 20px;
    :hover g {
      fill: #9d3789;
      transition: all 0.05s ease-in-out;
    }
  }
`;