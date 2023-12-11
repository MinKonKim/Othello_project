import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Background from "../components/background";
import Modal from "../components/Modal";

import GothelloBoard from "./components/GothelloBoard";
import CurrentPlayer from "./components/CurrentPlayer";
import ScoreBoard from "./components/ScoreBoard";
import PassButton from "./components/PassButton";

import useBoardStore from "../stores/useBoardStore";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftSection = styled.div`
  flex: 1;
`;
const CenterSection = styled.div`
  flex: 1;
  margin: 0 auto;
`;

const RightSection = styled.div`
  flex: 1;
  text-align: right;
`;

const Gothello: React.FC = () => {
  const { board, isCanMove, setIsCanMove } = useBoardStore();
  /** 흑돌 백돌 카운팅 */
  /**Modal State Setting */
  const [isOpen, setIsOpen] = useState(false);

  const [passButtonVisible, setPassButtonVisible] = useState(false);

  const handleModalState = () => {
    setIsOpen((prev) => !prev);
  };

  /**PASS 버튼 클릭시 => 다음 턴으로 넘겨야 한다. */
  const handleButtonState = () => {
    setPassButtonVisible((prev) => !prev);
  };

  return (
    <>
      <Background />
      <Modal isOpen={isOpen} onClose={handleModalState} />
      <Container>
        <LeftSection>
          <CurrentPlayer />
          <GothelloBoard board={board} />
          <ScoreBoard board={board} />
        </LeftSection>
        <CenterSection>
          <PassButton
            isVisible={passButtonVisible}
            onClose={handleButtonState}
          />
        </CenterSection>
        <RightSection></RightSection>
      </Container>
    </>
  );
};

export default Gothello;
