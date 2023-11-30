import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Board from "./components/Board";
import Background from "./components/background";
import Gird from "./components/Gird";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Background />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Board />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
