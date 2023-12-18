import React from "react";
import styled from "@emotion/styled";

const WhiteRectangle = styled.div`
  position: fixed;
  top: 50%;
  right: 10rem;
  transform: translateY(-50%);
  width: 30vw;
  height: 88vh;
  background-color: white;
  opacity: 0.7;
  border-radius: 10px;
  margin: 5px;
  max-width: 70%;
  padding: 10px;
  /* 그 외 원하는 스타일 추가 가능 */
`;

const Chatbox: React.FC = () => {
  return <WhiteRectangle>채팅박스</WhiteRectangle>;
};

export default Chatbox;
