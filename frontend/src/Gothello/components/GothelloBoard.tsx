import React, { useEffect } from "react";
import styled from "@emotion/styled";
import useBoardStore from "../../stores/gameBoardStore";

const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(8, 1fr);
  gap: 2px;
`;

/** 흑돌 : 1 백돌 :2 없음 : 0 */
const Board: React.FC = () => {
  const { values, addValue } = useBoardStore();
  useEffect(() => {
    /**초기 게임보드 값 설정 */
    for (let i = 0; i < 64; i++) {
      if (i === 27 || i === 36) {
        addValue(2);
      } else if (i === 28 || i === 35) {
        addValue(1);
        // board.push(<Cell keyId={i} value={1} />);
      } else {
        addValue(0);
        // board.push(<Cell keyId={i} value={0} />);
      }
    }
  }, [values]);
  console.log(values);
  return (
    // 8 * 8 베열 만들기
    <div>
      <div>
        <BoardContainer>{`${values}`}</BoardContainer>
        <h2> 현재 돌 색깔</h2>
      </div>
    </div>
  );
};

export default Board;
