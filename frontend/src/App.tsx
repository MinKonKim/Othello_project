import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gothello from "./Gothello";
import StartPage from "./Start";
import BoardHistoryUI from "./test/boardHistory";
import useBoardStore from "./stores/useBoardStore";

function App() {
  const { board } = useBoardStore();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="game" element={<Gothello board={board} />} />
          <Route path="/game/dev" element={<BoardHistoryUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
