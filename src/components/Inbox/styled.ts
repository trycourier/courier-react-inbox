import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  box-shadow: rgba(157, 55, 137, 0.2) 0px 4px 12px;
  max-width: 400px;
  border-radius: 20px;
  overflow: hidden;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? "visible" : "hidden"};
  transition: all .1s ease-in-out;
`;

export const Title = styled.div`
  color: rgb(52, 69, 99);
  font-size: 16px;
  font-weight: bold;
  user-select: none;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 5px;
  > div {
    padding-bottom: 15px;
    margin-bottom: 15px;
    box-shadow: 0 .25px rgba(0, 0, 0, .4);
    :last-child {
      box-shadow: none;
    }
  }
`;

export const Footer = styled.div`
  background-color: rgb(251, 251, 251);
  border-top: 1px solid rgb(234, 238, 240);
  justify-content: center;
  display: flex;
  height: 38px;
  align-items: center;
  img {
    filter: grayscale(100%);
    height: 20px;
    width: 20px;
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
  user-select: none;
`;

export const SubTitle = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 14px;
  font-weight: bold;
  color: rgb(143, 143, 143);
  user-select: none;
`;