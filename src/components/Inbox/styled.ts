import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-shadow: rgba(157, 55, 137, 0.2) 0px 4px 12px;
  max-width: 400px;
  border-radius: 20px;
`;

export const Title = styled.div`
  color: rgb(52, 69, 99);
  font-size: 16px;
  font-weight: bold;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  > div {
    margin-bottom: 20px;
    :last-child {
      margin-bottom: 0px;
    }
  }
`;

export const Footer = styled.div`
  border-top: 1px solid rgb(213, 213, 213);
  display: flex;
  justify-content: center;
  height: 42px;
  align-items: center;
  img {
    opacity: 50%;
    filter: grayscale(100%);
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-bottom: 2px solid rgb(157, 55, 137);
  position: relative;
`;

export const Close = styled.img`
  cursor: pointer;
  height: 14px;
  width: 14px;
  position: absolute;
  right: 20px;
`;

export const SubTitle = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: rgb(143, 143, 143);
`;