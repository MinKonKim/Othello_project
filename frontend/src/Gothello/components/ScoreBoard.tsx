import blackStone from "../../assets/blackStone.svg";
import whiteStone from "../../assets/whiteStone.svg";
import styled from "@emotion/styled";

interface ScoreBoardProps {
  bCount: number;
  wCount: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.span`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  margin-right: 5px;
`;

const ScoreBoard = ({ bCount, wCount }: ScoreBoardProps) => {
  return (
    <Container>
      <Item>
        <Image src={blackStone} alt="Black Stone" />
        <h2> : {bCount} </h2>
      </Item>
      <Item>
        <Image src={whiteStone} alt="White Stone" />
        <h2> : {wCount}</h2>
      </Item>
    </Container>
  );
};

export default ScoreBoard;
