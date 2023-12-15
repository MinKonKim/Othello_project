import blackStoneImg from "../../assets/blackStone.svg";
import whiteStoneImg from "../../assets/whiteStone.svg";
import styled from "@emotion/styled";
import useStoneStore from "../../stores/useStoneStore";
import { useEffect } from "react";
import { CountingStone } from "../../utils/CountingStone";

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
const Item = styled.span`
  display: flex;
  align-items: center;
  margin-left: 15vh;
`;
const Image = styled.img`
  margin-right: 5px;
  padding-right: 5px;
  margin-right: 4px;
`;
interface ScoreBoardProps {
  board: number[][];
}
const ScoreBoard = ({ board }: ScoreBoardProps) => {
  const {
    stonecount,
    blackStone,
    whiteStone,
    setBlackStoneCount,
    setWhiteStoneCount,
  } = useStoneStore();
  useEffect(() => {
    setBlackStoneCount(CountingStone(board, 1));
    setWhiteStoneCount(CountingStone(board, 2));
  }, [stonecount]);

  return (
    <Container>
      <Item>
        <Image src={blackStoneImg} alt="Black Stone" />
        <h2> : {blackStone} </h2>
      </Item>
      <Item>
        <Image src={whiteStoneImg} alt="White Stone" />
        <h2> : {whiteStone}</h2>
      </Item>
    </Container>
  );
};

export default ScoreBoard;
