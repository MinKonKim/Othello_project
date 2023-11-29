import React from "react";
import Cell from "./Cell";
interface GridProps {
  rows: number;
  columns: number;
}

const Grid: React.FC<GridProps> = ({ rows, columns }) => {
  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(<Cell keyId={`${i}-${j}`} />);
      }
      grid.push(
        <div key={i} className="grid-row">
          {row}
        </div>
      );
    }
    return grid;
  };

  return <div className="grid-container">{renderGrid()}</div>;
};

const Board: React.FC = () => {
  return (
    <div className="grid-wrapper">
      <Grid rows={8} columns={8} />
    </div>
  );
};
export default Board;
