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
import { FindStoneIdx, isGameFinish } from "../utils/Global";
import { IsCanMove } from "./../utils/IsCanMove";
//#region  CSS

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LeftSection = styled.div`
  flex: 1;
  margin-right: 50px;
  margin-left: 2.75vw;
  flex-direction: colum;
`;
const CenterSection = styled.div`
  flex: 1;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;
//#endregion

interface GothelloProps {
  board: number[][];
}

const Gothello = ({ board }: GothelloProps) => {
  //targets 초기화
  const intialTargets = Array(8).fill(Array(8).fill(false));
  const [targets, setTargets] = useState<boolean[][]>(intialTargets);

  const { resetBoard } = useBoardStore();
  const { current, setCurrent, whiteStone, blackStone } = useStoneStore();
  /**Modal State Setting */

  const [passButtonVisible, setPassButtonVisible] = useState(false);

  /**PASS 버튼 클릭시 => 다음 턴으로 넘겨야 한다. */
  const handleButtonState = () => {
    setPassButtonVisible((prev) => !prev);
    if (current === 1) setCurrent(2);
    else setCurrent(1);
  };

  useEffect(() => {
    resetBoard();
  }, []);
  useEffect(() => {
    // 타겟서칭을 할 돌 기준 잡기
    const keystone = FindStoneIdx(board, current);
    let X = keystone.x;
    let Y = keystone.y;

    // 타켓 표시를 위한 좌표 찾기
    const newTargets = ItCanPlaces(board, X, Y, current);
    setTargets(newTargets);

    if (isGameFinish(blackStone, whiteStone)) {
      setPassButtonVisible(false);
    } else if (IsCanMove(newTargets)) {
      setPassButtonVisible(true);
    }
  }, [current]);

  return (
    <>
      <Background />
      <Modal />
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
