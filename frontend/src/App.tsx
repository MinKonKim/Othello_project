import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gothello from "./Gothello";
import StartPage from "./Start";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="game" element={<Gothello />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
