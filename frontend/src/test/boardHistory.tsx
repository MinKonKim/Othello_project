import React from "react";
import useBoardHistory from "../stores/useBoardHistory";

const BoardHistory: React.FC = () => {
  const { grid, undo, redo, pointer, history, resetHistory } = useBoardHistory(
    (state) => ({
      grid: state.grid,
      undo: state.undo,
      redo: state.redo,
      pointer: state.pointer,
      history: state.history,
      resetHistory: state.resetHistory,
    })
  );

  return (
    <div>
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
      <div>
        {grid.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, colIndex) => (
              <span key={colIndex}>{cell}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardHistory;
