import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  display: flex;

`;

export const Title = styled.div`
  color: rgb(52, 69, 99);
  font-size: 16px;
  line-height: 15px;
  font-weight: bold;
`;

export const ContentContainer = styled.div`
    margin: 0 20px;
`;

export const Body = styled.div`
  margin-top: 2px;
  font-size: 12px;
`;

export const Icon = styled.img`
  object-fit: contain;
  height: 30px;
  width: 30px;
  flex-shrink: 0;
  padding: 7px;
  background-color: rgb(249, 249, 249);
  border-radius: 50%;
  margin-left: 10px;
`;