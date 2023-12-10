import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

import Background from "../components/background";
import GothelloBoard from "./components/GothelloBoard";
import CurrentPlayer from "./components/CurrentPlayer";
import ScoreBoard from "./components/ScoreBoard";
import useBoardStore from "../stores/useBoardStore";
import useStoneStore from "../stores/useStoneStore";
import { CountingStone } from "../utils/CountingStone";

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
  const { board } = useBoardStore();
  const { stonecount } = useStoneStore();

  const [whiteCount, setWhiteCount] = useState(2);
  const [blackCount, setBlackCount] = useState(2);

  useEffect(() => {
    setWhiteCount(CountingStone(board, 2));
    setBlackCount(stonecount - whiteCount);
  }, [stonecount]);

  return (
    <Container>
      <LeftSection>
        <CurrentPlayer />
        <GothelloBoard />
      </LeftSection>
      <CenterSection>
        <Background />
        <ScoreBoard wCount={whiteCount} bCount={blackCount} />
      </CenterSection>
      <RightSection></RightSection>
    </Container>
  );
};

export default Gothello;
