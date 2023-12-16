import { create } from "zustand";

interface BoardHistory {
  grid: number[][];
  history: number[][][]; // 과거 상태를 저장할 배열
  pointer: number; // 현재 history의 인덱스를 가리키는 포인터
  updateGrid: (newBoard: number[][]) => void;
  undo: () => void; // 이전 상태로 되돌리는 함수
  redo: () => void; // 다음 상태로 이동하는 함수
  resetHistory: () => void; // 히스토리 초기화 함수
}

const useBoardHistory = create<BoardHistory>((set) => ({
  grid: Array.from({ length: 8 }, () => Array.from({ length: 8 }, () => 0)),
  history: [[]], // 초기 상태 추가
  pointer: 0, // 초기 포인터 값
  updateGrid: (newBoard) =>
    set((state) => ({
      grid: newBoard,
      history: [...state.history.slice(0, state.pointer + 1), newBoard], // 현재 상태 추가
      pointer: state.pointer + 1, // 포인터 업데이트
    })),
  undo: () =>
    set((state) => ({
      grid: state.history[state.pointer - 1], // 이전 상태로 되돌림
      pointer: state.pointer - 1, // 포인터 업데이트
    })),
  redo: () =>
    set((state) => ({
      grid: state.history[state.pointer + 1], // 다음 상태로 이동
      pointer: state.pointer + 1, // 포인터 업데이트
    })),
  resetHistory: () =>
    set({
      history: [[]], // 초기화하면서 초기 상태 추가
      pointer: 0, // 포인터 초기화
    }),
}));

export default useBoardHistory;
