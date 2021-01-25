import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: initial;
  position: relative;
`;

export const ReadIndicator = styled.div`
  background-color: rgba(157, 55, 137, .5);
  height: 50px;
  width: 2px;
  position: absolute;
  left: 0;
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
  height: 40px;
  width: 40px;
  flex-shrink: 0;
  padding: 5px;
  background-color: rgb(249, 249, 249);
  border-radius: 50%;
  margin-left: 10px;
`;