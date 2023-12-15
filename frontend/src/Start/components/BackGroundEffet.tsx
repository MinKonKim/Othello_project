import React from "react";
import styled from "@emotion/styled";
import BackgroudEffect from "../../assets/backgroundEffect.mp4";
const VideoBackground = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* 비디오가 캔버스에 꽉 차게 표시되도록 설정 */
  z-index: -99; /* 다른 요소 위에 배치하기 위해 z-index 설정 */
  mix-blend-mode: screen;
`;
const BackGroundEffet: React.FC = () => {
  return (
    <VideoBackground muted autoPlay loop>
      <source src={BackgroudEffect} type="video/mp4" />
    </VideoBackground>
  );
};

export default BackGroundEffet;
