import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gothello from "./Gothello";
import StartPage from "./Start";
import BoardHistoryUI from "./test/boardHistory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="game" element={<Gothello />} />
          <Route path="/game/dev" element={<BoardHistoryUI />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
