/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import useBoardHistory from "../stores/useBoardHistory";
import styled from "@emotion/styled";
import Gothello from "../Gothello";
import useBoardStore from "../stores/useBoardStore";

import { css } from "@emotion/react";
import uselatestPoint from "../stores/uselatestPoint";

const containerStyles = css`
  display: grid;
  padding: 1rem;
  gap: 5px;
`;

const rowStyles = css`
  display: inline-flex;
  gap: 0.2rem;
`;

const cellStyles = css`
  padding: 10px;
  border: 1px solid #ccc;
  min-width: 30px;
  min-height: 30px;
  text-align: center;
`;
const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;

  & > div {
    margin-bottom: 10px;

    & > button {
      margin-right: 10px;
    }
  }
`;

const BoardHistoryUI: React.FC = () => {
  const pointHistory: number[][] = [[]];
  let hpoint = 0;
  const { board, setBoard } = useBoardStore();
  const { latestX, latestY, setlatestX, setlatestY } = uselatestPoint();
  const { grid, undo, redo, pointer, history, resetHistory, updateGrid } =
    useBoardHistory((state) => ({
      grid: state.grid,
      undo: state.undo,
      redo: state.redo,
      updateGrid: state.updateGrid,
      pointer: state.pointer,
      history: state.history,
      resetHistory: state.resetHistory,
    }));

  useEffect(() => {
    updateGrid(board);
    const temp = [latestX, latestY];
    pointHistory.push(temp);
    hpoint = pointer;
  }, [latestX, latestY, board, updateGrid]);

  useEffect(() => {
    hpoint = pointer;

    setBoard((grid) => {
      return grid;
    });
  }, [grid, board]);

  useEffect(() => {
    pointHistory.length = 0;
  }, [resetHistory]);

  return (
    <>
      <HistoryWrapper>
        <Gothello board={grid} />

        <div>
          <button onClick={undo} disabled={pointer === 0}>
            Undo
          </button>
          <button onClick={redo} disabled={pointer === history.length - 1}>
            Redo
          </button>
          <button onClick={resetHistory}>Reset</button>
        </div>
        {/* 예시로 히스토리에 따라 그리드 상태 표시 */}
        <div css={containerStyles}>
          {grid.map((row, rowIndex) => (
            <div css={rowStyles} key={rowIndex}>
              {row.map((cell, colIndex) => (
                <span css={cellStyles} key={colIndex}>
                  {cell}
                </span>
              ))}
            </div>
          ))}
        </div>
      </HistoryWrapper>
    </>
  );
};

export default BoardHistoryUI;
