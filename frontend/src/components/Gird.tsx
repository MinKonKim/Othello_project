import styled from "@emotion/styled";

const BoardBackground = styled.div`
  background-size: cover;
  width: 400px; /* 격자 크기에 따라 적절히 조절 */
  height: 400px; /* 격자 크기에 따라 적절히 조절 */
`;
const BoardContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(8, 50px); /* 8개의 열을 가로로 나열합니다. */
  grid-template-rows: repeat(8, 50px); /* 8개의 행을 세로로 나열합니다. */
  z-index: -50;
  background-position: center;
  height: 100vh;
  width: 100vw;
`;

const Cells = styled.div`
  width: 50px;
  height: 50px;
  background-color: green; /* 오델로 보드의 배경색 */
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
`;

const Gird = () => {
  const renderGrid = () => {
    const cells = [];

    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        // 셀 색상을 교차로 지정하여 체스판 패턴 생성
        cells.push(<Cells key={i} />);
      }
    }

    return cells;
  };

  return (
    <BoardBackground>
      <BoardContainer>{renderGrid()}</BoardContainer>;
    </BoardBackground>
  );
};

export default Gird;
