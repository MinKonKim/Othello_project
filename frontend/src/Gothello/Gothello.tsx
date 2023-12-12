import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

import Background from "../components/background";
import Modal from "../components/Modal";

import GothelloBoard from "./components/GothelloBoard";
import CurrentPlayer from "./components/CurrentPlayer";
import ScoreBoard from "./components/ScoreBoard";
import PassButton from "./components/PassButton";

import useBoardStore from "../stores/useBoardStore";
import useStoneStore from "../stores/useStoneStore";
import { ItCanPlaces } from "../utils/CheckPlace";
import { FindStoneIdx } from "../utils/Global";
import { IsCanMove } from "../utils/IsCanMove";
//#region  CSS
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftSection = styled.div`
  flex: 1;
  margin-right: 50px
  flex-dirction: colum;
`;
const CenterSection = styled.div`
  flex: 1;
  margin: 0 auto;
`;

const RightSection = styled.div`
display:felx
felx-direction:colum;
justify-content: flex-start;
align-items: flex-end;
`;
const ButtonContainer = styled.div`
  margin-top: 20px;
`;
//#endregion
const Gothello: React.FC = () => {
  const { board } = useBoardStore();
  const { current, whiteStone, blackStone, stonecount, setCurrent } =
    useStoneStore();
  /**Modal State Setting */
  const [isOpen, setIsOpen] = useState(false);

  const [passButtonVisible, setPassButtonVisible] = useState(false);

  const handleModalState = () => {
    setIsOpen((prev) => !prev);
  };

  /**PASS 버튼 클릭시 => 다음 턴으로 넘겨야 한다. */
  const handleButtonState = () => {
    setPassButtonVisible((prev) => !prev);
    if (current === 1) setCurrent(2);
    else setCurrent(1);
  };

  // 타겟서칭을 할 돌 기준 잡기
  const keystone = FindStoneIdx(board, current);
  let X = keystone.x;
  let Y = keystone.y;

  // 타켓 표시를 위한 좌표 찾기
  const targets = ItCanPlaces(board, X, Y, current);

  // 돌을 놓을 수 있는 자리가 있는가?

  useEffect(() => {
    if (!IsCanMove(targets)) {
      console.log("돌을 놓을 수 없습니다.");
      // 가득 찼다면
      if (stonecount === 64) {
        setIsOpen(true);
      } else {
        setPassButtonVisible(true);
      }
    }
  }, [current]);

  return (
    <>
      <Background />
      <Modal blackStone={blackStone} whiteStone={whiteStone} />
      <Container>
        <LeftSection>
          <CurrentPlayer />
          <GothelloBoard board={board} targets={targets} />
          <ScoreBoard board={board} />
        </LeftSection>
        <CenterSection>
          <ButtonContainer>
            <PassButton
              isVisible={passButtonVisible}
              onClose={handleButtonState}
            />
          </ButtonContainer>
        </CenterSection>
      </Container>
    </>
  );
};

export default Gothello;
